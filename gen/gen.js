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
  page.setDefaultTimeout(5000);
  page.setDefaultNavigationTimeout(5000);
  await page.setViewport({ width: 0, height: 0 });
}

async function main() {
  const routes = await getRoutes();

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
    await page.goto(WEBSITE_ROOT_URL + '/#/' + route);
    await page.waitForNetworkIdle({  });

    const pageSourceHTML = await page.content();

    // await page.close();    

    const dom = new jsdom.JSDOM(pageSourceHTML
      .replaceAll('href="/"', 'href="."')
      .replaceAll('?id=', '.html#')
      .replaceAll('js.html#', 'js.html?id='));
    const document = dom.window.document;

    removeAllSelector(document, '.delete-static');
    removeAllSelector(document, 'script[src*="livereload.js"]');
    removeAllSelector(document, 'iframe[allow="join-ad-interest-group"]');

    const linksToFix = document.querySelectorAll('a[href^="#/"]');
    for (const linkToFix of linksToFix) {
      linkToFix.href = linkToFix.getAttribute("href").slice(2);
    }

    await fs.writeFileSync(OUT_DIR + route + '.html', dom.serialize());
  }



  await browser.close();
}

main();



