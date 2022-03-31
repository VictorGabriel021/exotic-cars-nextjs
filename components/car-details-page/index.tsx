import { useEffect, useState } from "react";

import {
  Container,
  CarInfo,
  DFlex,
  TextBold,
  TextNormal,
  DFlexAround,
  AlignBaseline,
  DFlexCenter,
} from "./styles";

import Image from "next/image";

import { useRouter } from "next/router";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import { Button, Carousel } from "@components/index";

import { Colors } from "@constants/index";

import { ICars, ICarsResponse } from "@interfaces/carInterfaces";

const CarDetails: React.FC<{ carItem: ICarsResponse }> = ({ carItem }) => {
  const { brand, model, brandLogo, price, cars } = carItem;
  const { push } = useRouter();

  const [carSelected, setCarSelected] = useState<ICars>(cars[0]);
  const [width, setWidth] = useState(0);

  const backToCatalogHandler = () => {
    push("/");
  };

  const onChangeImageHandler = (imageIndex: number) => {
    setCarSelected(cars[imageIndex]);
  };

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    handleResize();
    setCarSelected(cars[0]);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [cars]);

  return (
    <Container>
      <DFlex>
        <Image
          src={brandLogo}
          alt={`${brand} ${model}`}
          width={140}
          height={110}
        />
        <CarInfo>
          <TextBold>
            {brand} {model}
          </TextBold>
          <TextNormal>${price}/day</TextNormal>
        </CarInfo>
      </DFlex>

      <DFlexAround>
        <Button
          color={Colors.secondary}
          width={170}
          fontWeight="300"
          borderRadius={50}
          isOutLine
          onClick={backToCatalogHandler}
        >
          <BsArrowLeft size={22} style={{ marginRight: 10 }} /> Back to catalog
        </Button>
        <Image
          src={carSelected.image}
          alt={`${brand} ${model} ${carSelected.color}`}
          width={700}
          height={350}
        />

        <AlignBaseline>
          <TextBold>{carSelected.id}</TextBold>
          <TextNormal>{carSelected.color}</TextNormal>
        </AlignBaseline>
      </DFlexAround>

      <DFlexCenter>
        <Button
          color={Colors.secondary}
          colorHover={Colors.secondaryHover}
          width={170}
          fontWeight="300"
          borderRadius={50}
        >
          Book now <BsArrowRight size={22} style={{ marginLeft: 10 }} />
        </Button>
      </DFlexCenter>

      <Carousel
        onChangeImage={onChangeImageHandler}
        cars={cars}
        windowWidth={width}
      />
    </Container>
  );
};

export default CarDetails;
