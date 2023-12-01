import { CardProps } from '#ui/cards/card-props';
import styled from 'styled-components';
import { cardArray } from '../../arrayData';
import { SearchResultCard } from '#ui/cards/search-result-card';
import { LikeDislike } from '#features/like-dislike/like-dislike';

type ListSearchResultsProps = {
  value: CardProps[];
};
export const ListSearchResults: React.FC<ListSearchResultsProps> = (
  props: ListSearchResultsProps
) => {
  return (
    <div>
      <Container>
        {cardArray.map((element, id) => (
          <SearchResultCard key={id} value={element} LikeDislike={LikeDislike}></SearchResultCard>
        ))}
      </Container>
    </div>
  );
};

const Container = styled.div``;
