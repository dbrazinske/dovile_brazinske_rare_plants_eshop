import * as React from 'react';
import useLocalStorage from 'hooks/useLocalStorage';

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useLocalStorage('cartItems', []);

  const cartContextValue = React.useMemo(() => ({
    cartItems,

    cartItemsCount: cartItems.reduce((sum, { count }) => sum + count, 0),

    getCartItemCount: (id) => cartItems.find((x) => x.id === id)?.count ?? 0,

    addCartItem: ({ id, count }) => setCartItems([...cartItems, { id, count }]),

    changeCartItemCount: ({ id, count }) => setCartItems(
      cartItems.map((x) => (x.id === id ? { id, count } : x)),
    ),

    deleteCartItem: (id) => {
      setCartItems(cartItems.filter((x) => x.id !== id));
    },

  }), [cartItems, setCartItems]);

  return (
    <CartContext.Provider value={cartContextValue}>{children}</CartContext.Provider>
  );
};

export default CartContext;
