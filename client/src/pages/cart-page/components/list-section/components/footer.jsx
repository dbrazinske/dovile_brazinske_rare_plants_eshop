import React from 'react';
// import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import UndoIcon from '@mui/icons-material/Undo';
import {
  Box,
  Typography,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Footer = ({ total }) => {
  const navigate = useNavigate();

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      mt: 8,
      pr: { xs: 8, md: 10 },
    }}
    >
      <Box>
        <Button variant="contained" color="secondary" onClick={() => navigate('/rarePlant-shelf')}>
          <UndoIcon sx={{ mr: 2 }} />
          <Typography>Tęsti prekių paiešką</Typography>
        </Button>
      </Box>

      {total > 0 && (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Typography variant="h6" sx={{ pr: 1, pl: 2 }}>Prekių suma:</Typography>
          <Typography variant="h6">{`${total.toFixed(2)}€`}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default Footer;
