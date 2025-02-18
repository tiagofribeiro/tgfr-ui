import { KnownTarget } from "styled-components/dist/types";

export interface TTextTypes {
    as?: KnownTarget;
    bold?: boolean;
    title?: boolean,
    primary?: boolean;
    maxW?: number;
    marginX?: number;
    marginY?: number;
    alignment?: string;
    fontSize?: number;
    color?: string;
    children: React.ReactNode;
}

export interface TTextHeaderTypes {
    as?: KnownTarget;
    $maxW?: number;
    $marginX?: number;
    $marginY?: number;
    $alignment?: string;
    $color?: string;
}

export interface TTextBodyTypes extends TTextHeaderTypes {
    $bold?: boolean;
    $primary?: boolean;
    $fontSize?: number;
}


