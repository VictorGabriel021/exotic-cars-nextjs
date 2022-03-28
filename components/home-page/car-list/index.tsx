import { useEffect, useState } from "react";

import { Container, Content, ScrollTopContainer } from "./styles";

import { CarItem, ScrollTopSvg } from "@components/index";

import { Colors } from "@constants/index";

import cars from "@data/cars.json";

import { ICarsResponse } from "@interfaces/carInterfaces";

const CarList = () => {
  const [isDisplay, setIsDisplay] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsDisplay(true);
      return;
    }
    setIsDisplay(false);
  };

  const scrollTopHandler = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container>
      <Content>
        {cars.map((car: ICarsResponse) => {
          const { id } = car;
          return <CarItem key={id} carData={car} />;
        })}
      </Content>

      {isDisplay && (
        <ScrollTopContainer color={Colors.primary} onClick={scrollTopHandler}>
          <ScrollTopSvg />
        </ScrollTopContainer>
      )}
    </Container>
  );
};

export default CarList;
