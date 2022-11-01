import React from 'react';
import {
  Box,
  Typography,
  Button,
  Divider,
  Drawer,
  useMediaQuery,
} from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';

const FilterDrawer = ({ drawerWidth, children }) => {
  const isExtraLarge = useMediaQuery((theme) => theme.breakpoints.up('xxl'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  return (
    <>
      <Button
        size="large"
        color="primary"
        variant="contained"
        sx={{
          position: 'fixed',
          bottom: 15,
          right: 15,
          zIndex: 5000,
          height: 64,
          width: 64,
          borderRadius: '50%',
          display: { xxl: 'none' },
        }}
        onClick={() => setDrawerOpen(!drawerOpen)}
      >
        <TuneIcon sx={{ color: 'common.white', fontSize: '2rem' }} />
      </Button>

      <Drawer
        anchor="left"
        variant={isExtraLarge ? 'persistent' : 'temporary'}
        open={isExtraLarge || drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={(theme) => ({ width: drawerWidth, p: 2, mt: theme.mixins.navbar.height })}>
          <Typography variant="h4">Filtrai</Typography>
          <Divider sx={{ my: 2 }} />
          {children}
        </Box>
      </Drawer>
    </>
  );
};

export default FilterDrawer;
