

import React from 'react'
import '../styles/styles.css' 
import { useFormik, FormikErrors  } from 'formik'
import * as Yup from 'yup'

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikYupPage = () => {
    

  const validate = ( values:FormValues ) => {

    const errors: FormikErrors<FormValues> = {}

    if( !values.firstName ){
        errors.firstName = 'Required';

    }else if( values.firstName.length > 15 ){
        errors.firstName = 'Must be 15 characters or less';
    }


    return errors;


  }

  const { handleChange, values,
          handleSubmit, handleBlur, touched,
          errors, getFieldProps } = useFormik({
    initialValues: {
        firstName: '',
        lastName: '',
        email: '',
    },
    onSubmit: async(values) => {
        console.log( values )
    },
    validationSchema: Yup.object({
    firstName: Yup.string()
                   .max(15,'')
                   .required('Requerid'),
    lastName: Yup.string()
                   .max(15,'')
                   .required('Requerid'), 
    email: Yup.string()
                   .max(15,'')
                   .email()
                   .required('Requerid'),
    })
  })     


  return (
    <div>
        
        <h1>Formik Yup Tutorial</h1>


        <form onSubmit={ handleSubmit } noValidate >

            <label htmlFor="firstName">First Name</label>
            <input type="text"
                  // getFieldProps es una funcion la cual desestructura toda las propiedades del nombre del objecto enviado por parametro
                   { ...getFieldProps('firstName')}/>
                  { touched.firstName && errors.firstName && <span>{ errors.firstName }</span>}


            <label htmlFor="lastName">Last Name</label>
            <input type="text"
                 { ...getFieldProps('lastName')} />
                   { touched.lastName && errors.lastName && <span>{ errors.lastName }</span>}

            <label htmlFor="email">Email</label>
            <input type="email"
                   { ...getFieldProps('email')}/>
                  { touched.email && errors.email && <span>{ errors.email }</span>}


            <button  type='submit'> submit</button>

        </form>



    </div>
  )
}
