import {
  Container,
  DFlex,
  TextBold,
  TextNormal,
  DFlexAround,
  AlignBaseline,
  DFlexCenter,
} from "./styles";

import Image from "next/image";

import { useRouter } from "next/router";

import Button from "@components/ui/button";

import { Colors } from "@constants/index";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const CarDetails = () => {
  const { push } = useRouter();

  const backToCatalogHandler = () => {
    push("/");
  };

  return (
    <Container>
      <DFlex>
        <Image
          src="/images/logo-ferrari.svg"
          alt="logo"
          width={140}
          height={110}
        />
        <div>
          <TextBold>Ferrari California</TextBold>
          <TextNormal>$725/day</TextNormal>
        </div>
      </DFlex>

      <DFlexAround>
        <Button
          color={Colors.secondary}
          width={170}
          text="Back to catalog"
          fontWeight="300"
          borderRadius={50}
          hasArrowLeft
          onClick={backToCatalogHandler}
        >
          <BsArrowLeft size={22} style={{ marginRight: 10 }} />
        </Button>
        <Image
          src="/images/ferrariR@2x.png"
          alt="logo"
          width={700}
          height={350}
        />

        <AlignBaseline>
          <TextBold>01</TextBold>
          <TextNormal>Red</TextNormal>
        </AlignBaseline>
      </DFlexAround>

      <DFlexCenter>
        <Button
          color={Colors.secondary}
          colorHover={Colors.secondaryHover}
          width={170}
          text="Book now"
          fontWeight="300"
          borderRadius={50}
          hasInitialBackgroundColor
          hasArrowRight
        >
          <BsArrowRight size={22} style={{ marginLeft: 10 }} />
        </Button>
      </DFlexCenter>
    </Container>
  );
};

export default CarDetails;
