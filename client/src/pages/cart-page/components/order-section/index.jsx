import React from 'react';
import {
  Box,
  Button,
  Drawer,
  useMediaQuery,
} from '@mui/material';

import { ContactFields, SecondaryFields, Wrapper } from './components';

const OrderSection = ({
  width,
  expansionBr,
  drawerOpen,
  setDrawerOpen,
}) => {
  const isLarge = useMediaQuery((theme) => theme.breakpoints.up(expansionBr));
  const [fullname, setFullname] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [subscribtion, setSubscribtion] = React.useState(true);

  return (

    <Drawer
      anchor="right"
      variant={isLarge ? 'persistent' : 'temporary'}
      open={isLarge || drawerOpen}
      onClose={() => setDrawerOpen(false)}
    >
      <Wrapper sx={{ width }}>
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
          }}
        >
          <ContactFields
            fullname={fullname}
            email={email}
            phoneNumber={phoneNumber}
            address={address}
            setFullname={setFullname}
            setEmail={setEmail}
            setPhoneNumber={setPhoneNumber}
            setAddress={setAddress}
          />

          <SecondaryFields
            subscribtion={subscribtion}
            setSubscribtion={setSubscribtion}
          />

          <Button type="submit" variant="contained" size="large">Užsakyti</Button>
        </Box>

      </Wrapper>
    </Drawer>
  );
};

export default OrderSection;
