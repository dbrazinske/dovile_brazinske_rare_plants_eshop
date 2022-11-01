import * as React from 'react';
import { Box } from '@mui/material';
import {
  ListSection,
  OrderSection,
} from './components';

const orderSectionWidth = 386;
const expansionBr = 'xl';

const CartPage = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  return (
    <Box sx={(theme) => theme.mixins.toolbarOffset}>
      <ListSection
        width={orderSectionWidth}
        expansionBr={expansionBr}
        setDrawerOpen={setDrawerOpen}
      />
      <OrderSection
        width={orderSectionWidth}
        expansionBr={expansionBr}
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
      />
    </Box>
  );
};

export default CartPage;
