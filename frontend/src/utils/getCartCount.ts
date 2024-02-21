interface Item {
  id: string,
  product: {
    id: string,
    price: number,
    title: string,
    shortDescription: string,
  },
  quantity: number,
}

// reduce down the cart count making sure to look for items that have multiple
export default function getCartCount(cart: any) {
  const cartCount = cart.reduce((total:number, item:Item) => {

    return item.quantity + total;
  }, 0);

  return cartCount;
}
