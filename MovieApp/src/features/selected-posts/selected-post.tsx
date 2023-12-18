import { MainTemplate } from '#ui/templates/main-template';
import { Menu } from '#ui/header/menu';
import { cardArray } from '../../arrayData';
import { BigCardSelect } from '#ui/cards/bid-card-select';
import { Link, Navigate, useParams } from 'react-router-dom';
import { MenuNav } from '#ui/header/menuNav';
import styled from 'styled-components';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '#hooks';

export const SelectedPost: React.FC = () => {
  const selectedPost = useAppSelector(
    (state) => state.selectedMovie.setCards
  );
  const dispatch = useAppDispatch();
  if (!selectedPost) {
    return <Navigate to={'/'} />;
  }
  console.log(selectedPost);
  return (
    <PageAllPostsWraper>
      <MenuNav />
      <MainTemplate
        header={<Menu />}
        body={
          <BigCardSelect
          img={<img src={selectedPost.poster?.url} alt="movie" />}
          description={selectedPost.description}
          genres={selectedPost.genres.map(a=>a.name).join('-')}
          name={selectedPost.name}
          year={selectedPost.year}
          ></BigCardSelect>
        }
      />
    </PageAllPostsWraper>
  );
};

const PageAllPostsWraper = styled.div`
  background-color: var(--background-primary-color);
  display: flex;
`;
