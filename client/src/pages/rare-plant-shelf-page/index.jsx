/* eslint-disable import/no-unresolved */
import * as React from 'react';
import {
  Box, Fade, Grid, Typography,
} from '@mui/material';
import RarePlantService from 'services/rare-plant-service';
import { useSearchParams } from 'react-router-dom';
import { Image } from 'components';
import wait from 'helpers/wait';
import { RarePlantCard, Filters } from './components';

const drawerWidth = 280;

const RarePlantShelfPage = () => {
  const [rarePlants, setRarePlants] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [searchParams] = useSearchParams();

  const handleFetchRarePlants = React.useCallback(async () => {
    setLoading(true);
    const [fetchedRarePlants] = await Promise.all([
      RarePlantService.fetchAll(searchParams.toString()),
      wait(1000),
    ]);
    setLoading(false);
    setRarePlants(fetchedRarePlants);
  }, [searchParams]);

  React.useEffect(() => {
    handleFetchRarePlants();
  }, [handleFetchRarePlants]);

  return (
    <Box
      sx={{
        display: 'flex',
        gap: { xs: 4, xxl: 0 },
        py: 2,
        px: 2,
      }}
    >
      <Filters drawerWidth={drawerWidth} />
      <Box sx={{ pl: { xxl: `${drawerWidth}px` }, width: '100%' }}>

        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <Fade in>
              <Image src="/loading.gif" sx={{ width: 200, pt: 6 }} />
            </Fade>
          </Box>
        ) : (
          <Fade in>
            {rarePlants.length > 0 ? (
              <Grid container spacing={2}>
                {rarePlants.map(({
                  id,
                  title,
                  description,
                  images,
                  price,
                  category,
                }) => (
                  <Grid key={id} item xs={12} sm={6} md={4} lg={3} xl={2.4}>
                    <RarePlantCard
                      id={id}
                      title={title}
                      description={description}
                      images={images}
                      price={price}
                      category={category}
                    />
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Typography
                variant="h3"
                sx={{
                  color: 'error.main',
                  width: '100%',
                  textAlign: 'center',
                  mt: 35,
                }}
              >

                Prekių nerasta!
              </Typography>
            )}
          </Fade>
        )}

      </Box>
    </Box>
  );
};

export default RarePlantShelfPage;
