import { styled } from 'styled-components';

type Props = {
  children: string;
};

export const ForgotPassword: React.FC<Props> = ({ children }) => {
  return (
    <ForgotPasswordWrapper>
      <ForgotPasswordLink>{children}</ForgotPasswordLink>
    </ForgotPasswordWrapper>
  );
};
const ForgotPasswordWrapper = styled.div`
  text-align: left;
  font-size: 14px;
  margin-top: -5px;
  margin-bottom: 5px;
`;

const ForgotPasswordLink = styled.a``;
