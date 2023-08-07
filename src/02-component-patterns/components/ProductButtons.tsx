import styles from '../styles/styles.module.css'
import { useContext } from 'react';
import { ProductContext } from './ProductCard';
export const ProductButtons = (  ) => {
 
    const { increaseBy,value } = useContext(ProductContext);

    return (
        <>
        <button className={ styles.buttonMinus } 
                    onClick={() => increaseBy(-1)}> - </button>
 
            <div className={ styles.countLabel}>{ value }</div>
            
            <button className={ styles.buttonAdd }
                    onClick={ () => increaseBy(+1)} > + </button>   
        
        </>
    );

}

