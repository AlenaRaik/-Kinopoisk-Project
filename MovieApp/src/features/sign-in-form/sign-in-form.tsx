import { useState } from 'react';
import { Input } from '#ui/input/input';
import { Button } from '#ui/button';
import { ForgotPassword } from './forgot-password';
import { TextDontHaveAccount } from './dont-have-an-account';
import { styled } from 'styled-components';

export const SignInForm: React.FC = () => {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  return (
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
      <Button variant="primary" onClick={() => null}>
        Sign In
      </Button>
      <TextDontHaveAccount>Don't have an account?</TextDontHaveAccount>
    </FormSignIn>
  );
};

const FormSignIn = styled.form`
  border: 1px solid grey;
  margin: auto;
  padding: 20px;
`;
