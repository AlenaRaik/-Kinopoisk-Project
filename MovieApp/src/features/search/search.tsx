
import { useAppDispatch, useAppSelector } from "#hooks";
import styled from "styled-components";
import { search, setSearchedText } from "./search.slice";


const Search: React.FC = () => {
    const searchCurrentPage = useAppSelector(
      (state) => state.search.searchCurrentPage
    );
  
    const dispatch = useAppDispatch();
    return  (
        <>
    <SearchWrapper>
      <SearchMenuWrapper>
        <SearchMenuInput
          type="input"
          placeholder="Search"
          onChange={(event) => {
            dispatch(setSearchedText(event.currentTarget.value));
            dispatch(
              search({
                search: event.currentTarget.value,
                page: searchCurrentPage,
              })
            );
          }}
        ></SearchMenuInput>
      </SearchMenuWrapper>
    </SearchWrapper>
        </>
    )
}
const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SearchMenuWrapper = styled.div`
  position: relative;
  width: 700px;
  @media screen and (max-width: 790px) {
    width: 600px;}
    @media screen and (max-width: 688px) {
    width: 500px;}
    @media screen and (max-width: 588px) {
    width: 400px;}
    @media screen and (max-width: 488px) {
    width: 300px;}
`;

const SearchMenuInput = styled.input`

   width: 90%;
   height: 2.5rem;
   background-color: var(--menu-primary-color);
   color: white;
   border: none;
   text-align: left;

  &::placeholder {
    color: var(--text-secondary-color);
    font-size: 16px;
    font-weight: 500;
  }
`;

export default Search