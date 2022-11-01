import { Box, styled } from '@mui/material';

export const Background = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  zIndex: 1,
  objectFit: 'cover',
});

export const ContentContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '50vw',
  flexGrow: 1,
  margin: 'auto',
  zIndex: 2,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'rgba(255, 255, 255, 0.5)',

  [theme.breakpoints.down('xxl')]: {
    width: 700,
  },
  [theme.breakpoints.down('md')]: {
    width: '80%',
  },
}));

export const Content = styled(Box)(({ theme }) => ({
  margin: theme.spacing(8),
  width: '100%',
  height: '100%',
  color: theme.palette.common.white,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(4),
  padding: theme.spacing(4, 0),

  [theme.breakpoints.down('xxl')]: {
    marginRight: theme.spacing(6),
  },
  [theme.breakpoints.down('md')]: {
    margin: theme.spacing(0),
    padding: theme.spacing(4, 4),
  },
}));
