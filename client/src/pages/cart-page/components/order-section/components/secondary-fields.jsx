import React from 'react';
import {
  Box,
  FormControlLabel,
  Checkbox,
} from '@mui/material';

const SecondaryFields = ({
  subscribtion,
  setSubscribtion,
}) => (
  <Box sx={{ alignSelf: 'flex-start' }}>
    <FormControlLabel
      control={(
        <Checkbox
          checked={subscribtion}
          onChange={(_, newSubsribtion) => setSubscribtion(newSubsribtion)}
          sx={{ color: 'inherit' }}
        />
        )}
      label="Siųsti naujausius pasiūlymus"
    />
  </Box>
);

export default SecondaryFields;
