/* eslint-disable import/no-unresolved */
import React from 'react';
import { Swiper as ReactSwiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { IconButton, Box, styled } from '@mui/material';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Image } from 'components';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const StyledSwiper = styled(ReactSwiper)(({ theme }) => ({
  position: 'relative',
  height: '100%',
  width: '100%',

  '.swiper-wrapper': {
    height: '100%',
  },

  '.swiper-slide': {
    height: '100%',
  },

  '.swiper-pagination-bullet-active': {
    backgroundColor: theme.palette.primary.main,
  },
}));

const Swiper = ({ images }) => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <StyledSwiper
      modules={[Navigation, Pagination, Autoplay]}
      autoplay={{
        delay: 5500,
        disableOnInteraction: false,
      }}
      pagination={{
        dynamicBullets: true,
      }}
      navigation={{
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
      }}
    >
      {images.map((image) => (
        <SwiperSlide key={image}>
          <Image src={image} sx={{ height: 'calc(100% - 30px)' }} />
        </SwiperSlide>
      ))}
      <IconButton
        ref={navigationPrevRef}
        sx={{
          position: 'absolute', top: '45%', left: 0, zIndex: 7000,
        }}
      >
        <ArrowCircleLeftIcon color="primary" sx={{ fontSize: 32 }} />
        <Box sx={{
          bgcolor: 'common.white',
          borderRadius: '50%',
          position: 'absolute',
          height: '50%',
          width: '50%',
          zIndex: -1,
        }}
        />
      </IconButton>

      <IconButton
        ref={navigationNextRef}
        sx={{
          position: 'absolute', top: '45%', right: 0, zIndex: 7000,
        }}
      >
        <ArrowCircleRightIcon color="primary" sx={{ fontSize: 32 }} />
        <Box sx={{
          bgcolor: 'common.white',
          borderRadius: '50%',
          position: 'absolute',
          height: '50%',
          width: '50%',
          zIndex: -1,
        }}
        />
      </IconButton>
    </StyledSwiper>
  );
};

export default Swiper;
