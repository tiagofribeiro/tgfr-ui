import { Container } from "./style";
import { TCardTypes } from "./types";

const TCard = ({ children, gapX, gapY, paddingX, paddingY, bgColor, hasClick, onClick }: TCardTypes) => {
    return (
        <Container
            $gapX={gapX}
            $gapY={gapY}
            $paddingX={paddingX}
            $paddingY={paddingY}
            $bgColor={bgColor}
            $hasClick={hasClick}
            onClick={onClick}
        >
            {children}
        </Container>
    );
}

export default TCard;