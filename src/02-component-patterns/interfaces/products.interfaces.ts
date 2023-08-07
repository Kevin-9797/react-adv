import { ReactElement } from "react";
import ProductCard from '../components/index';

export interface ProductCardProps {
    product: Product;
    children?: ReactElement | ReactElement[];
}
export interface Product {
    id: string;
    title?: string;
    img?: string;
     
}

export interface ProductContextProps {
    value: number;
    increaseBy: ( value: number) => void;
    product: Product;
}

export interface ProductButtonsProps {
    increaseBy: ( value: number ) => void,
    value: number;

}
export interface ProductCardHocProps {
    ({ children, product }: ProductCardProps): JSX.Element,
    Title: ({ title }: {
        title?: string;
    }) => JSX.Element,
    Img: ({ img }: {
        img?: string ;
    }) => JSX.Element,
    Buttons: () => JSX.Element
}

