/* eslint-disable import/no-unresolved */
import React from 'react';
import { Box, Typography } from '@mui/material';
import useCart from 'hooks/useCart';
import { AmountField } from 'components';

const CommerceSection = ({ rarePlant }) => {
  const {
    getCartItemCount,
    addCartItem,
    changeCartItemCount,
    deleteCartItem,
  } = useCart();

  const count = getCartItemCount(rarePlant.id);

  const increaseRarePlantCount = () => {
    const cartItem = { id: rarePlant.id, count: count + 1 };

    if (count === 0) addCartItem(cartItem);
    else changeCartItemCount(cartItem);
  };

  const decreaseRarePlantCount = () => {
    if (count - 1 === 0) deleteCartItem(rarePlant.id);
    else changeCartItemCount({ id: rarePlant.id, count: count - 1 });
  };

  return (
    <Box component="pre">
      <Typography variant="h4" sx={{ mb: 4 }}>Užsakymas</Typography>
      <Box sx={{ display: 'flex', gap: 6 }}>
        <Box>
          <Typography variant="h6" sx={{ mb: 1 }}>Kiekis</Typography>
          <AmountField
            amount={count}
            onInc={increaseRarePlantCount}
            onDec={decreaseRarePlantCount}
            min={0}
          />
        </Box>
        <Box>
          <Typography variant="h6" sx={{ mb: 1 }}>Viso:</Typography>
          <Typography variant="h6" sx={{ mb: 1 }}>{`${count * rarePlant.price}€`}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CommerceSection;
