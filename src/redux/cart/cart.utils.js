//Utility functions allow us to keep out files clean and organize function that we may need in multiple files in one location

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existsInCart = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existsInCart) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existsInCart = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existsInCart.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
