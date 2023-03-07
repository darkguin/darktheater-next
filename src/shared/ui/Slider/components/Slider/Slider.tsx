'use client';

import './Slider.scss';

import React, { PropsWithChildren, ReactNode } from 'react';
import { Autoplay, Navigation, Pagination, Swiper as SwiperClass } from 'swiper';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

type Props = {
  delay?: number;
} & SwiperProps;

SwiperClass.use([Navigation, Pagination, Autoplay]);

function Slider({ delay = 2500, children, ...props }: PropsWithChildren<Props>) {
  return (
    <Swiper
      slidesPerView={1}
      slidesPerGroup={1}
      spaceBetween={30}
      navigation={true}
      loop={true}
      autoplay={{ delay, disableOnInteraction: false }}
      pagination={{ clickable: true }}
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
