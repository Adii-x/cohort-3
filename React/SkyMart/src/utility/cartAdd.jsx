const addToCart = (product, cartItems, setCartItems) => {
  const existing = cartItems.find((item) => item.id === product.id);

  const nextCart = existing
    ? cartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item,
      )
    : [...cartItems, { ...product, quantity: 1 }];

  setCartItems(nextCart);
  localStorage.setItem("cart", JSON.stringify(nextCart));
};

export default addToCart;
