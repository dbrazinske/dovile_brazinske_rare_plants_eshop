import * as React from 'react';
import {
  AppBar,
  Box,
  useMediaQuery,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import useCart from '../../hooks/useCart';
import Mobile from './components/mobile';
import Desktop from './components/desktop';

const links = [
  { text: 'Pradžia', to: '/', index: 1 },
  { text: 'Parduotuvė', to: '/rarePlant-shelf', index: 2 },
];

const expandBr = 'md';

const Navbar = () => {
  const { cartItemsCount } = useCart();
  const isContracted = useMediaQuery((theme) => theme.breakpoints.down(expandBr));
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (!isContracted && open) {
      setOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isContracted]);

  const navigate = useNavigate();

  return (
    <AppBar position="fixed">
      <Box sx={(theme) => theme.mixins.navbar}>

        <Box
          onClick={() => {
            navigate('/');
          }}
          component="img"
          src="/logo.png"
          width="50px"
          height="50px"
          sx={{
            position: 'absolute', top: '0', left: '100px', m: 1, cursor: 'pointer',
          }}
        />

        {isContracted ? (
          <Mobile
            open={open}
            links={links}
            expandBr={expandBr}
            setOpen={setOpen}
          />
        ) : (
          <Desktop
            expandBr={expandBr}
            links={links}
            isContracted={isContracted}
            open={open}
            setOpen={setOpen}
            cartItemsCount={cartItemsCount}
          />
        )}

      </Box>
    </AppBar>
  );
};

export default Navbar;
