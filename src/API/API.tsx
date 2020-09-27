const BASE_URL = "http://salokoski.eu/socket";

async function get_request(endpoint, payload={}) {
	let url = new URL(`${BASE_URL}/${endpoint}.php`);
	url.search = new URLSearchParams(payload);
	console.log(url);

	const response = await fetch(url);
	const data = await response.json();
	return data;
}

async function post_request(endpoint, payload) {
	const url = `${BASE_URL}/${endpoint}.php`;
	const response = await fetch(url, {
		method: "POST",
		body: JSON.stringify(payload)
	});
	const data = await response.json();
	return data;
}

const API = {
	get_products: async () => await get_request("get_product"),
	get_product: async (id) => await get_request("get_product", {id: id}),
	get_customers: async () => await get_request("get_product"),
	get_customer: async (id) => await get_request("get_product", {id: id}),
	get_transactions: async () => await get_request("get_product"),
	get_transaction: async (id) => await get_request("get_product", {id: id}),

	set_product: async () => await post_request("set_product", properties),
	set_customer: async () => await post_request("set_product", properties),
	set_transaction: async () => await post_request("set_product", properties),
};

export default API;