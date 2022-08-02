import { gql, useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useForm } from '../hooks';
import { colors } from '../styles';
import { toast } from 'react-hot-toast';
import { useContext, useState } from 'react';
import { AuthContext } from '../contexts';
const initial = {
  email: '',
  password: '',
};

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  & form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
    padding: 2rem;
    border-radius: 10px;

    & label {
      font-weight: bold;
    }

    & p {
      text-align: center;
    }
  }
`;

const Input = styled.input`
  border: 2px solid transparent;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding: 0.8rem;
  width: 100%;
  margin-top: 0.2rem;
  &:focus {
    outline: none;
    border: 2px solid ${colors.secondary};
  }
`;

const Button = styled.button`
  background-color: ${colors.secondary};
  border-radius: 12px;
  color: white;
  padding: 8px;
  font-weight: 600;
  width: 100%;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
  cursor: pointer;
  font-size: 1rem;
  &:focus {
    outline: none;
  }
  &:hover {
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.6);
    opacity: 0.9;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }
`;

const SIGNUP = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`;

const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`;

export const Auth = ({ isLogin }: { isLogin?: boolean }) => {
  const { handleSubmit, register } = useForm(initial);
  const [signupStart] = useMutation(SIGNUP);
  const [loginStart] = useMutation(LOGIN);
  const [loading, setLoading] = useState(false);
  const { login, signup } = useContext(AuthContext);

  const onSubmit = (FormData: typeof initial) => {
    setLoading(true);
    if (isLogin) {
      loginStart({ variables: { input: FormData } })
        .then(({ data }) => {
          signup(FormData, data.login);
          toast.success('Se ha iniciado sesión correctamente');
        })
        .catch((err) => {
          toast.error(err.message || 'Error en las credenciales');
          console.log(err);
        })
        .finally(() => setLoading(false));
    } else {
      signupStart({ variables: { input: FormData } })
        .then(({ data }) => {
          login(FormData, data.signup);
          toast.success('Successfully signed up!');
        })
        .catch((err) => {
          toast.error(err.message || 'Tuvimos un problema al registrarte. Verifica que los datos sean correctos.');
          console.log(err);
        })
        .finally(() => setLoading(false));
    }
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h4>{isLogin ? 'Iniciar sesión' : 'Registrarse'}</h4>
          <label htmlFor="email">
            Email
            <Input type="text" {...register('email')} />
          </label>
        </div>

        <label htmlFor="password">
          Password
          <Input type="password" {...register('password')} />
        </label>

        <div>
          <Button disabled={loading}>{isLogin ? 'Iniciar sesión' : 'Registrarse'}</Button>

          {isLogin ? (
            <p>
              ¿No tienes cuenta?{' '}
              <Link to="/auth/signup">
                <strong>crear</strong>
              </Link>
            </p>
          ) : (
            <p>
              ¿Ya tienes cuenta?{' '}
              <Link to="/auth/login">
                <strong>login</strong>
              </Link>
            </p>
          )}
        </div>
      </form>
    </FormContainer>
  );
};
