/* eslint-disable import/no-unresolved */
import React from 'react';
import {
  Box,
  Typography,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Image } from 'components';
import AmountField from 'components/amount-field';

const Item = ({
  images,
  title,
  subtitle,
  textProps,
  count,
  setCount,
  price,
  deleteItem,
}) => (
  <Box sx={{
    display: 'flex', alignItems: 'center', gap: { xs: 1, md: 3 },
  }}
  >

    <Box sx={{
      display: 'flex',
      alignItems: { xs: 'flex-start', sm: 'center' },
      flexDirection: { xs: 'column', sm: 'row' },
      justifyContent: { sm: 'space-between' },
      flexGrow: 1,
      gap: 2,
      py: 1,
      px: 2,
      bgcolor: 'grey.200',
    }}
    >
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        width: { md: 350 },
      }}
      >
        <Box>
          <Image
            src={(images && images[0]) ?? '/no-img.jpg'}
            sx={{
              height: 100,
              width: 100,
              borderRadius: '50%',
            }}
          />
        </Box>
        <Box>
          <Typography variant="h6">{title}</Typography>
          {subtitle && <Typography variant="subtitle">{subtitle}</Typography>}
        </Box>
      </Box>

      <Box sx={{
        display: { xs: 'none', md: 'flex' },
        justifyContent: 'space-evenly',
        alignItems: 'center',
        gap: 2,
        flexGrow: 1,
      }}
      >
        {textProps.map((text) => <Typography key={text}>{text}</Typography>)}
      </Box>

      <Box sx={{
        display: 'grid',
        gridTemplateColumns: 'auto 110px 75px',
        width: 310,
        alignSelf: { xs: 'flex-end', sm: 'center' },

      }}
      >
        <Box sx={{ display: 'flex' }}>
          <AmountField
            onDec={() => setCount(count - 1)}
            onInc={() => setCount(count + 1)}
            amount={count}
          />
        </Box>

        <Box sx={{ textAlign: 'right' }}>{`${price.toFixed(2)}€ /vnt. `}</Box>
        <Box sx={{ textAlign: 'right' }}>{`${(price * count).toFixed(2)}€`}</Box>
      </Box>

    </Box>

    <IconButton size="large" onClick={deleteItem}>
      <DeleteIcon fontSize="large" />
    </IconButton>
  </Box>
);

export default Item;
