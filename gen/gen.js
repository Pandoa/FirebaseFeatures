const promisify = require('util').promisify;
const fs = require('fs');
const readdir = promisify(fs.readdir);
const puppeteer = require('puppeteer');
const jsdom = require("jsdom");

const WEBSITE_ROOT_URL = "http://localhost:3000";
const OUT_DIR = 'build/';

const getRoutes = async () => (await readdir('./docs/')).filter(f => f.endsWith('.md')).map(r => r.split('.')[0]);

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
  const routes = await getRoutes();

  const config = getConfig();

  const browser = await puppeteer.launch({ 
    headless: false,
    args: ["--disable-extensions", "--no-sandbox"],
    waitForInitialPage: false,
    defaultViewport: null,
    ignoreHTTPSErrors: true,
  });

  console.log("Building " + routes.length + " files.");

  for (const route of routes) {
    console.log(` - Building ${route}`);
    const [page] = await browser.pages();
    await setupPage(page);
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

    pageTitle.innerHTML += ' | Firebase for Unreal Engine';

    if (typeof config["descriptions"] === 'object' && typeof config["descriptions"][route]) {
      pageDescription.setAttribute("content", config["descriptions"][route]);
    }
    
    if (typeof config["keywords"] === 'object' && typeof config["keywords"][route]) {
      pageKeywords.setAttribute("content", config["keywords"][route]);
    }

    const linksToFix = document.querySelectorAll('a[href^="#/"]');
    for (const linkToFix of linksToFix) {
      linkToFix.href = linkToFix.getAttribute("href").slice(2);
    }

    fs.writeFileSync((config["out_dir"] ?? OUT_DIR) + route + '.html', dom.serialize());
  }

  await browser.close();
}

main();



