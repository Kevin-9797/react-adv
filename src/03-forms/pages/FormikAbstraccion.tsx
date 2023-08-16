

import React from 'react'
import '../styles/styles.css' 
import { useFormik, FormikErrors, Formik,Field,Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { MyTextInput } from '../components/MyTextInput';
import { MySelect } from '../components/MySelect';

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikAbstraccion = () => {
    

  const validate = ( values:FormValues ) => {

    const errors: FormikErrors<FormValues> = {}

    if( !values.firstName ){
        errors.firstName = 'Required';

    }else if( values.firstName.length > 15 ){
        errors.firstName = 'Must be 15 characters or less';
    }


    return errors;


  }



  return (
    <div>
        
        <h1>Formik Abstraction</h1>


        <Formik initialValues={{
                      firstName: '',
                      lastName: '',
                      email: '',
                      terms: false,
                      jobType: ''
                }}
                onSubmit={
                  async(values) => {
                  console.log( values )
              }}

              validationSchema={
                Yup.object({
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
                  terms: Yup.boolean()
                            .oneOf([true], 'Accept terms and conditions'),
                  jobType: Yup.string()
                              .notOneOf([ 'it-senior' ],'option not allowed')
                              .required('Required')
                              
              }
              )
            }
        >

            { ({ getFieldProps  }) => (

                    <Form>

                        <MyTextInput label='First Name' 
                                    type='text'
                                    name='firstName' />  

                        <MyTextInput label='Last Name'
                                    type='text'
                                    name='lastName' />  

                        <MyTextInput label='Email'
                                    type='email'
                                    name='email' />  

                        <MySelect label='Job Type' name="jobType" as="select">

                          <option value="">Pick something</option>
                          <option value="developer">Developer</option>
                          <option value="designer">Designer</option>
                          <option value="it-senior">It Senior</option>


                        </MySelect>
                        

                        <label htmlFor="terms">
                          <Field name="terms" type="checkbox" /> 
                          Terms and conditions
                          </label>
                        <ErrorMessage name="terms" component="span"/>
                        
                        <button  type='submit'> submit</button>

                    </Form>

            )}

        </Formik>

     



    </div>
  )
}
