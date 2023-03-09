'use client';

import './Slider.scss';

import React, { PropsWithChildren, ReactNode } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

type Props = {
  delay?: number;
} & SwiperProps;

function Slider({ delay = 2500, children, ...props }: PropsWithChildren<Props>) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      slidesPerGroup={1}
      spaceBetween={30}
      autoplay={{ delay, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation
      loop
      className="slider unselectable"
      {...props}
    >
      {/* Workaround because swiper needs SwiperSlide as direct children
      @see https://github.com/nolimits4web/swiper/issues/4413
      @see https://github.com/nolimits4web/swiper/issues/4084
      */}
      {React.Children.map(children, (child: ReactNode) => (
        <SwiperSlide>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
