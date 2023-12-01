import { BackLink } from '#features/back-link/back-link';
import { MainTemplate } from '#ui/templates/main-template';
import { Title } from '#ui/title/title';
import { Menu } from '#ui/header/menu';
import { Button } from '#ui/button';
import { styled } from 'styled-components';

export const Success: React.FC = () => {
  return (
    <MainTemplate
      header={<Menu />}
      backLink={<BackLink />}
      title={<Title>Success</Title>}
      body={<SuccessForm />}
    />
  );
};

const SuccessForm: React.FC = () => {
  return (
    <FormSignUp>
      <TextSuccess>
        <TextValueSuccess>
          Email confirmed. <br />
          Your registration is now complete!
        </TextValueSuccess>
      </TextSuccess>
      <Button variant="primary" onClick={() => null}>
        Go to home
      </Button>
    </FormSignUp>
  );
};

const FormSignUp = styled.form`
  border: 1px solid grey;
  width: 50%;
  margin: auto;
  padding: 20px;
`;
const TextSuccess = styled.div`
  margin-bottom: 20px;
`;
const TextValueSuccess = styled.p`
  text-align: left;
  color: var(--text-primary-color);
`;
