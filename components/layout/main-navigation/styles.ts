import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  box-shadow: 0px 8px 25px #00000014;
  height: 85px;
`;

export const WrapperLink = styled.a<{ color: string }>`
  align-self: center;

  &:hover {
    color: ${({ color }) => color};
  }
`;

export const DFlex = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoTextBold = styled.p`
  font-size: 24px;
  font-weight: 600;

  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

export const LogoText = styled.p`
  margin-top: 8px;
  margin-left: 5px;

  @media (max-width: 500px) {
    margin-top: 6px;
    font-size: 12px;
  }
`;

export const DFlexBackground = styled(DFlex)`
  background-color: #f3f1fc;
  justify-content: space-between;
  align-self: center;
  height: 41px;
  width: 54%;
  border-radius: 50px;
  padding: 0 5px;

  @media (max-width: 767px) {
    display: none;
  }

  @media (min-width: 1440px) {
    width: 35%;
  }
`;

export const NormalText = styled.p`
  display: flex;
  color: #656469;
  font-size: 14px;
  font-weight: 600;
  white-space: pre;
`;

export const SearchBackground = styled(DFlex)`
  background-color: #fff;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  justify-content: center;
`;

export const SignUp = styled.p<{ color: string; colorHover: string }>`
  margin-right: 25px;
  cursor: pointer;
  font-weight: bold;
  color: ${({ color }) => color};

  &:hover {
    color: ${({ colorHover }) => colorHover};
  }

  @media (max-width: 500px) {
    margin-right: 10px;
    font-size: 12px;
  }
`;
