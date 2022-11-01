/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { TextField } from '@mui/material';

const TextFieldDark = ({
  InputLabelProps,
  InputProps,
  sx,
  ...props
}) => (
  <TextField
    {...props}
    InputLabelProps={{ sx: { color: 'common.white' }, ...InputLabelProps }}
    InputProps={{ sx: { color: 'common.white' }, ...InputProps }}
    sx={{ bgcolor: 'grey.600', ...sx }}
  />
);

export default TextFieldDark;
