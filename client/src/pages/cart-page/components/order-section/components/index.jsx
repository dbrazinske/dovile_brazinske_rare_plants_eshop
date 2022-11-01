import { Box, styled } from '@mui/material';

export { default as ContactFields } from './contact-fields';
export { default as SecondaryFields } from './secondary-fields';

export const Wrapper = styled(Box)(({ theme, width }) => ({
  width,
  height: '100%',
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.common.white,
  padding: theme.spacing(4),
  paddingTop: `calc(${theme.mixins.navbar.height} + ${theme.spacing(4)})`,
}));
