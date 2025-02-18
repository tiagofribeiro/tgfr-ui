'use client'

import styled from "styled-components";
import { TCardStyledTypes } from "./types";

const Container = styled.div<TCardStyledTypes>(({
    $gapX,
    $gapY,
    $paddingX = 0,
    $paddingY = 0,
    $bgColor = `var(--grey-300)`,
    $hasClick,
}) => `
    display: flex;
    ${$gapX && `column-gap: ${$gapX}px;`}
    ${$gapY && `row-gap: ${$gapY}px;`}
    padding: ${$paddingY}px ${$paddingX}px;
    align-items: center;
    border-radius: 20px;
    background-color: ${$bgColor};
    ${$hasClick && `cursor: pointer;`}
    transition: 400ms;
    animation: appearAnimation 400ms linear forwards;

    @keyframes appearAnimation {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    &:hover {
        transform: scale(1.05);
    }
`);

export { Container }