import { useCallback, useEffect, useRef, useState } from 'react';
import { InitialValuesProps, Product, onChangeArgs } from '../interfaces/products.interfaces';



interface useProductArgs{
    product: Product;
    onChange?: (args:onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValuesProps;
}

export  const useProduct = ( {onChange , product, value = 0, initialValues }: useProductArgs ) => {

    const [ counter , setCounter] = useState<number>( initialValues?.count || value );        
    const isMounted = useRef( false );

    console.log(initialValues);

    const increaseBy = ( value: number) => {
     
        let newValue = Math.max( counter + value, 0);
        if( initialValues?.maxCount ){
            newValue = Math.min( newValue,initialValues.maxCount ); //aqui comparo y agarro el valor minimo de uno de lo sos

        }
        setCounter( newValue )   
        onChange && onChange({ count: newValue, product }); //Aqui le decimos que si la funcion existe, la ejecutemos
        
        
    }
   

    const reset = () => {
        setCounter( initialValues?.count || value  )
    }
    useEffect(() => {
        if( !isMounted.current ) return;
        else isMounted.current = true;
        
        setCounter(value)
    }, [value])
    

    return{
        counter,
        increaseBy,
        isMaxCountReached: !!initialValues?.maxCount && counter === initialValues.maxCount,
        maxCount: initialValues?.maxCount,
        reset
    }
}