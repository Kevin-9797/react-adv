import { useState } from 'react';


export  const useProduct = () => {

    const [ value , setCounter] = useState(0);

    const increaseBy = ( value: number) => {
        setCounter( prev => Math.max( prev + value, 0))   
    }

    return{
        value,
        increaseBy
    }
}