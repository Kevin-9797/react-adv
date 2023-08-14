import { ChangeEvent, useState } from 'react';



export const useForm = <T>( initState: T ) => {


    const [ formData, setRegisterData ] = useState(initState);
    
    
    
    
    
    const onChangeRegister = ( event:ChangeEvent<HTMLInputElement> ) => {
    
      setRegisterData( ( 
        prev => ({
          ...prev,
          [event.target.name]: event.target.value
        })
      ))
    
    }

    const resetForm = () => {

      setRegisterData({ ...initState })

    }
    
    const isValidEmail = ( email: string ) => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
  }
    
    

    return {
        formData,
        onChangeRegister,
        resetForm,
        isValidEmail
    }


}