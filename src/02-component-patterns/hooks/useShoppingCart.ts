import { Product, ProductInCart } from "../interfaces/products.interfaces";
import { useState } from 'react';


export const useShoppingCart = () => {


    const [shoppingCart, setShoppingCart ] = useState<{ [key: string] : ProductInCart}>({  //aqui aplicamos una interfaz que le diga a react que devolvera un objecto con x cantidad de llaves
    })
  
  
    const keyValueShoppingCart = Object.entries(shoppingCart);
  
    const onProductCountChange = (  { count, product }: {count:number, product: Product }  ) => {
  
      setShoppingCart((oldShoppingCart:{ [key: string] : ProductInCart}) => {
        
        
        if(count === 0){
            
            const newData = { ...oldShoppingCart }        
            delete newData[product.id]
            return {
              ...newData,
            }
      
        }else{
            return{
                ...oldShoppingCart,
                [product.id]: { ...product , count }
            }

        }

      });
  
    }


    return {
        onProductCountChange,
        keyValueShoppingCart,
        shoppingCart
    }
    
}