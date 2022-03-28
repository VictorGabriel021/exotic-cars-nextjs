import {
  Header,
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
        <DFlex>
          <LogoTextBold>EXOTIC</LogoTextBold>
          <LogoText>CARS</LogoText>
        </DFlex>
      </Link>

      <DFlexBackground>
        <NormalText>
          <IoLocationSharp size={20} color={Colors.gray1} /> North Carolina, NC
          90025
        </NormalText>

        <NormalText>
          <IoCalendarSharp size={20} color={Colors.gray2} /> 11/03/2021
        </NormalText>

        <NormalText>
          <IoCalendarSharp size={20} color={Colors.gray2} /> 12/12/2021
        </NormalText>

        <SearchBackground>
          <IoSearch size={20} color={Colors.primary} />
        </SearchBackground>
      </DFlexBackground>

      <DFlex>
        <SignUp color={Colors.primary} colorHover={Colors.primaryHover}>
          Sign up
        </SignUp>
        <Button color={Colors.primary} text="Sign in" />
      </DFlex>
    </Header>
  );
};

export default MainNavigation;
