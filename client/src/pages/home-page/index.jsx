import * as React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import * as Home from './components';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={(theme) => ({
      minHeight: `calc(100vh - ${theme.mixins.navbar.height})`,
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
    })}
    >
      <Home.Background component="img" src="/home-cover.jpg" />

      <Home.ContentContainer>
        <Home.Content component="main">
          <Box component="img" src="/logo.png" width={85} />
          <Box sx={{
            borderBottom: '2px solid #243221',
            width: '250px',
          }}
          />
          <Typography
            component="h1"
            variant="h2"
            sx={(theme) => ({
              letterSpacing: '0.08em',
              color: theme.palette.white,
              textAlign: 'center',
              fontSize: { xs: '2.25rem', md: '3.5rem' },
              fontFamily: 'Shadows Into Light Two',
            })}
          >
            RETŲ AUGALŲ MEDŽIOKLĖ
          </Typography>

          <Typography
            variant="h6"
            sx={(theme) => ({
              textAlign: 'center',
              fontSize: { xs: '1.1rem', md: '1.2rem' },
              fontFamily: 'Shadows Into Light Two',
              color: theme.palette.primary.main,
              fontWeight: 'bold',
            })}
          >
            Mes specializuojamės į retų ir unikalių augalų auginimą ir tiekimą.
            Mūsų tikslas yra pateikti kambarinius augalus,
            kurių negalima rasti įprastose augalų parduotuvėse.
            Mes labai didžiuojamės galėdami pasiūlyti platų retų egzempliorių asortimentą,
            todėl pas mus tikrai rasite sau tobulą augalą!

          </Typography>
          <Button
            onClick={() => {
              navigate('/rarePlant-shelf');
            }}
            variant="contained"
            size="large"
          >
            Į parduotuvę
          </Button>
        </Home.Content>
      </Home.ContentContainer>
    </Box>
  );
};

export default HomePage;
