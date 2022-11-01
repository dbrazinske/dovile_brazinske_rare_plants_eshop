import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

const AuthLayout = () => (
  <Box sx={(theme) => ({
    minHeight: `calc(100vh - ${theme.mixins.navbar.height})`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  })}
  >
    <Outlet />
  </Box>
);

export default AuthLayout;
