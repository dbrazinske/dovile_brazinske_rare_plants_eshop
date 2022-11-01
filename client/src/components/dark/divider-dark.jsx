/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Divider } from '@mui/material';

const DividerDark = ({ sx, ...props }) => (
  <Divider
    {...props}
    textAlign="left"
    sx={{
      width: '100%',
      '&:before': {
        borderColor: 'common.white',
      },
      '&:after': {
        borderColor: 'common.white',
      },
      ...sx,
    }}
  />
);

export default DividerDark;
