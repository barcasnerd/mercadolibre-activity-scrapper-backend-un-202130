const scraper = require('../services/scraper');

async function get(req, res) {
	try {
		var search = "Silla gamer";
		search = search.replace(" ","-");
		var url = "https://www.mercadolibre.com.co/";
		var completeUrl = `https://listado.mercadolibre.com.co/${search}_OrderId_PRICE`
		const products = await scraper.getProducts(completeUrl);
		res.writeJSONResponse({ data: { products } }, 200);
	} catch(err) {
		res.writeJSONResponse({ data: null, err: err.message }, 500);
	}
}

module.exports = {
	get,
};
