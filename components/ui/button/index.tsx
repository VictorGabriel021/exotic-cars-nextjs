import { CustomButton } from "./styles";

const Button: React.FC<{
  color: string;
  colorHover?: string;
  width?: number;
  fontWeight?: string;
  borderRadius?: number;
  isOutLine?: boolean;
  onClick?: () => void;
}> = (props) => {
  const {
    children,
    color,
    colorHover,
    width,
    fontWeight,
    borderRadius,
    isOutLine,
    onClick,
  } = props;

  return (
    <CustomButton
      onClick={onClick}
      color={color}
      colorHover={colorHover}
      width={width}
      fontWeight={fontWeight}
      borderRadius={borderRadius}
      isOutLine={isOutLine}
    >
      {children}
    </CustomButton>
  );
};

export default Button;
