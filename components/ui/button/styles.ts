import styled from "styled-components";

export const CustomButton = styled.button<{
  color: string;
  colorHover?: string;
  width?: number;
  fontWeight?: string;
  borderRadius?: number;
  isOutLine?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: auto;
  font-size: 16px;
  padding: 8px 15px;

  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "bold")};
  
  background-color: ${({ isOutLine, color }) =>
    isOutLine ? "transparent" : color};
  
  color: ${({ isOutLine, color }) => (isOutLine ? color : "#fff")};
  min-width: ${({ width }) => width}px;
  border: 1px solid ${({ color }) => color};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : 12)}px;

  &:hover {
    color: #fff;
    background-color: ${({ isOutLine, color, colorHover }) =>
      isOutLine ? color : colorHover};
    border-color: ${({ isOutLine, color, colorHover }) =>
      isOutLine ? color : colorHover};
  }

  @media (max-width: 500px) {
    font-size: 12px;
  }
`;
