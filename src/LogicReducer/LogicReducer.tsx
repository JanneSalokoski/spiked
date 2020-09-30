const initialLogicState = {
  products: [],
  customers: [],
  transactions: []
};

interface ProductObjectInterface {
  id: number;
  name: string;
  description: string;
  price: number;
  display: boolean;
}

interface CustomerObjectInterface {
  id: number;
  name: string;
  saldo: number;
  display: boolean;
}

interface TransactionObjectInterface {
  id: number;
}

interface StateInterface {
  products: Array<ProductObjectInterface>;
  customers: Array<CustomerObjectInterface>;
  transactions: Array<TransactionObjectInterface>;
}

interface ActionInterface {
  type: string;
  payload?: any;
}

function LogicReducer (state: StateInterface, action: ActionInterface) {
  const newState: StateInterface = { ...state };

  const handlers = {
    set_products: (payload) => { newState.products = payload },
    set_customers: (payload) => { newState.customers = payload },
    set_transactions: (payload) => { newState.transactions = payload }
  };

  handlers[action.type](action.payload);
  return newState;
}

export { LogicReducer, initialLogicState };
