import styles from '../styles/styles.module.css'
import { useContext } from 'react';
import { ProductContext } from './ProductCard';


export interface Props{
    className?: string;
    activeBtnClass?: string
}
export const ProductButtons = (  { className }: Props ) => {
 
    const { increaseBy,value } = useContext(ProductContext);

    return (
        <div className= { `${ styles.buttonsContainer } ${ className }`  }>

            <button className={ styles.buttonMinus } 
                        onClick={() => increaseBy(-1)}> - </button>
    
                <div className={ styles.countLabel}>{ value }</div>
                
                <button className={ styles.buttonAdd }
                        onClick={ () => increaseBy(+1)} > + </button>   
            

        </div>
    );

}

