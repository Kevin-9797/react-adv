

import React from 'react'
import '../styles/styles.css' 
import { useFormik, FormikErrors  } from 'formik'

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikBasicPage = () => {
    

  const validate = ( values:FormValues ) => {

    const errors: FormikErrors<FormValues> = {}

    if( !values.firstName ){
        errors.firstName = 'Required';

    }else if( values.firstName.length > 15 ){
        errors.firstName = 'Must be 15 characters or less';
    }


    return errors;


  }

  const { handleChange, values, handleSubmit, handleBlur } = useFormik({
    initialValues: {
        firstName: '',
        lastName: '',
        email: '',
    },
    onSubmit: async(values) => {
        console.log( values )
    },
    validate
  })     


  return (
    <div>
        
        <h1>Formik Basic Tutorial</h1>


        <form onSubmit={ handleSubmit } >

            <label htmlFor="firstName">First Name</label>
            <input type="text"
                   name="firstName"
                   onBlur={ handleBlur }
                   id=""
                   onChange={ handleChange } 
                   value={ values.firstName }/>



            <label htmlFor="lastName">Last Name</label>
            <input type="text"
                   name="lastName"
                   onBlur={ handleBlur }
                   id=""
                   onChange={ handleChange } 
                   value={ values.lastName } />

            <label htmlFor="email">Email</label>
            <input type="email"
                   name="email"
                   id=""
                   onChange={ handleChange } 
                   value={ values.email }/>

        </form>



    </div>
  )
}
