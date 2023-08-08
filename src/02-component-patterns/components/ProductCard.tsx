

import styles from '../styles/styles.module.css'
import { ReactElement, createContext, useContext, useState } from 'react'
import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Product, onChangeArgs } from '../interfaces/products.interfaces';
import { ProductTitle } from '.';



export const ProductContext = createContext( {} as ProductContextProps );
const { Provider } = ProductContext;

export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className: string;
    style?: React.CSSProperties;
    onChange?: ( args: onChangeArgs ) => void ;
    value?: number;
}





export const ProductCard = ( { product, children,className, style, onChange,value   }: Props ) => {

const { counter, increaseBy } = useProduct({
    onChange,
    product,
    value
});
 
  return (
    <Provider value= {{
        counter,
        increaseBy,
        product
    }}>

        <div className={ `${ styles.productCard } ${ className }` } 
             style={ style }>

            { children }
            {/* <ProductImage img={ product.img } />
            <ProductTitle title={ product.title } />
            <div className={ styles.buttonContainer }>

                <ProductButtons increaseBy={ increaseBy }  value={ value }  />
                
            </div>
            <h1>Product Card</h1> */}
        </div>

    </Provider>
  )
}

// ProductCard.Title = ProductTitle; //Agregamos una nueva propiedad al ProductCard
// ProductCard.Img = ProductImage; //Agregamos una nueva propiedad al ProductCard
// ProductCard.Buttons = ProductButtons; //Agregamos una nueva propiedad al ProductCard


export default ProductCard
