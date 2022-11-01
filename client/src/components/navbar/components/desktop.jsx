import React from 'react';
import {
  Box,
  IconButton,
  Divider,
  Badge,
  Menu,
  MenuItem,
  Typography,
  Avatar,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import useAuth from '../../../hooks/useAuth';
import { authLogoutAction } from '../../../store/auth/auth-actions';
import * as Nav from './index';

const Desktop = ({
  expandBr,
  links,
  isContracted,
  open,
  setOpen,
  cartItemsCount,
}) => {
  const { loggedIn, user, dispatch } = useAuth();
  const navigate = useNavigate();
  const AuthMenuIconRef = React.useRef(null);
  const [authMenuOpen, setAuthMenuOpen] = React.useState(false);
  const [activeButton, setActiveButton] = React.useState(1);

  return (
    <>
      <Box sx={{ display: { xs: 'none', [expandBr]: 'flex' }, alignSelf: 'stretch' }}>
        {links.map(({ text, to, index }) => (
          <Nav.Link
            style={{ background: activeButton === index ? '#192317' : '#243221' }}
            key={to}
            onClick={() => setActiveButton(index)}
            to={to}
          >
            {text}
          </Nav.Link>
        ))}
      </Box>

      <Box sx={{ display: { xs: 'none', [expandBr]: 'flex' }, alignSelf: 'stretch' }}>

        {loggedIn ? (
          <>
            <IconButton
              sx={{ ml: 1, alignSelf: 'center' }}
              ref={AuthMenuIconRef}
              onClick={() => setAuthMenuOpen(!authMenuOpen)}
            >
              <Avatar
                alt={user.fullname}
                sx={{ width: 36, height: 36 }}
                src={user.img}
              >
                {user.fullname[0]}
              </Avatar>
            </IconButton>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={AuthMenuIconRef.current}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={authMenuOpen}
              onClose={() => setAuthMenuOpen(false)}
            >
              <MenuItem
                sx={{ display: 'flex', justifyContent: 'space-between' }}
                onClick={() => {
                  navigate('/profile');
                  setAuthMenuOpen(false);
                }}
              >
                <Typography textAlign="center">Profilis</Typography>
                <AccountCircleIcon sx={{ ml: 2 }} />
              </MenuItem>
              <Divider sx={{ my: 1 }} />
              <MenuItem
                sx={{ display: 'flex', justifyContent: 'space-between' }}
                onClick={() => {
                  dispatch(authLogoutAction);
                  setAuthMenuOpen(false);
                }}
              >
                <Typography textAlign="center">Atsijungti</Typography>
                <LogoutIcon sx={{ ml: 2 }} />
              </MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <Nav.Link
              to="/auth/login"
              style={{ background: activeButton === 3 ? '#192317' : '#243221' }}
              onClick={() => {
                setOpen(false);
                setActiveButton(3);
              }}
            >
              Prisijungimas

            </Nav.Link>
            <Nav.Link
              style={{ background: activeButton === 4 ? '#192317' : '#243221' }}
              to="/auth/register"
              onClick={() => {
                setOpen(false);
                setActiveButton(4);
              }}
            >
              Registracija

            </Nav.Link>
          </>
        )}
        <Divider orientation="vertical" flexItem sx={{ my: 2 }} />
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          sx={{ alignSelf: 'center', mr: 1 }}
          onClick={() => {
            if (isContracted && open) setOpen(false);
            navigate('/cart');
          }}
        >
          <Badge badgeContent={cartItemsCount} color="secondary">
            <ShoppingBasketIcon sx={{ color: 'common.white' }} />
          </Badge>
        </IconButton>

      </Box>
    </>
  );
};

export default Desktop;
