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

import { HiDotsHorizontal } from "react-icons/hi";

const CarItem = () => {
  return (
    <Card>
      <DFlex>
        <div>
          <TextBold>Porsche</TextBold>
          <TextUppercase>911 Turbo S</TextUppercase>
        </div>
        <HiDotsHorizontal size={24} color="#C8C8CA" />
      </DFlex>

      <Image src="/images/porsche.svg" alt="nani" height={105} width={260} />

      <DFlexPrice>
        <WhiteText>Book Now</WhiteText>
        <DFlex>
          <TextDollar>$</TextDollar>
          <TextMoney>725</TextMoney>
          <TextPerDay>/day</TextPerDay>
        </DFlex>
      </DFlexPrice>
    </Card>
  );
};

export default CarItem;
