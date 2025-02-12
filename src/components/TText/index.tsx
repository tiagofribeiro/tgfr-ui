import { Body, Header } from "./style";
import { TextTypes } from "./types";

const TText = ({
  title,
  as,
  bold,
  primary,
  maxW,
  marginX,
  marginY,
  alignment,
  fontSize,
  color,
  children
}: TextTypes) => {
  return title ?
    <Header
      as={as}
      $maxW={maxW}
      $marginX={marginX}
      $marginY={marginY}
      $alignment={alignment}
      $color={color}>
      {children}
    </Header>
    :
    <Body
      $bold={bold}
      $primary={primary}
      $maxW={maxW}
      $marginX={marginX}
      $marginY={marginY}
      $alignment={alignment}
      $fontSize={fontSize}
      $color={color}>
      {children}
    </Body>
};

export default TText;