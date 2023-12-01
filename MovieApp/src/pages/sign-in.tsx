import { MainTemplate } from '#ui/templates/main-template';
import { Title } from '#ui/title/title';
import { BackLink } from '#features/back-link/back-link';
import { Menu } from '#ui/header/menu';
import { SignInForm } from '#features/sign-in-form/sign-in-form';
import { MenuNav } from '#ui/header/menuNav';
import styled from 'styled-components';

export const SignIn: React.FC = () => {
  return (
    <PageAllPostsWraper>
    <MenuNav />
    <MainTemplate
      header={<Menu />}
      backLink={<BackLink />}
      title={<Title>Sign In</Title>}
      body={<SignInForm />}
    />
    </PageAllPostsWraper>
  );
};
const PageAllPostsWraper = styled.div`
background-color: var(--background-primary-color);
    display: flex;
`