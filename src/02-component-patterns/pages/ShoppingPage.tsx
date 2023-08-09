import { useEffect, useState } from "react";
import {  ProductCard   } from "../components/index"
import { Product, ProductInCart } from '../interfaces/products.interfaces';
import '../styles/custom-styles.css'
import { useShoppingCart } from "../hooks/useShoppingCart";
import { products } from "../data/products";





export const ShoppingPage = () => {
    






  return (
    <div>
        <h1>Shopping Store</h1>
        <div style={{
            display:'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}>
 
        
              <ProductCard key={ products[0].id }
                          product={products[0]} 
                          className="bg-dark "
                          initialValues={{
                            count: 4,
                            maxCount: 10
                          }}
                          >
                            {
                              ( { reset,increaseBy,isMaxCountReached, count }) => (
                                <>
                                
                                  <ProductCard.Img className="custom-image" />
                                  <ProductCard.Title title={ 'Cafè' } className="text-white" />
                                  <ProductCard.Buttons  className="custom-buttons" />
                                  <button onClick={ () => increaseBy(-2)} >-2</button>
                                  <button  style={{
                                    display: isMaxCountReached ? 'none' : 'block'
                                  }}
                                  onClick={ () => increaseBy(2)}>+2</button>
                                  <span>{count}</span>
                                </>


                              )
                            }
              </ProductCard>
                          
     
      {/* <div className="shopping-cart">

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
              </div> */}
              <div>
                <code>
                </code>
              </div>
        </div>
    </div>
  )
}
export default ShoppingPage