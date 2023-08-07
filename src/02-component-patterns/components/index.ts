import { ProductCardHocProps } from "../interfaces/products.interfaces";
import { ProductButtons } from "./ProductButtons";
import { ProductCard  as ProductCardHoc} from "./ProductCard";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";

export { ProductButtons } from "./ProductButtons";
export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";



export const ProductCard:  ProductCardHocProps = Object.assign( ProductCardHoc,{
    Title: ProductTitle,
    Img: ProductImage,
    Buttons: ProductButtons
}) 

export default ProductCard;