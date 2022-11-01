import { Box, Divider, styled } from '@mui/material';
import React from 'react';
import { CommerceSection, InfoSection } from './components';

const ContentContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '35vw',
  flexGrow: 1,
  margin: 'auto',
  zIndex: 2,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  [theme.breakpoints.down('xxl')]: {
    width: 550,
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

const Content = ({ rarePlant }) => (
  <ContentContainer>
    <InfoSection rarePlant={rarePlant} />
    <Divider />
    <CommerceSection rarePlant={rarePlant} />
  </ContentContainer>
);

export default Content;
