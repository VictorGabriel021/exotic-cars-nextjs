import Image from "next/image";

import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore from "swiper";

import "swiper/css";

import { Container, Content, CardItem, ArrowPrev, ArrowNext } from "./styles";

import { ICars } from "@interfaces/carInterfaces";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Carousel: React.FC<{
  cars: ICars[];
  onChangeImage: (index: number) => void;
  windowWidth: number;
}> = ({ cars, onChangeImage, windowWidth }) => {
  const [swiper, setSwiper] = useState<SwiperCore>();

  const prevHandler = () => {
    swiper!.slidePrev();
  };

  const nextHandler = () => {
    swiper!.slideNext();
  };

  const onSlideChangeHandler = (imageIndex: number) => {
    onChangeImage(imageIndex);
  };

  const getActiveCardHandler = (index: number) => {
    let active = index === swiper?.realIndex;

    if (swiper && swiper.realIndex === cars.length && index === 0) {
      active = true;
    }
    return active;
  };

  return (
    <Container>
      <Content>
        <ArrowPrev onClick={prevHandler}>
          <BsArrowLeft size={28} />
        </ArrowPrev>

        <Swiper
          loopAdditionalSlides={cars.length}
          spaceBetween={30}
          slidesPerView={windowWidth < 768 ? 1 : cars.length}
          centeredSlides
          loop
          onInit={(swiper) => setSwiper(swiper)}
          onSlideChange={(swiper) => onSlideChangeHandler(swiper.realIndex)}
        >
          {cars.map(({ id, image }, index) => {
            const active = getActiveCardHandler(index);

            return (
              <SwiperSlide key={id}>
                <CardItem isActive={active}>
                  <Image src={image} alt={id} height={150} width={250} />
                </CardItem>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <ArrowNext onClick={nextHandler}>
          <BsArrowRight size={28} />
        </ArrowNext>
      </Content>
    </Container>
  );
};

export default Carousel;
