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
  await page.setViewport({ width: 1920, height: 1080 });
}

async function main() {
  const routes = await getRoutes();

  const browser = await puppeteer.launch();

  console.log("Building " + routes.length + " files.");

  for (const route of routes) {
    console.log(` - Building ${route}`);
    const page = await browser.newPage();
    await setupPage(page);
    await page.goto(WEBSITE_ROOT_URL + '/#/' + route);
    await page.waitForNetworkIdle({  });

    const pageSourceHTML = await page.content();

    await page.close();    

    const dom = new jsdom.JSDOM(pageSourceHTML
      .replaceAll('href="/"', 'href="."')
      .replaceAll('?id=', '.html#'));
    const document = dom.window.document;

    removeAllSelector(document, '.delete-static');
    removeAllSelector(document, 'script[src*="livereload.js"]');

    const linksToFix = document.querySelectorAll('a[href^="#/"]');
    for (const linkToFix of linksToFix) {
      linkToFix.href = linkToFix.getAttribute("href").slice(2);
    }

    await fs.writeFileSync(OUT_DIR + route + '.html', dom.serialize());
  }

  await browser.close();
}

main();



