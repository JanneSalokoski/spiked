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

class API_request {
	constructor(endpoint, method="GET", properties={}) {
		this.url = new URL(`${BASE_URL}/${endpoint}.php`);
		this.method = method;
		this.properties = properties;
	}

	async fetch() {
		const response = await fetch(this.url, this.properties);
		const data = await response.json();
		return data;
	}
}

class API_get_request extends API_request {
	constructor(endpoint, parameters) {
		super(endpoint, "GET");

		this.parameters = parameters;
		this.url.search = new URLSearchParams(this.parameters);
		this.properties = {method: "GET"};
	}
}

class API_post_request extends API_request {
	constructor(endpoint, body) {
		super(endpoint, "method");

		this.body = body;
		this.properties = this.get_properties_object();
	}

	get_properties_object() {
		return {
			method: "POST",
			body: JSON.stringify(this.body)
		};
	}	
}

// Product API calls

class Get_Products_API_Request extends API_get_request {
	constructor() {
		super("get_product");
	}
}

class Get_Product_API_Request extends API_get_request {
	constructor(id) {
		super("get_product", {id: id});
	}
}

class Set_Product_API_Request extends API_post_request {
	constructor(body) {
		super("set_product", body);
	}
}

// Customer API calls

class Get_Customers_API_Request extends API_get_request {
	constructor() {
		super("get_customers");
	}
}

class Get_Customer_API_Request extends API_get_request {
	constructor(id) {
		super("get_customer", {id: id});
	}
}

class Set_Customer_API_Request extends API_post_request {
	constructor(body) {
		super("set_customer", body);
	}
}

// Transaction API calls

class Get_Transactions_API_Request extends API_get_request {
	constructor() {
		super("get_transactions");
	}
}

class Get_Transaction_API_Request extends API_get_request {
	constructor(id) {
		super("get_transaction", {id: id});
	}
}

class Set_Transaction_API_Request extends API_post_request {
	constructor(body) {
		super("set_transaction", body);
	}
}


class API {
	constructor() {
		this.Get_Products = Get_Products_API_Request;
		this.Get_Product = Get_Product_API_Request;
		this.Set_Product = Set_Product_API_Request;

		this.Get_Customers = Get_Customers_API_Request;
		this.Get_Customer = Get_Customer_API_Request;
		this.Set_Customer = Set_Customer_API_Request;

		this.Get_Transactions = Get_Transactions_API_Request;
		this.Get_Transaction = Get_Transaction_API_Request;
		this.Set_Transaction = Set_Transaction_API_Request;
	}
}

export default new API();