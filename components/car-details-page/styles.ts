import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(100% - 85px);
  background: linear-gradient(125deg, #fff, #d8d7d7);
  padding: 40px;

  @media (max-width: 600px) {
    padding: 40px 5px;
  }
`;

export const DFlex = styled.div`
  display: flex;
  align-items: center;
`;

export const DFlexAround = styled(DFlex)`
  justify-content: space-around;
  margin: 30px 0;

  @media (max-width: 1023px) {
    flex-direction: column-reverse;
    justify-content: center;
  }

  @media (min-width: 1441px) {
    justify-content: center;
  }
`;

export const DFlexCenter = styled(DFlex)`
  justify-content: center;
`;

export const TextBold = styled.p`
  font-size: 50px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 35px;
  }
`;

export const TextNormal = styled.p`
  font-size: 40px;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

export const AlignBaseline = styled.div`
  align-self: baseline;

  @media (max-width: 1023px) {
    align-self: center;
  }
`;
