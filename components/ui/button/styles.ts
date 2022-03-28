import styled from "styled-components";

export const CustomButton = styled.button<{
  color: string;
  colorHover?: string;
  width?: number;
  fontWeight?: string;
  borderRadius?: number;
  hasInitialBackgroundColor?: boolean;
}>`
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "bold")};

  background-color: ${({ hasInitialBackgroundColor, color }) =>
    hasInitialBackgroundColor ? color : "transparent"};

  color: ${({ hasInitialBackgroundColor, color }) =>
    hasInitialBackgroundColor ? "#fff" : color};

  width: auto;
  min-width: ${({ width }) => width}px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  border: 1px solid ${({ color }) => color};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : 12)}px;
  padding: 8px 15px;

  &:hover {
    color: #fff;
    background-color: ${({ hasInitialBackgroundColor, color, colorHover }) =>
      hasInitialBackgroundColor ? colorHover : color};
    border-color: ${({ colorHover }) => colorHover};
  }

  @media (max-width: 500px) {
    font-size: 12px;
  }
`;
