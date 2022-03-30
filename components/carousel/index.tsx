import Image from "next/image";

import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore from "swiper";

import "swiper/css";

import { Container, Content, CardItem, ArrowPrev, ArrowNext } from "./styles";

import { ICars } from "@interfaces/carInterfaces";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Carousel: React.FC<{
  cars: ICars[];
  onChangeImage: (index: number) => void;
}> = ({ cars, onChangeImage }) => {
  const [swiper, setSwiper] = useState<SwiperCore>();
  const [width, setWidth] = useState(0);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prevHandler = () => {
    swiper!.slidePrev();
  };

  const nextHandler = () => {
    swiper!.slideNext();
  };

  const onSlideChangeHandler = (imageIndex: number) => {
    onChangeImage(imageIndex);
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
          slidesPerView={width < 768 ? 1 : cars.length}
          centeredSlides
          loop
          onInit={(swiper) => setSwiper(swiper)}
          onSlideChange={(swiper) => onSlideChangeHandler(swiper.realIndex)}
        >
          {cars.map(({ id, image }, index) => {
            const active = index === swiper?.realIndex;
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
