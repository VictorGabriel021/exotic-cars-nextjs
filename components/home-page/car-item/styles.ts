import styled from "styled-components";

export const TextBold = styled.p`
  font-weight: bold;
`;

export const WhiteText = styled(TextBold)`
  color: transparent;
`;

export const Card = styled.div`
  cursor: pointer;
  background-color: #f8f8fa;
  border-radius: 20px;
  padding: 20px 15px;
  width: 285px;

  &:hover {
    background: transparent linear-gradient(52deg, #a1a7f4 0%, #e6d3f1 100%) 0%
      0% no-repeat padding-box;

    svg {
      color: #313136 !important;
    }

    ${WhiteText} {
      color: #fff;
    }
  }
`;

export const DFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TextUppercase = styled.p`
  text-transform: uppercase;
`;

export const DFlexPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

export const TextDollar = styled.p`
  font-size: 14px;
  font-weight: bold;
`;

export const TextMoney = styled(TextDollar)`
  font-size: 24px;
`;

export const TextPerDay = styled.p`
  font-size: 14px;
  align-self: flex-end;
`;
