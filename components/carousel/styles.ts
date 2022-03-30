import styled from "styled-components";

import { Colors } from "@constants/index";

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

export const Content = styled.div`
  padding: 0 10px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardItem = styled.div<{ isActive: boolean }>`
  transform: ${({ isActive }) => (isActive ? "scale(1)" : "scale(0.8)")};
  background: ${({ isActive }) =>
    isActive ? "linear-gradient(52deg, #a1a9ec, #d8d7d7)" : "#d8d7d7"};
    
  display: flex;
  justify-content: center;
  border-radius: 10px;
  overflow: hidden;

  @media (max-width: 768px) {
    max-width: 200px;
    margin: 0 auto;
  }
`;

const Arrow = styled.div`
  background-color: ${Colors.secondary};
  border-radius: 50%;
  cursor: pointer;
  height: 50px;
  width: 50px;
  text-align: center;
  padding: 10px;
  svg {
    color: white;
  }
  &:hover {
    background-color: ${Colors.secondaryHover};
  }
`;

export const ArrowPrev = styled(Arrow)`
  margin-right: 10px;
`;

export const ArrowNext = styled(Arrow)`
  margin-left: 10px;
`;
