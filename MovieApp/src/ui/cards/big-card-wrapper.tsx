import styled from "styled-components";

type Props = {
    data: React.ReactNode;
  };
  
  export const FilmCardWrapper: React.FC<Props> = ({
    data
  }) => {
    return (<BigCardWrapper>{data}</BigCardWrapper>);
  };
  
  const BigCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  `;
  