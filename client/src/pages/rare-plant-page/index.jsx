import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Alert } from '@mui/material';
import RarePlantService from '../../services/rare-plant-service';
import { Content } from './components';

const RarePlantPage = () => {
  const { rarePlantId } = useParams();
  const [rarePlant, setRarePlant] = React.useState(null);
  const [errorMsg, setErrorMsg] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      try {
        const fetchedRarePlant = await RarePlantService.fetchById(rarePlantId);
        setRarePlant(fetchedRarePlant);
      } catch (error) {
        setErrorMsg(`Nerastas produktas pagal id: '${rarePlantId}'`);
      }
    })();
  }, [rarePlantId]);

  return (
    <Box sx={{ mt: 4, mx: 4 }}>
      {errorMsg && (<Alert severity="error">{errorMsg}</Alert>)}
      {rarePlant && <Content rarePlant={rarePlant} />}
    </Box>
  );
};

export default RarePlantPage;
