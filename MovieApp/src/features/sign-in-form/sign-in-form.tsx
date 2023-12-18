import { useState } from 'react';
import { Input } from '#ui/input/input';
import { Button } from '#ui/button';
import { ForgotPassword } from './forgot-password';
import { TextDontHaveAccount } from './dont-have-an-account';
import { styled } from 'styled-components';
import { useAppDispatch, useAuth } from '#hooks';
import { removeUser, setUser } from './sign-in-form.slice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export const SignInForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { isAuth, nameEmail } = useAuth();
  const dispatch = useAppDispatch();
  const handleLogin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            nameEmail: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        navigate('/');
      })
      .catch(console.error);
  };
  return !isAuth ? (
    <FormSignIn>
      <Input
        type="email"
        labelText="Email"
        placeholder="Your email"
        value={email}
        onChange={({ currentTarget }) => setEmail(currentTarget.value)}
      />
      <Input
        type="password"
        labelText="Password"
        placeholder="Your password"
        value={password}
        onChange={({ currentTarget }) => setPassword(currentTarget.value)}
      />
      <ForgotPassword>Forgot password?</ForgotPassword>
      <Button variant="primary" onClick={() => handleLogin()}>
        Sign In
      </Button>
      <TextDontHaveAccount>Don't have an account?</TextDontHaveAccount>
    </FormSignIn>
  ) : (
    <FormSignIn>
      <ButtonLogOut
        onClick={() => {
          dispatch(removeUser());
          navigate('/');
        }}
      >
        Log out from {nameEmail}
      </ButtonLogOut>
    </FormSignIn>
  );
};

const ButtonLogOut = styled.button`
  width: 300px;
  height: 50px;
  border: 1px solid white;
  background: blue;
  color: white;
`;
const FormSignIn = styled.form`
  border: 1px solid grey;
  margin: auto;
  padding: 20px;
  width: 50%;
`;
