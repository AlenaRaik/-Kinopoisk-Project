import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

type Props = {
  children: string;
};

export const TextDontHaveAccount: React.FC<Props> = ({ children }) => {
  return (
    <TextAccountWrapper>
      <TextLink>{children}</TextLink>
      <Link to={`/sign-up`}>
        <SignUpLink>Sign Up</SignUpLink>
      </Link>
    </TextAccountWrapper>
  );
};
const TextAccountWrapper = styled.div`
  font-size: 14px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;

const TextLink = styled.p``;

const SignUpLink = styled.p`
  text-decoration: underline;
`;
