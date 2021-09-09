const puppeteer = require('puppeteer');

/**
 * Go to url and return the page title
 * @param {string} url
 * @returns {string}
 */
async function getProducts(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url, { waitUntil: 'networkidle0' });
	const title = await page.evaluate(() => document.querySelector('head > title').innerText);

	let products = await page.evaluate(() => document.querySelector('div[class="class="ui-search-layout ui-search-layout--stack""]'));
	
	
	
	await browser.close();

	return products;
}

module.exports = {
	getProducts,
};
