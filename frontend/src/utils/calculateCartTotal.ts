import formatMoney from "./formatMoney";

export function calculateCartTotals(cart:any) {
  const total = cart.reduce((total:any, cartItem:any) => {
    // products can be deleted but still in cart
    if (!cartItem.product) {
      return total;
    }

    // take the total -> add the quantity * price
    return total + cartItem.quantity * cartItem.product.price;
  }, 0);

  return {
    price: total,
    formatted: formatMoney(total)
  };
}