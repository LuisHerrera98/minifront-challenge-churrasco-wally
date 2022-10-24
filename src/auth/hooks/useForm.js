import { useEffect, useState } from "react";
import { mailValidate, passwordValidate } from "../helpers/validateForm";
import { useNavigate } from "react-router-dom";

export const useForm = (initialForm = {}) => {

  const navigate = useNavigate()

  const [formState, setFormState] = useState(initialForm);
  const [errorEmail, setErrorEmail] = useState(true);
  const [errorPassword, setErrorPassword] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true)
  const [hasError, setHasError] = useState("")
  

  useEffect(() => {
   validateField()
  }, [formState])

  const validateField = () => {
    if(formState.email.length > 0){
      setErrorEmail(mailValidate(formState.email))
    }
    if(formState.password.length > 0){
      setErrorPassword(passwordValidate(formState.password))
    }
    if(mailValidate(formState.email) && passwordValidate(formState.password)){
      setIsDisabled(false)
    }
  }

  const onImputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const login = async (e) => {
    e.preventDefault();
    
    try {
      const payload = {
        email: formState.email,
        password: formState.password
      }
        const response = await fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers:{
              'Content-Type': 'application/json'
            }
        })
        const data = await response.json()

        if(response.status === 200){
          localStorage.setItem("token", data)
          navigate('/products')
        }else{
          setHasError(data)
        }

        
        return data
    } catch (error) {
        return error
    }
  }



  return {
    ...formState,
    formState,
    onImputChange,
    validateEmail: errorEmail,
    validatePassword: errorPassword,
    isDisabled,
    login,
    hasError
  };
};
