import { useState } from 'react'

const types = {
    email: {
      regexp: /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Preencha com um email válido',
    },
    password: {
      regexp: /^[a-zA-Z0-9]{6,}$/,
      message: 'A senha deve ter pelo menos 6 caracteres.',
    },
    cpf: {
        regexp: /^(\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2})|(\d{3}\.?\d{3}\.?\d{3}-?\d{2})$/,
        message: 'Preencha com um CPF válido',
    },
    telefone: {
        regexp: /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/,
        message: 'Preencha com um telefone válido'
    },
    cep: {
        regexp: /^([\d]{2})([\d]{3})([\d]{3})$|^[\d]{2}.[\d]{3}-[\d]{3}$/,
        message: 'Preencha com um CEP válido'
    }
  };
  

export function useForm(type: string) {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');

    function validate(value: string) {
        if (type === 'false') return true;
        if (value.length === 0) {
            setError('Preencha um valor.');
            return false;
        } else if (type in types && !types[type as keyof typeof types].regexp.test(value)) {
            setError(types[type as keyof typeof types].message);
            return false;
        } else {
            setError('');
            return true;
        }
    }

    function onChange({target}: React.ChangeEvent<HTMLInputElement>) {
        if(error) validate(target.value);
        setValue(target.value);
    } 

    return {
        type,
        value,
        setValue,
        onChange,
        error,
        validate: () => validate(value),
        onBlur: () => validate(value)
    }
}