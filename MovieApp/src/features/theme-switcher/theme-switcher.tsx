import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

export const ThemeSwitcher: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.querySelector('.App')?.classList.toggle('light', isDark);
  }, [isDark]);

  return (
    <DivThemeSwitcher>
      {/* Текущая тема: {isDark ? 'Темная' : 'Светлая'} */}
      <FormInput
        type="checkbox"
        checked={isDark}
        onChange={() => setIsDark(!isDark)}
        id="chk1"
        disabled={!isDark}
        
      />
      <FormLabel htmlFor="chk1" id="chkl1">
      <FontAwesomeIcon icon={faSun} />
      </FormLabel>
      <FormInput
        type="checkbox"
        checked={isDark}
        onChange={() => setIsDark(!isDark)}
        id="chk2"
        disabled={isDark}
      />
      <FormLabel htmlFor="chk2" id="chkl2">
      <FontAwesomeIcon icon={faMoon} />
      </FormLabel>
    </DivThemeSwitcher>
  );
};

const DivThemeSwitcher = styled.div`
  display: flex;
`;

const FormInput = styled.input`
  display: none;
`;

const FormLabel = styled.label`
  width: 50%;
  cursor: pointer;
  padding: 1rem 0;
  border: 1px solid var(--background-primary-color);
  background-color: var(--menu-button-color);
  user-select: none;
  color: var(--text-primary-color)
`;
