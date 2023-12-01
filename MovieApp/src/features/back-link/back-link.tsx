import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BackLink: React.FC = () => (
  <Link to={`/posts`}><BackLinkWrapper>Back to home</BackLinkWrapper></Link>
);

const BackLinkWrapper = styled.div`
  color: var(--text-primary-color);
`;
