import { useEffect, useState } from "react";
import {  ProductCard   } from "../components/index"
import { Product, ProductInCart } from '../interfaces/products.interfaces';
import '../styles/custom-styles.css'
import { useShoppingCart } from "../hooks/useShoppingCart";
import { products } from "../data/products";





export const ShoppingPage = () => {
  const { onProductCountChange, keyValueShoppingCart, shoppingCart } = useShoppingCart();

    
  return (
    <div>
        <h1>Shopping Store</h1>
        <div style={{
            display:'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}>
 
          {
            products.map( ( product:Product ) => (

              <ProductCard key={ product.id }
                          product={product} 
                          className="bg-dark "
                          onChange={ onProductCountChange }
                          value={ shoppingCart[product.id]?.count || 0  } // aqui decimos que si el valor es nullo le asignamos 0
                          >
                  <ProductCard.Img className="custom-image" />
                  <ProductCard.Title title={ 'Cafè' } className="text-white" />
                  <ProductCard.Buttons className="custom-buttons" />
              </ProductCard>
            ))
          }
            <div className="shopping-cart">

              {
                  keyValueShoppingCart.map( ([key,product]) => (

                        <ProductCard key={ product.id }
                                      product={ product } 
                                      className="bg-dark "
                                      style={{
                                        width:'100px',

                                      }}
                                      value= { product.count }
                                      onChange={ onProductCountChange }
                                      >
                              <ProductCard.Img className="custom-image" />
                              <ProductCard.Title title={ `${ product.count }` } className="text-white" />
                              <ProductCard.Buttons className="custom-buttons"
                                                    style={{
                                                      display: 'flex',
                                                      justifyContent: 'center'
                                                    }} />
                          </ProductCard>


                  ))
              }
              </div>
              <div>
                <code>
                  { JSON.stringify(shoppingCart,null,5)}
                </code>
              </div>
        </div>
    </div>
  )
}
export default ShoppingPage