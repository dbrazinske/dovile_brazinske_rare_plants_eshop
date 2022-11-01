import React from 'react';
import {
  Box,
  Button,
  OutlinedInput,
} from '@mui/material';

const AmountField = ({
  amount,
  onInc,
  onDec,
  min = Number.NEGATIVE_INFINITY,
  max = Number.POSITIVE_INFINITY,
}) => (
  <Box sx={{ display: 'flex' }}>
    <Button
      variant="contained"
      size="small"
      sx={{
        p: 0, height: 30, width: 30, minWidth: 0, borderRadius: '50%', boxShadow: 'none',
      }}
      onClick={onDec}
      disabled={amount < min}
    >
      -
    </Button>
    <OutlinedInput
      variant="contained"
      size="small"
      inputProps={{
        style: {
          padding: 0, width: 60, minWidth: 0, textAlign: 'center',
        },
        value: amount,
      }}
      readOnly
      sx={{ borderRadius: '12%' }}
    />
    <Button
      variant="contained"
      size="small"
      sx={{
        p: 0, height: 30, width: 30, minWidth: 0, borderRadius: '50%', boxShadow: 'none',
      }}
      onClick={onInc}
      disabled={amount > max}
    >
      +
    </Button>
  </Box>
);

export default AmountField;
