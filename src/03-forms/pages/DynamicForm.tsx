

import React from 'react'

import formJson from '../data/custom-form.json'
import { Form, Formik } from 'formik';
import { MySelect, MyTextInput } from '../components';
import * as Yup from 'yup';


export const DynamicForm = () => {

const initialValues: { [ key: string ]:any } = {};
const requiredFields: { [ key: string ]:any } = {};

for( const input of formJson ){
    initialValues[input.name] = input.value;
    
    if(!input.validations) continue;

        let schema = Yup.string()

        for( const rule of input.validations) {
            if( rule.type === 'required'){
                schema = schema.required('Field is required');
            }
            if( rule.type === 'email'){
                schema = schema.email('Email is not valid');
            }
        }
        requiredFields[input.name] = schema;
        


}

const validationSchema = Yup.object({ ...requiredFields })

  return (

 <div>


    <Formik
              initialValues={ initialValues }
              onSubmit={
                () => {

                }
              } 
              validationSchema={ validationSchema }
    
    >

        {

            ({}) => (

                <Form>

                        
                            {
                            
                            formJson.map( ({ name, value, label, type ,options,...data }) => {
            
                                if( type === 'input' || type === 'text' || type === 'password' ){
            
                                    return <MyTextInput key={name} name={ name }  label={ label }  { ...data }  />
            
            
                                }else if( type === 'select'){
            
                                    return <MySelect key={name} name={ name }  label={ label }  { ...data } >
            
                                            {
                                                options?.map( ({ id,label }) => (
            
                                                <option key={id} value={id}>{ label }</option>
            
                                                ))
            
                                            }
            
            
            
                                        </MySelect>
            
            
                                }
            
            
            
                            })
            
                        }
                        
            
                        <button type="submit">Submit</button>

                </Form>
            )

        }



    </Formik>

 </div>

  )
}
