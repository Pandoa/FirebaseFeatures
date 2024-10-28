const promisify = require('util').promisify;
const fs = require('fs');
const readdir = promisify(fs.readdir);
const puppeteer = require('puppeteer');
const jsdom = require("jsdom");

const WEBSITE_ROOT_URL = "http://localhost:3000";
const OUT_DIR = 'build/';

const getRoutes = async (root) => (
  await readdir(root)).filter(f => f.endsWith('.md')).map(r => r.split('.')[0]).concat('');

const removeAllSelector = (document, selector) => {
  const deleteElems = document.querySelectorAll(selector);
  for (const deleteElem of deleteElems) {
    deleteElem.remove();
  }
};

const setupPage = async (page) => {
  const timeout = getConfig()["load_timeout"] ?? 10000;
  page.setDefaultTimeout(timeout);
  page.setDefaultNavigationTimeout(timeout);
  await page.setViewport({ width: 0, height: 0 });
}

const getConfig = () => {
  try {
    return JSON.parse(fs.readFileSync("./gen/gen.config.json").toString('utf-8'));
  }
  catch (e)
  {
    return {}
  }
}

async function main() {
  const config = getConfig();
  const routes = await getRoutes(config["src_dir"]);

  const browser = await puppeteer.launch({ 
    headless: false,
    args: ["--disable-extensions", "--no-sandbox"],
    waitForInitialPage: false,
    defaultViewport: null,
    ignoreHTTPSErrors: true,
  });

  const [page] = await browser.pages();
  await page.evaluateOnNewDocument(() => window.puppeteer = true);
  await setupPage(page);

  console.log("Building " + routes.length + " files.");

  for (const route of routes) {
    const routeName = route.length == 0 ? 'index' : route;
    console.log(` - Building ${route}`);
    await page.goto((config["root_url"] ?? WEBSITE_ROOT_URL) + '/#/' + route);
    await page.waitForNetworkIdle({  });

    let pageSourceHTML = await page.content();

    for (const strReplace of (config["string_replaces"] ?? [])) {
      if (Array.isArray(strReplace) && strReplace.length >= 2) {
        pageSourceHTML = pageSourceHTML.replaceAll(strReplace[0], strReplace[1]);
      }
    }

    const dom = new jsdom.JSDOM(pageSourceHTML);
    const document = dom.window.document;

    for (const delSelector of (config["remove_selectors"] ?? [])) {
      removeAllSelector(document, delSelector);
    }

    const pageTitle = document.querySelector('title');
    const pageDescription = document.querySelector('meta[name="description"]');
    const pageKeywords = document.querySelector('meta[name="keywords"]');
    const ldTag = document.querySelector('script[type="application/ld+json"]');
    const ldTagContent = JSON.parse(ldTag.innerHTML);

    ldTagContent["datePublished"] = new Date().toISOString();

    if (typeof config["title"] === 'object' && config["title"][route]) {
      ldTagContent["headline"] = pageTitle.innerHTML = config["title"][route];
    }
    else {
      pageTitle.innerHTML += ' | Firebase for Unreal Engine';
    }

    if (typeof config["descriptions"] === 'object' && config["descriptions"][route]) {
      ldTagContent["description"] = pageDescription.setAttribute("content", config["descriptions"][route]);
    }
    
    if (typeof config["keywords"] === 'object' && config["keywords"][route]) {
      const keywords = config["keywords"][route];
      pageKeywords.setAttribute("content", keywords);
      ldTagContent["keywords"] = keywords.split(',').slice(0, 99);
    }

    const linksToFix = document.querySelectorAll('a[href^="#/"]');
    for (const linkToFix of linksToFix) {
      linkToFix.href = linkToFix.getAttribute("href").slice(2);
    }

    
    ldTag.innerHTML = JSON.stringify(ldTagContent);

    fs.writeFileSync((config["out_dir"] ?? OUT_DIR) + routeName + '.html', 
      dom.serialize().replaceAll('\n\n', '\n').replaceAll('\n\n', '\n'));
  }

  await browser.close();
}

main();



