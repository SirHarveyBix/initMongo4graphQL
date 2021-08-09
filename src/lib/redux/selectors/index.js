const calculateTotal = ($0, $1) => $0 + $1;

const selectItems = (state) => state.items;

export const selectCartTotal = (state) => {
  return selectItems(state)
    .map((item) => {
      return item.price * item.quantity;
    })
    .reduce(calculateTotal, 0);
};
