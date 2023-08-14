import { ChangeEvent, FormEvent, useState } from "react"
import { useForm } from "../hooks/useForm";

export const RegisterPage = (  ) => {

  
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
        <h1>Register Page</h1>

        <form noValidate onSubmit={ ( ev ) =>  onFormSubmit(ev) }  action="">

            <input value={ name } 
                   type="text"
                   name="name"
                   className={ ` ${ name.trim().length <= 0 && 'has-error' }`  }
                   onChange={onChangeRegister} />
                  { name.trim().length <= 0 && <span> Name is required </span> }
            <input value={ email }
                   type="email"
                   name="email"
                   className={ ` ${ isValidEmail(email) && 'has-error' }`  }
                   onChange={onChangeRegister} />

                   { isValidEmail(email) && <span> Email is not valid </span>}

            <input value={ password1 }
                   type="password"
                   name="password1"
                   onChange={onChangeRegister} />
            <input value={ password2 } 
                   type="password"
                   name="password2"
                   onChange={onChangeRegister} />



        </form>
    </div>
  )
}
