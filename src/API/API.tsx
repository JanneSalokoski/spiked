interface fetch_function_interface {
	(): [key: string]: any;
}

interface API_request_interface {
	url: string;
	method: string;
	properties?: [key: string]: any;
	parameters?: [key: string]: any;
	fetch: fetch_function_interface;
}

class API_request implements API_request_interface {
	constructor(endpoint: string, method:string="GET", properties={}) {
		this.url = new URL(`http://salokoski.eu/socket/${endpoint}.php`);
		this.method = method;
		this.properties = properties;
	}

	async fetch() {
		const response = await fetch(this.url, this.properties);
		const data = await response.json();
		return data;
	}
}

interface Properties_object {
	method: "GET" | "POST";
	body: string;
}

class API_get_request extends API_request {
	constructor(endpoint: string, parameters: Parameters) {
		super(endpoint, "GET");

		this.parameters = parameters;
		this.url.search = new URLSearchParams(this.parameters);
		this.properties = {method: "GET"};
	}
}

interface Body {
	[key: string]: any;
}

interface API_post_request_inteface extends API_request_interface {
		get_properties_object: (): Properties_object;	
}

class API_post_request extends API_request implements API_post_request_inteface {
	constructor(endpoint: string, body: Body) {
		super(endpoint, "POST");

		this.body = body;
		this.properties = this.get_properties_object();
	}

	get_properties_object(): Properties_object {
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
	constructor(id: number) {
		super("get_product", {id: id});
	}
}

class Set_Product_API_Request extends API_post_request {
	constructor(body: [key: string]: any) {
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
	constructor(id: number) {
		super("get_customer", {id: id});
	}
}

class Set_Customer_API_Request extends API_post_request {
	constructor(body: [key: string]: any) {
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
	constructor(id: number) {
		super("get_transaction", {id: id});
	}
}

class Set_Transaction_API_Request extends API_post_request {
	constructor(body: [key: string]: any) {
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