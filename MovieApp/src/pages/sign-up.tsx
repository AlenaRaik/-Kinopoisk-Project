import { MainTemplate } from '#ui/templates/main-template';
import { Title } from '#ui/title/title';
import { BackLink } from '#features/back-link/back-link';
import { SignUpForm } from '#features/sign-up-form/sign-up-form';
import { Menu } from '#ui/header/menu';
import styled from 'styled-components';
import { MenuNav } from '#ui/header/menuNav';

export const SignUp: React.FC = () => {
  return (
    <PageAllPostsWraper>
    <MenuNav />
    <MainTemplate
      header={<Menu />}
      backLink={<BackLink />}
      title={<Title>Sign Up</Title>}
      body={<SignUpForm />}
    />
    </PageAllPostsWraper>
  );
};
const PageAllPostsWraper = styled.div`
background-color: var(--background-primary-color);
    display: flex;
`