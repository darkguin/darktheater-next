'use client';

import './CardList.scss';

import React, { PropsWithChildren, ReactNode } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

function CardList({ children, ...props }: PropsWithChildren<SwiperProps>) {
  return (
    <Swiper
      modules={[Navigation]}
      slidesPerView={'auto'}
      spaceBetween={20}
      navigation={true}
      className="card-list unselectable"
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

export default CardList;
