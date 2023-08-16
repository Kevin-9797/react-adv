import { ChangeEvent, FormEvent, useState } from "react"
import { useForm } from "../hooks/useForm";
import { Form, Formik } from "formik";
import * as Yup from 'yup';
import { MyTextInput } from "../components";

export const RegisterFormikPage = (  ) => {

  
const { onChangeRegister, formData, isValidEmail } = useForm({
  name: '',
  email: '',
  password1: '',
  password2: ''
});


const { name, email, password1,password2 } = formData;
  const onFormSubmit = ( ev : FormEvent<HTMLFormElement> ) => {
    ev.preventDefault();

}






  
  return (
    <div>
        <h1>Register Formik Page</h1>



        <Formik initialValues={{
            name: '',
            email: '',
            password1: '',
            password2: ''
        }}
                validationSchema={
                  Yup.object({
                    name: Yup.string()
                              .min(2,'There must be a minimum of 2 characters')
                              .max(15, 'There must be a maximun of 15 characters')
                              .required('Name is required'),
                    email: Yup.string()
                               .email('Not email validate')
                               .required('Email is required'),
                    password1: Yup.string()
                                  .min(6,'There must be a minimum of 6 characters')
                               .required('Email is required'),
                    password2: Yup.string()
                                   .min(6, 'There must be a minimum of 6 characters')
                                   .oneOf([Yup.ref('password1'),''],'Passwords must match'),


                  })
                }
                                onSubmit={
                  async(values) => {
                  console.log( values )
              }}
        >


          {

            ({ handleReset }) => (

              <Form>

                     <MyTextInput label='Name' 
                                  type='text'
                                  name='name' />  
                     <MyTextInput label='Email' 
                                    type='email'
                                    name='email' />  
                     <MyTextInput label='Password' 
                                    type='password'
                                    name='password1' />  
                     <MyTextInput label='Password repeat' 
                                    type='password'
                                    name='password2' />  

                    <button type="submit">Send</button>
                    <button type="reset" onClick={handleReset}>Reset</button>
              </Form>


            )

            


          }






        </Formik>

    </div>
  )
}
