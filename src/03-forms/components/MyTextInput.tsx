import React from 'react'
import { useField, Field, ErrorMessage } from 'formik';




interface Props {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    [ x: string ]: any;
}

export const MyTextInput = ( { label , ...props }:Props) => {
  
 
    
    const [ field,meta ] = useField( props ); //la meta data dice si a sido tocado y si hay errores

    

  
  
  
  return (
    <>
    
        <label htmlFor={ props.id || props.name }>{ label }</label>
        <input className='text-input' { ...field } { ...props } />
    
        <ErrorMessage name={ props.name } component="span" className="custom-span-error-class" />
        
    
    </>
  )
}
