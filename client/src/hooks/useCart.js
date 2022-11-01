import React from 'react';
import CartContext from 'contexts/cart-context';

const useCart = () => React.useContext(CartContext);

export default useCart;
