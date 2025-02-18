import { Body, Header } from "./style";
import { TTextTypes } from "./types";

/**
 * Componente de texto flexível que renderiza um `Header` se `title` for `true`, 
 * caso contrário, renderiza um `Body`.  
 * 
 * @param title - Define se o componente deve ser um `Header` (true) ou um `Body` (false).
 * @param as - Elemento HTML a ser utilizado no `Header` (ex: "h1", "h2").
 * @param bold - Define se o `Body` será renderizado em negrito.
 * @param primary - Indica se o estilo primário do `Body `deve ser aplicado.
 * @param fontSize - Define o tamanho da fonte em pixels.
 * @params `maxW`, `marginX`, `marginY`, `alignment`, `color` - Estilos aplicáveis a ambos. 
 * @returns 
 */
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
}: TTextTypes) => {
  if (title) {
    return (
      <Header
        as={as}
        $maxW={maxW}
        $marginX={marginX}
        $marginY={marginY}
        $alignment={alignment}
        $color={color}>
        {children}
      </Header>
    )
  }

  return (
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
  )
};

export default TText;

