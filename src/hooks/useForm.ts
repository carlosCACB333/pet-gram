import { useState } from 'react';

export const useForm = <T extends object>(initial: T) => {
  const [values, setValues] = useState<T>(initial);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const register = (name: keyof T) => {
    return {
      value: values[name],
      id: name,
      placeholder: name,
      name,
      onChange: handleChange,
    };
  };

  function handleSubmit(onSubmit: (data: T) => void) {
    return (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onSubmit(values);
    };
  }

  const reset = () => setValues(initial);

  return { register, handleSubmit, reset };
};
