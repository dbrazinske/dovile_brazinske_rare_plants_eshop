/* eslint-disable import/no-unresolved */
import React from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { Rectangle } from 'components';
import CategoryIcon from '@mui/icons-material/Category';
import Swiper from './swiper';

const InfoSection = ({ rarePlant }) => (
  <Box>
    <Rectangle>
      <Swiper images={rarePlant.images} />
    </Rectangle>
    <Typography variant="h4" sx={{ mb: 1 }}>{rarePlant.title}</Typography>
    <Typography variant="h5" color="primary" sx={{ mb: 2 }}>{`${rarePlant.price}€`}</Typography>
    <Typography variant="body1">{rarePlant.description}</Typography>
    <List>
      {[
        { text: rarePlant.category.title, Icon: CategoryIcon },
      ].map(({ text, Icon }) => (
        <ListItem key={text}>
          <ListItemIcon><Icon /></ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  </Box>

);

export default InfoSection;
