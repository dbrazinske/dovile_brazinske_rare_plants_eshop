import React from 'react';
import {
  Paper,
  Box,
  Typography,
  Button,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import * as Home from '../pages/home-page/components';

const AuthForm = ({
  title,
  btnText,
  disabled = false,
  onSubmit,
  children,
}) => (
  <>
    <Home.Background component="img" src="/home-cover.jpg" />

    <Home.ContentContainer>

      <Paper
        elevation={3}
        sx={{
          p: 4,
          width: 400,
          my: 4,
          position: 'relative',
          zIndex: 3,
        }}
      >
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
            mt: '50px',
          }}
          onSubmit={onSubmit}
        >
          <AccountCircleIcon sx={{
            position: 'absolute', top: '-100px', mx: 'auto', minWidth: '175px', minHeight: '175px', color: 'primary.main',
          }}
          />
          <Typography component="h1" variant="h4">{title}</Typography>
          {children}
          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={disabled}
          >
            {btnText}
          </Button>
        </Box>
      </Paper>
    </Home.ContentContainer>
  </>
);

export default AuthForm;
