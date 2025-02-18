export interface TCardTypes {
    children: React.ReactNode;
    gapX?: number;
    gapY?: number;
    paddingX?: number;
    paddingY?: number;
    bgColor?: string;
    hasClick?: boolean;
    onClick?: () => void;
}

export interface TCardStyledTypes {
    $gapX?: number;
    $gapY?: number;
    $paddingX?: number;
    $paddingY?: number;
    $bgColor?: string;
    $hasClick?: boolean;
}