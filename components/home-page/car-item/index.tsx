import {
  Card,
  DFlex,
  TextBold,
  TextUppercase,
  DFlexPrice,
  WhiteText,
  TextDollar,
  TextMoney,
  TextPerDay,
} from "./styles";

import Image from "next/image";

import { useRouter } from "next/router";

import { HiDotsHorizontal } from "react-icons/hi";

import { ICarsResponse } from "@interfaces/carInterfaces";

const CarItem: React.FC<{ carData: ICarsResponse }> = ({ carData }) => {
  const { id, brand, model, price, imageShowcase } = carData;

  const { push } = useRouter();

  const openCarDetailsHandler = () => {
    push(`/car-details/${id}`);
  };

  return (
    <Card onClick={openCarDetailsHandler}>
      <DFlex>
        <div>
          <TextBold>{brand}</TextBold>
          <TextUppercase>{model}</TextUppercase>
        </div>
        <HiDotsHorizontal size={24} color="#C8C8CA" />
      </DFlex>

      <Image src={imageShowcase} alt={brand} height={105} width={260} />

      <DFlexPrice>
        <WhiteText>Book Now</WhiteText>
        <DFlex>
          <TextDollar>$</TextDollar>
          <TextMoney>{price}</TextMoney>
          <TextPerDay>/day</TextPerDay>
        </DFlex>
      </DFlexPrice>
    </Card>
  );
};

export default CarItem;
