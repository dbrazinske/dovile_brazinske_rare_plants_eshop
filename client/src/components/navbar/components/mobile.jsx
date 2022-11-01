import React from 'react';
import {
  Box,
  Drawer,
  IconButton,
  Avatar,
  Typography,
  MenuItem,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import * as Nav from './index';
import { authLogoutAction } from '../../../store/auth/auth-actions';
import useAuth from '../../../hooks/useAuth';

const Mobile = ({
  open,
  links,
  setOpen,
  expandBr,
}) => {
  const { loggedIn, user, dispatch } = useAuth();
  const AuthMenuIconRef = React.useRef(null);
  const navigate = useNavigate();

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        sx={{ display: { [expandBr]: 'none' }, alignSelf: 'center' }}
        onClick={() => setOpen(!open)}
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
      <Drawer anchor="top" open={open}>
        <Box sx={(theme) => ({
          paddingTop: `calc(${theme.spacing(4)} + ${theme.mixins.navbar.height})`,
          paddingBottom: theme.spacing(4),
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100vh',
        })}
        >
          <Box>
            {links.map(({ text, to }) => (
              <Nav.Link
                key={to}
                to={to}
                contracted
                onClick={() => setOpen(false)}
              >
                {text}
              </Nav.Link>
            ))}
          </Box>
          {loggedIn ? (

            <Box sx={{ display: 'flex', alignSelf: 'center', flexDirection: 'column' }}>
              <IconButton
                sx={{ ml: 1, alignSelf: 'center' }}
                ref={AuthMenuIconRef}
              >
                <Avatar
                  alt={user.fullname}
                  sx={{ width: 36, height: 36 }}
                  src={user.img}
                  onClick={() => {
                    navigate('/profile');
                    setOpen(!open);
                  }}
                >
                  {user.fullname[0]}
                </Avatar>
              </IconButton>
              <Divider sx={{ my: 1 }} />
              <MenuItem
                sx={{ display: 'flex', justifyContent: 'space-between' }}
                onClick={() => {
                  dispatch(authLogoutAction);
                }}
              >
                <Typography textAlign="center">Atsijungti</Typography>
                <LogoutIcon sx={{ ml: 2 }} />
              </MenuItem>

            </Box>
          ) : (
            <Box sx={{ display: 'flex', alignSelf: 'stretch', flexDirection: 'column' }}>
              <Nav.Link to="/cart" onClick={() => setOpen(false)} contracted>Krepšelis</Nav.Link>
              <Nav.Link to="/auth/login" onClick={() => setOpen(false)} contracted>Prisijungimas</Nav.Link>
              <Nav.Link to="/auth/register" onClick={() => setOpen(false)} contracted>Registracija</Nav.Link>
            </Box>
          )}
        </Box>
      </Drawer>
    </>
  );
};

export default Mobile;
