import {
  Header,
  WrapperLink,
  DFlex,
  LogoTextBold,
  LogoText,
  DFlexBackground,
  NormalText,
  SearchBackground,
  SignUp,
} from "./styles";

import Link from "next/link";

import { IoLocationSharp, IoCalendarSharp, IoSearch } from "react-icons/io5";

import Button from "@components/ui/button";

import { Colors } from "@constants/index";

const MainNavigation = () => {
  return (
    <Header>
      <Link href="/" passHref>
        <WrapperLink color={Colors.primary}>
          <DFlex>
            <LogoTextBold>EXOTIC</LogoTextBold>
            <LogoText>CARS</LogoText>
          </DFlex>
        </WrapperLink>
      </Link>

      <DFlexBackground>
        <NormalText>
          <IoLocationSharp size={20} color={Colors.grayPrimary} /> North Carolina, NC
          90025
        </NormalText>

        <NormalText>
          <IoCalendarSharp size={20} color={Colors.graySecondary} /> 11/03/2021
        </NormalText>

        <NormalText>
          <IoCalendarSharp size={20} color={Colors.graySecondary} /> 12/12/2021
        </NormalText>

        <SearchBackground>
          <IoSearch size={20} color={Colors.primary} />
        </SearchBackground>
      </DFlexBackground>

      <DFlex>
        <SignUp color={Colors.primary} colorHover={Colors.primaryHover}>
          Sign up
        </SignUp>
        <Button color={Colors.primary} isOutLine>
          Sign in
        </Button>
      </DFlex>
    </Header>
  );
};

export default MainNavigation;
