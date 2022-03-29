import styled from "styled-components";

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
