import { Product, ProductInCart } from "../interfaces/products.interfaces";
import { useState } from 'react';


export const useShoppingCart = () => {


    const [shoppingCart, setShoppingCart ] = useState<{ [key: string] : ProductInCart}>({  //aqui aplicamos una interfaz que le diga a react que devolvera un objecto con x cantidad de llaves
    })
  
  
    const keyValueShoppingCart = Object.entries(shoppingCart);
  
    const onProductCountChange = (  { count, product }: {count:number, product: Product }  ) => {
  
      setShoppingCart((oldShoppingCart:{ [key: string] : ProductInCart}) => {
        
        
        const productInCart:ProductInCart = oldShoppingCart[product.id] || { ...product,count: 0};
  
        if( Math.max( productInCart.count + count , 0 ) > 0 ){
          productInCart.count += count; 
          return {
            ...oldShoppingCart,
            [product.id]: productInCart
          }
        }
        
        const newData = { ...oldShoppingCart }        
        delete newData[product.id]
        return {
          ...newData,
        }
  
      });
  
    }


    return {
        onProductCountChange,
        keyValueShoppingCart,
        shoppingCart
    }
}