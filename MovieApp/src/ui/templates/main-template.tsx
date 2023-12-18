import styled from 'styled-components';

type Props = {
  header: React.ReactNode;
  backLink?: React.ReactNode;
  title?: React.ReactNode;
  body: React.ReactNode;
  children?: never;
};

export const MainTemplate: React.FC<Props> = ({
  header,
  backLink,
  title,
  body,
}) => {
  return (
    <MainTemplateWrapper>
      {header}
      <ContentWithPaddings>
        <Main>
          <BackLinkContainer>{backLink}</BackLinkContainer>
          <TitleContainer>{title}</TitleContainer>
          <BodyContainer>{body}</BodyContainer>
        </Main>
      </ContentWithPaddings>
    </MainTemplateWrapper>
  );
};

const MainTemplateWrapper = styled.div`
  width: 100%;
  min-height: 100dvh;

  display: flex;
  flex-direction: column;

  background-color: var(--background-primary-color);
`;

const ContentWithPaddings = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Main = styled.main`
  width: 100%;
  flex-grow: 1;
`;

const BackLinkContainer = styled.div`
  width: 100%;
  text-align: start;
`;

const TitleContainer = styled.div`
  width: 100%;
  text-align: start;
`;

const BodyContainer = styled.div`
  /* display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr); */
`;
