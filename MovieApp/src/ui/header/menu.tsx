import styled from 'styled-components';
import { RefObject, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const nameUser: string = 'Artem Malkin';

const useOnClickOutside = (
  ref: RefObject<HTMLDivElement>,
  closeMenu: () => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (
        ref.current &&
        event.target &&
        ref.current.contains(event.target as Node)
      ) {
        return;
      }
      closeMenu();
    };

    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, closeMenu]);
};

function NameUser(props: { name: string }) {
  return <span>{props.name}</span>;
}
function InitUser(props: { name: string }) {
  return (
    <span>
      {props.name
        .split(' ', 2)
        .map((word) => word[0])
        .join('')
        .toUpperCase()}
    </span>
  );
}

type MenuProps = {};

export const Menu: React.FC<MenuProps> = (props: MenuProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const node = useRef<HTMLDivElement>(null);
  const close = () => setOpen(false);

  useOnClickOutside(node, () => setOpen(false));

  return (
    <div ref={node}>
      <Header>
        {/* <Burger>
          <Hamburger open={open} setOpen={setOpen} />
        </Burger> */}
        <Search>
          <SearchInpyt placeholder="Search..." />
        </Search>
        <User>
          <StyledButton>
            <InitUser name={nameUser} />
          </StyledButton>
          <StyledLink>
          <Link to={`/sign-in`}>
          <NameUser name={nameUser} />
          </Link>
          </StyledLink>
        </User>
      </Header>

      {/* <StyledMenu open={open}>
        <StyledMenuUserList>
          <StyledMenyUser>
            <StyledButton>
              <InitUser name={nameUser} />
            </StyledButton>
            <StyledLink onClick={() => close()}>
              <NameUser name={nameUser} />
            </StyledLink>
          </StyledMenyUser>
          <StyledUserMenuAction>
            <Link to={`/`}>
              <StyledMenuAction>Home</StyledMenuAction>
            </Link>
          </StyledUserMenuAction>
          <StyledUserMenuAction>
            <StyledMenuAction>Add post</StyledMenuAction>
          </StyledUserMenuAction>
        </StyledMenuUserList>
        <ButtonGroup>
          <ThemeSwitcher />
          <Link to={`/sign-in`}>
            <ButtonSignIn>Sign In</ButtonSignIn>
          </Link>
        </ButtonGroup>
      </StyledMenu> */}
    </div>
  );
};

const ButtonSignIn = styled.button`
  width: 100%;
  margin: auto;
  padding: 1rem 0;
  background-color: #a7a7a7;
`;

const ButtonGroup = styled.div``;

const StyledMenuAction = styled.a`
  &:hover {
    color: #677bf9;
  }
`;
const StyledUserMenuAction = styled.li`
  border-bottom: 1px solid var(--background-primary-color);
  padding: 1rem 0;
`;
const StyledMenuUserList = styled.ul`
  list-style-type: none;
  margin: auto;
  padding: 0;
  margin-bottom: calc(100vh - 330px);
`;
const StyledMenyUser = styled.li`
  background-color: #3a20ff;
  border: 1px solid var(--background-primary-color);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem 0;
  border-top: none;
`;

const StyledMenu = styled.nav<{ open: boolean }>`
  width: 25%;
  height: calc(100vh - 50px);
  position: absolute;
  background-color: var(--menu-primary-color);
  z-index: 1;
  display: ${({ open }) => (open ? ' ' : 'none')};
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
`;

const StyledLink = styled.a`
  padding: 0 2rem;
  font-size: 1rem;
  color: #c4e9ff;
  text-decoration: none;
`;

const StyledButton = styled.div`
  font-size: 1rem;
  background-color: #6872ff;
  width: 2.5rem;
  height: 2.5rem;
  text-align: center;
`;

const SearchInpyt = styled.input`
  width: 100%;
  height: 2.5rem;
  background-color: var(--menu-primary-color);
  color: white;
  border: none;
  text-align: left;
`;

const User = styled.div`
  border-left: 1px solid var(--background-primary-color);
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-right: 20px;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  border: 1px solid var(--background-primary-color);
  padding:20px 0;
`;

/* const Burger = styled.div`
  width: 2.5rem;
  margin: auto;
  background-color: #0000ff;
`; */

const Search = styled.div`
  width: 70%;
  display: flex;
  background-color: var(---menu-primary-color);
  align-items: center;
  justify-content: space-evenly;
  height: 50px;
  border: 1px solid var(--background-primary-color);
`;

const SearchLink = styled.a`
  cursor: pointer;
`;
