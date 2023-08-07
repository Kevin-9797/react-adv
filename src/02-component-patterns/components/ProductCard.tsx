

import styles from '../styles/styles.module.css'
import { ReactElement, createContext, useContext, useState } from 'react'
import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, ProductCardProps } from '../interfaces/products.interfaces';
import { ProductTitle } from '.';



export const ProductContext = createContext( {} as ProductContextProps );
const { Provider } = ProductContext;





interface ProductButtonsProps {
    increaseBy: ( value: number ) => void,
    value: number;

}

export const ProductCard = ( { product, children }: ProductCardProps ) => {

const { value, increaseBy } = useProduct();
 
  return (
    <Provider value= {{
        value,
        increaseBy,
        product
    }}>

        <div className={ styles.productCard }>

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
