import styled from 'styled-components';
import { RefObject, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '#hooks';
import Search from '#features/search/search';

const nameUser: string = 'YES';
const nameUser2: string = 'NO';

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

function NameUser(props: { name: string | null}) {
  return <span>{props.name}</span>;
}
function InitUser(props: { name: string | null}) {
  return (
    <span>
      {props.name?.split(' ', 2)
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

  const{isAuth, nameEmail} = useAuth();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <div ref={node}>
      <Header>
        {/* <Burger>
          <Hamburger open={open} setOpen={setOpen} />
        </Burger> */}
        {/* <Search>
          <SearchInpyt placeholder="Search..." />
        </Search> */}
        <Search />
        <User>
          <StyledButton>
          {isAuth?(<InitUser name={nameEmail} />):(<InitUser name='' />)}
          </StyledButton>
          <StyledLink>
          <Link to={`/sign-in`}>
          {isAuth?(<NameUser name={nameEmail} />):(<NameUser name='Войти' />)}
          </Link>
          </StyledLink>
        </User>
      </Header>

    </div>
  );
};

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

// const SearchInpyt = styled.input`
//   width: 100%;
//   height: 2.5rem;
//   background-color: var(--menu-primary-color);
//   color: white;
//   border: none;
//   text-align: left;
// `;

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

// const Search = styled.div`
//   width: 70%;
//   display: flex;
//   background-color: var(---menu-primary-color);
//   align-items: center;
//   justify-content: space-evenly;
//   height: 50px;
//   border: 1px solid var(--background-primary-color);
// `;

const SearchLink = styled.a`
  cursor: pointer;
`;
