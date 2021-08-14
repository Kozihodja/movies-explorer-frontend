import React, { useState, useEffect } from 'react';

const useValidation = (value, validations) => {
    const [isEmpty, setIsEmpty] = useState(true);
    const [minLengthErr, setMinLengthErr] = useState(true);
    const [maxLengthErr, setMaxLengthErr] = useState(true);
    const [emailError, setEmailError] = useState(true);
    const [nameError, setNameError] = useState(true);
    const [passwordError, setPasswordError] = useState(true);
    const [inputValid, setInputValid] = useState(false)
  
    useEffect(()=> {
      for (const validation in validations) {
        switch (validation) {
          case 'minLength':
            value.length < validations[validation]  ? setMinLengthErr(true) : setMinLengthErr(false);
            break;
          case 'maxLength':
            value.length > validations[validation]  ? setMaxLengthErr(true) : setMaxLengthErr(false);
            break;
          case 'isEmpty':
              value ? setIsEmpty(false) : setIsEmpty(true);
            break;
          case 'isEmail':
              // eslint-disable-next-line
            const emailRex = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u;
            (emailRex.test(value)) ? setEmailError(false) : setEmailError(true);
            break;
            case 'isName':
              const nameRex = /^([a-z\-A-Zа-яА-Я\s]{2,40})/gmi;
              (nameRex.test(value)) ? setNameError(false) : setNameError(true);
              break;
              case 'isPassword':
                const passwordRex = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;
                (passwordRex.test(value)) ? setPasswordError(false) : setPasswordError(true);
                break;
          default:
              /* code */
              break;
        }
      }
    }, [value, validations])

    useEffect(() => {
        if (isEmpty || (minLengthErr && maxLengthErr) || (emailError && nameError && passwordError)) {
            setInputValid(false);

        } else  {
            setInputValid(true);
        }
      }, [isEmpty, maxLengthErr, minLengthErr, passwordError, emailError, nameError])
  
    return {
      isEmpty,
      minLengthErr,
      maxLengthErr,
      emailError,
      nameError,
      passwordError,
      inputValid
    }
  }
  
 export default function useInput(val, validations) {
    const [value, setValue] = React.useState(val);
    const [isDirty, setDirty] = React.useState(false);
    const [isChanged, setChanged] = React.useState(false);
    const valid = useValidation(value, validations)
  
    const onChange = (e) => {
      setValue(e.target.value);
      setChanged(true);
    }
  
    const onBlur = (e) => {
      setDirty(true);
    }
  
    return {
      value,
      onChange,
      isChanged,
      onBlur,
      isDirty,
      ...valid
    }
  }