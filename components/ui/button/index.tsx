import { CustomButton } from "./styles";

const Button: React.FC<{
  color: string;
  colorHover?: string;
  width?: number;
  text: string;
  fontWeight?: string;
  borderRadius?: number;
  hasInitialBackgroundColor?: boolean;
  hasArrowRight?: boolean;
  hasArrowLeft?: boolean;
  onClick?: () => void;
}> = (props) => {
  const {
    children,
    color,
    colorHover,
    width,
    text,
    fontWeight,
    borderRadius,
    hasInitialBackgroundColor,
    hasArrowRight,
    hasArrowLeft,
    onClick,
  } = props;

  let content: any = text;

  if (hasArrowRight) {
    content = (
      <>
        {text} {children}
      </>
    );
  }

  if (hasArrowLeft) {
    content = (
      <>
        {children} {text}
      </>
    );
  }

  return (
    <CustomButton
      onClick={onClick}
      color={color}
      colorHover={colorHover}
      width={width}
      fontWeight={fontWeight}
      borderRadius={borderRadius}
      hasInitialBackgroundColor={hasInitialBackgroundColor}
    >
      {content}
    </CustomButton>
  );
};

export default Button;
