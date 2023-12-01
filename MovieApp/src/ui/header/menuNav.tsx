import { faBookmark, faFire, faGear, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";

type MenuNavProps = {};

export const MenuNav: React.FC<MenuNavProps> = (props: MenuNavProps) => {


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
                {` `}Home</StyledMenuAction>
            </Link>
          </StyledUserMenuAction>
          <StyledUserMenuAction>
            <StyledMenuAction>
            <FontAwesomeIcon icon={faFire} />
            {` `}Trends</StyledMenuAction>
          </StyledUserMenuAction>
          <StyledUserMenuAction>
            <StyledMenuAction>
            <FontAwesomeIcon icon={faBookmark} />
            {` `}Favorites</StyledMenuAction>
          </StyledUserMenuAction>
          <StyledUserMenuAction>
            <StyledMenuAction>
            <FontAwesomeIcon icon={faGear} />
            {` `}Setting</StyledMenuAction>
          </StyledUserMenuAction>
    </StyledMenuUserList>
    </div>
  );
};

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
`
const TextLogo = styled.h1`
  color: white;
`

const TextLogoNext = styled.h1`
  color: #677bf9;
`