import { useAppDispatch } from "#hooks";
import { useState } from "react";
import { Input } from '../../ui/input/input';
import styled from "styled-components";
import { getFilters, resetFilter, setFilterIsActive } from "./filter.slice";

type Props = {
    isActive: boolean;
    closeFilter: () => void;
  };
  
  export const Filters: React.FC<Props> = ({ isActive, closeFilter }) => {
  
    const [order, setOrder] = useState('RATING');
    const [keyword, setKeyword] = useState('');
    const [ratingFrom, setRatingFrom] = useState(0);
    const [ratingTo, setRatingTo] = useState(10);
    const [yearFrom, setYearFrom] = useState(1000);
    const [yearTo, setYearTo] = useState(3000);
  
    const dispatch = useAppDispatch();
  
    const clearResults = () => {};
  
    return (
      <FiltersWrapper
        style={{
          visibility: isActive ? 'visible' : 'hidden',
          opacity: isActive ? '1' : '0',
          left: '15rem',
          top: '10px'
        }}
      >
        <FiltersContent>
          <FiltersTitleWrapper>
            <FiltersTitle>Filters</FiltersTitle>
          </FiltersTitleWrapper>
          <TypeOfFiltersWrapper>
            <SortByText>Sort by</SortByText>
            <SortWrapper>
              <RatingWrapper>
                <RatingBtn
                  id="radioRating"
                  type="radio"
                  value="RATING"
                  onChange={({ currentTarget }) => setOrder(currentTarget.value)}
                  checked={order === 'RATING'}
                />
                <label
                  htmlFor="radioRating"
                  style={{
                    backgroundColor:
                      order === 'RATING'
                        ? 'var(--menu-primary-color)'
                        : 'var(--button-showMore-color)',
                  }}
                >
                  Rating
                </label>
              </RatingWrapper>
              <YearWrapper>
                <YearBtn
                  id="radioYear"
                  type="radio"
                  value="YEAR"
                  checked={order === 'YEAR'}
                  onChange={({ currentTarget }) => setOrder(currentTarget.value)}
                />
                <label
                  htmlFor="radioYear"
                  style={{
                    backgroundColor:
                      order === 'YEAR'
                        ? 'var(--menu-primary-color)'
                        : 'var(--button-showMore-color)',
                  }}
                >
                  Year
                </label>
              </YearWrapper>
            </SortWrapper>
          </TypeOfFiltersWrapper>
          <ShortWrapper>
            <ShortName>Full or short movie name</ShortName>
            <Input
              className="yourText"
              labelText=""
              placeholder="Your text"
              type="text"
              onChange={({ currentTarget }) => setKeyword(currentTarget.value)}
            />
          </ShortWrapper>

          <FiltersByYearWrapper>
            <FiltersByYearTitle>Years</FiltersByYearTitle>
            <FiltersByYearInputWrapper>
              <Input
                labelText=""
                placeholder="From"
                onChange={({ currentTarget }) =>
                  setYearFrom(+currentTarget.value)
                }
              />
              <Input
                labelText=""
                placeholder="To"
                onChange={({ currentTarget }) => setYearTo(+currentTarget.value)}
              />
            </FiltersByYearInputWrapper>
          </FiltersByYearWrapper>
          <FiltersByRatingWrapper>
            <FiltersByRatingTitle>Rating</FiltersByRatingTitle>
            <FiltersByRatingInputWrapper>
              <Input
                labelText=""
                placeholder="From"
                onChange={({ currentTarget }) =>
                  setRatingFrom(+currentTarget.value)
                }
              />
              <Input
                labelText=""
                placeholder="To"
                onChange={({ currentTarget }) =>
                  setRatingTo(+currentTarget.value)
                }
              />
            </FiltersByRatingInputWrapper>
          </FiltersByRatingWrapper>
          <ClearShowWrapper>
            <ClearFilter
              onClick={() => {
                closeFilter();
                dispatch(resetFilter());
                dispatch(setFilterIsActive(false));
                clearResults();
              }}
            >
              Clear filter
            </ClearFilter>
            <ShowResults
              onClick={() => {
                dispatch(
                  getFilters({
                    order: order,
                    keyword: keyword,
                    ratingFrom: ratingFrom,
                    ratingTo: ratingTo,
                    yearFrom: yearFrom,
                    yearTo: yearTo,
                    page: 1,
                  })
                );
                closeFilter();
                dispatch(resetFilter());
                dispatch(setFilterIsActive(true));
              }}
            >
              Show results
            </ShowResults>
          </ClearShowWrapper>
        </FiltersContent>
      </FiltersWrapper>
    );
  };
  
  const FiltersWrapper = styled.div`
    width: 500px;
    position: absolute;
    opacity: 0;
    visibility: hidden;
    z-index: 10;
  `;
  
  const FiltersContent = styled.div`
    width: 400px;
    margin: auto;
  `;
  
  const FiltersTitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;
  `;
  
  const FiltersTitle = styled.p`
    font-size: 24px;
    font-weight: 600;
    color: var(--text-primary-color);
  `;
  
  const TypeOfFiltersWrapper = styled.div``;
  const SortByText = styled.p`
    font-weight: 600;
    color: var(--text-primary-color);
  `;
  
  const SortWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  `;
  
  const RatingWrapper = styled.div`
    input {
      display: none;
    }
  
    label {
      display: inline-block;
      cursor: pointer;
      user-select: none;
      width: 150px;
      height: 100%;
      background-color: var(--button-showMore-color);
      font-size: 16px;
      font-weight: 500;
      color: var(--text-primary-color);
      line-height: 55px;
      text-align: center;
    }
  
  `;
  
  const RatingBtn = styled.input``;
  
  const YearWrapper = styled.div`
    input {
      display: none;
    }
  
    label {
      display: inline-block;
      cursor: pointer;
      user-select: none;
      width: 150px;
      height: 100%;
      background-color: var(--button-showMore-color);
      font-size: 16px;
      font-weight: 500;
      color: var(--text-primary-color);
      line-height: 55px;
      text-align: center;
    }
  
    input:checked + label {
      background-color: var(--filter-background-color);
    }
  `;
  
  const YearBtn = styled.input``;
  const ShortWrapper = styled.div`
    input {
      width: 400px;
      line-height: 50px;
    }
  `;
  
  const ShortName = styled.p`
    font-weight: 600;
    color: var(--text-primary-color);
  `;
  
  const FiltersByYearWrapper = styled.div``;
  
  const FiltersByYearTitle = styled.p`
    font-weight: 600;
    color: var(--text-primary-color);
    margin: 0;
  `;
  
  const FiltersByYearInputWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  
    input {
      display: block;
      width: 60%;
      padding-right: 60px;
    }
  `;
  
  const FiltersByRatingWrapper = styled.div`
    margin-bottom: 50px;
  `;
  
  const FiltersByRatingTitle = styled.p`
    font-weight: 600;
    color: var(--text-primary-color);
    margin: 0;
  `;
  
  const FiltersByRatingInputWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  
    input {
      display: block;
      width: 60%;
      padding-right: 60px;
    }
  `;
  
  const ClearShowWrapper = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
  `;
  
  const ClearFilter = styled.button`
    width: 200px;
    height: 55px;
    background-color: var(--button-showMore-color);
    border: 2px solid var(--input-border-color);
    font-size: 16px;
    font-weight: 600;
    color: var(--text-primary-color);
  
    &:hover {
      color: var(--background-primary-color);
      background-color: var(--day-night-color);
    }
  `;
  
  const ShowResults = styled.button`
    width: 200px;
    height: 55px;
    background-color: var(--button-bg-primary-color);
    border: 2px solid var(--input-border-color);
    font-size: 16px;
    font-weight: 600;
    color: var(--text-primary-color);
  
    &:hover {
      color: var(--background-primary-color);
      background-color: var(--day-night-color);
    }
  `;
  