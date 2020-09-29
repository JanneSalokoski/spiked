interface PropertiesInterface {
  [key: string]: any;
}

interface ParametersInterface {
  [key: string]: any;
}

interface FetchFunctionInterface {
  (): Object;
}

interface APIRequestInterface {
  fetch: FetchFunctionInterface;
}

class APIRequest implements APIRequestInterface {
  url: URL;
  method: string;
  properties: PropertiesInterface;
  parameters: ParametersInterface;

  constructor (endpoint: string, method:string='GET', properties = {}) {
    this.url = new URL(`http://salokoski.eu/socket/${endpoint}.php`);
    this.method = method;
    this.properties = properties;
  }

  async fetch (): Promise<any> {
    const response = await fetch(this.url, this.properties);
    const data = await response.json();
    return data;
  }
}

interface PropertiesObject {
  method: 'GET' | 'POST';
  body: string;
}

class APIGetRequest extends APIRequest {
  constructor (endpoint: string, parameters: ParametersInterface) {
    super(endpoint, 'GET');

    this.parameters = parameters;
    this.url.search = new URLSearchParams(this.parameters);
    this.properties = { method: 'GET' };
  }
}

interface GetPropertiesObjectInterface {
  (): PropertiesInterface;
}

interface Body {
  [key: string]: any;
}

interface APIPostRequestInterface extends APIRequestInterface {
    getPropertiesObject: GetPropertiesObjectInterface;
}

interface BodyInterface {
  [key: string]: any;
}

class APIPostRequest extends APIRequest implements APIPostRequestInterface {
  body: BodyInterface;

  constructor (endpoint: string, body: Body) {
    super(endpoint, 'POST');

    this.body = body;
    this.properties = this.getPropertiesObject();
  }

  getPropertiesObject (): PropertiesObject {
    return {
      method: 'POST',
      body: JSON.stringify(this.body)
    };
  }
}

// Product API calls

class GetProductsAPIRequest extends APIGetRequest {
  constructor() {
    super('get_product', {});
  }
}

class GetProductAPIRequest extends APIGetRequest {
  constructor (id: number) {
    super('get_product', {id: id});
  }
}

class SetProductAPIRequest extends APIPostRequest {
  constructor (body: BodyInterface) {
    super('set_product', body);
  }
}

// Customer API calls

class GetCustomersAPIRequest extends APIGetRequest {
  constructor () {
    super('get_customers', {});
  }
}

class GetCustomerAPIRequest extends APIGetRequest {
  constructor (id: number) {
    super('get_customer', {id: id});
  }
}

class SetCustomerAPIRequest extends APIPostRequest {
  constructor (body: BodyInterface) {
    super('set_customer', body);
  }
}

// Transaction API calls

class GetTransactionsAPIRequest extends APIGetRequest {
  constructor () {
    super('get_transactions', {});
  }
}

class GetTransactionAPIRequest extends APIGetRequest {
  constructor (id: number) {
    super('get_transaction', {id: id});
  }
}

class SetTransactionAPIRequest extends APIPostRequest {
  constructor (body: BodyInterface) {
    super('set_transaction', body);
  }
}

class API {
  GetProducts: any;
  GetProduct: any;
  SetProduct: any;

  GetCustomers: any;
  GetCustomer: any;
  SetCustomer: any;

  GetTransactions: any;
  GetTransaction: any;
  SetTransaction: any;

  constructor () {
    this.GetProducts = GetProductsAPIRequest;
    this.GetProduct = GetProductAPIRequest;
    this.SetProduct = SetProductAPIRequest;

    this.GetCustomers = GetCustomersAPIRequest;
    this.GetCustomer = GetCustomerAPIRequest;
    this.SetCustomer = SetCustomerAPIRequest;

    this.GetTransactions = GetTransactionsAPIRequest;
    this.GetTransaction = GetTransactionAPIRequest;
    this.SetTransaction = SetTransactionAPIRequest;
  }
}

export default new API();
