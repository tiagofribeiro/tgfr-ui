'use client'

import styled from "styled-components";
import { TextBodyTypes, TextTitleTypes } from "./types";

const Header = styled.h1<TextTitleTypes>(({
    as,
    $maxW = 100,
    $marginX = 0,
    $marginY = 0,
    $alignment = 'left',
    $color
}) => `
    max-width: ${$maxW}%;
    margin: ${$marginY}px ${$marginX}px;
    text-align: ${$alignment};
    color: ${$color};

    ${as === 'h1' && `
        font-size: 60px;
        font-weight: bold;

        @media screen and (max-width: 768px) {
            font-size: 40px;
            max-width: 80%;
        };
    `}

    ${as === 'h2' && `
        font-size: 48px;
        font-weight: bold;

        @media screen and (max-width: 980px) {
            max-width: 90%;
        }
        
        @media screen and (max-width: 768px) {
            font-size: 30px;
        };
    `}

    ${as === 'h3' && `
        font-size: 32px;
        font-weight: bold;

        @media screen and (max-width: 768px) {
            font-size: 24px;
        };
    `}

    ${as === 'h4' && `
        font-size: 28px;
        font-weight: 400;

        @media screen and (max-width: 768px) {
            font-size: 20px;
        };
    `}
`);

const Body = styled.span<TextBodyTypes>(({
    $bold,
    $primary,
    $fontSize,
    $maxW = 100,
    $marginX = 0,
    $marginY = 0,
    $alignment = 'left',
    $color
}) => `
    max-width: ${$maxW}%;
    margin: ${$marginY}px ${$marginX}px;
    text-align: ${$alignment};
    font-size: ${$primary ? '16' : '14'}px;
    font-weight: ${$bold ? 700 : 400};
    
    ${$fontSize && `font-size: ${$fontSize}px;`}
    ${$color && `color: ${$color};`}

    @media screen and (max-width: 768px) {
        font-size: 14px;

        ${$fontSize == 60 && `font-size: 40px;`}
        ${$fontSize == 48 && `font-size: 30px;`}
        ${$fontSize == 32 && `font-size: 24px;`}
        ${$fontSize == 28 && `font-size: 20px;`}
    }
`);


export { Header, Body }