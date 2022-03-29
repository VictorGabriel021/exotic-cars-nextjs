import { ScrollTopContainer } from "./styles";

import ScrollTopSvg from "@components/svgs/scroll-top";

import { Colors } from "@constants/index";

const ScrollTop: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <ScrollTopContainer color={Colors.primary} onClick={onClick}>
      <ScrollTopSvg />
    </ScrollTopContainer>
  );
};

export default ScrollTop;
