import { MainTemplate } from '#ui/templates/main-template';
import { Menu } from '#ui/header/menu';


import { useAppDispatch, useAppSelector, useAuth } from '#hooks';
import {
  getAllPosts
} from '#features/all-posts/all-posts.slice';
import Search from '#features/search/search';
import { FilmCard } from '#ui/cards/films-card';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MenuNav } from '#ui/header/menuNav';
import { setCards } from '#features/selected-posts/selected-posts.slice';
import { FilmCardWrapper } from '#ui/cards/big-card-wrapper';

export const Blog: React.FC = () => {
  const dispatch = useAppDispatch();
  const allPosts = useAppSelector((state) => state.allPosts.allPosts);

  if (allPosts.items.length === 0) {
    dispatch(getAllPosts({ page: 1 }));
  }

  return (
    <PageAllPostsWraper>
      <MenuNav />
      
    <MainTemplate
      header={<Menu />}
      title={<Search />}
      body={<FilmCardWrapper data={
        allPosts.items?.map((item, index) => (
        <Link to={`/posts/:${item.kinopoiskId}`} key={index}>
          <FilmCard
            key={index}
            id={item.kinopoiskId}
            title={item.nameRu}
            titleOriginal={item.nameOriginal}
            genre={item.genres.map((element) => ' ' + element.genre)}
            rating={item.ratingKinopoisk}
            year={item.year}
            country={item.countries.map((element) => ' ' + element.country)}
            img={<img src={item.posterUrl} alt="movie" />}
            onClick={() => {
            dispatch(setCards(item.kinopoiskId));
            }}
          ></FilmCard>
        </Link>
      ))} />}
    />
    </PageAllPostsWraper>
  );
};

const PageAllPostsWraper = styled.div`
background-color: var(--background-primary-color);
    display: flex;
`
