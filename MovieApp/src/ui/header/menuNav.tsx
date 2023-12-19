import { Filters } from '#features/filter/filter';
import { useAppSelector } from '#hooks';
import {
  faBookmark,
  faFire,
  faGear,
  faHouse,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type MenuNavProps = {};

export const MenuNav: React.FC<MenuNavProps> = (props: MenuNavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <StyledMenuUserList>
        <Logo>
          <TextLogo>pix</TextLogo>
          <TextLogoNext>ema</TextLogoNext>
        </Logo>
        <StyledUserMenuAction>
          <Link to={`/`}>
            <StyledMenuAction>
              <FontAwesomeIcon icon={faHouse} />
              {` `}Home
            </StyledMenuAction>
          </Link>
        </StyledUserMenuAction>
        <StyledUserMenuAction>
        <Link to={`/trends`}>
          <StyledMenuAction>
            <FontAwesomeIcon icon={faFire} />
            {` `}Trends
          </StyledMenuAction>
          </Link>
        </StyledUserMenuAction>
        <StyledUserMenuAction>
          <StyledMenuAction>
            <FontAwesomeIcon icon={faBookmark} />
            {` `}Favorites
          </StyledMenuAction>
        </StyledUserMenuAction>
        <StyledUserMenuAction>
          <StyledMenuAction>
            <SearchMenuFilter onClick={() => setIsOpen(!isOpen)}>
              <FontAwesomeIcon icon={faGear} />
              {` `}Filters
            </SearchMenuFilter>
            <FiltersWrapper>
              <Filters
                isActive={isOpen}
                closeFilter={() => setIsOpen(!isOpen)}
              />
            </FiltersWrapper>
            <DarkBg
              style={{
                opacity: isOpen ? '0.9' : '0',
                zIndex: isOpen ? '5' : '-1',
              }}
            ></DarkBg>
          </StyledMenuAction>
        </StyledUserMenuAction>
      </StyledMenuUserList>
    </div>
  );
};


const SearchMenuFilter = styled.button`
  position: absolute;
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: var(--text-primary-color);
  font-size: 16px;
  font-weight: 500;
  padding: inherit;
`;

const FiltersWrapper = styled.div``;

const DarkBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #000;
  opacity: 0.5;
  z-index: -1;
  transition: 0.3s;
`;

const SearchResultWrapper = styled.div`
  margin-top: 50px;
  max-width: 1200px;
`;

const StyledMenuUserList = styled.ul`
  width: 15rem;
  list-style-type: none;
  margin: 0;
`;

const StyledMenuAction = styled.a`
  &:hover {
    color: #677bf9;
  }
`;
const StyledUserMenuAction = styled.li`
  color: var(---day-night-color);
  margin-bottom: 20px;
`;

const Logo = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
const TextLogo = styled.h1`
  color: white;
`;

const TextLogoNext = styled.h1`
  color: #677bf9;
`;
