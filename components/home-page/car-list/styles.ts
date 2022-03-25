import styled from "styled-components";

export const Container = styled.div`
  padding: 40px;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 285px);
  grid-gap: 32px 24px;
  justify-content: center;
`;

export const ScrollTopContainer = styled.div<{ color: string }>`
  cursor: pointer;
  position: fixed;
  right: 5%;
  bottom: 0;

  &:hover {
    svg {
      circle {
        fill: ${({ color }) => color} !important;
      }
    }
  }
`;
