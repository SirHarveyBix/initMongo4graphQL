import { createStore } from 'redux';

function reducer(state = { items: [] }, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        items: [...state.items, action.payload.item],
      };

    case 'UPDATE_CART':
      return {
        items: state.items.map((item) => {
          if (item.id === action.payload.id) {
            item.quantity = action.payload.quantity;
            return item;
          }
          return item;
        }),
      };
    default:
      return state;
  }
}

export function addToCart(item) {
  return {
    type: 'ADD_TO_CART',
    payload: { item },
  };
}
export function updateCart(id, quantity) {
  return {
    type: 'UPDATE_CART',
    payload: { id, quantity },
  };
}
export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
