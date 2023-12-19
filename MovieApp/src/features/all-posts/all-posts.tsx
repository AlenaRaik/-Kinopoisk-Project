import { MainTemplate } from '#ui/templates/main-template';
import { Menu } from '#ui/header/menu';


import { useAppDispatch, useAppSelector } from '#hooks';
import {
  getAllPosts
} from '#features/all-posts/all-posts.slice';
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

  const searchedMovies = useAppSelector((state) => state.search.searchedPosts);
  const filterArr = useAppSelector((state) => state.filter.filtersFilm);

  return (
    <PageAllPostsWraper>
      <MenuNav />
      
    <MainTemplate
      header={<Menu />}
      // title={<Search />}
      body={
      searchedMovies.films.length===0?(
      <>   
      {filterArr.items.length > 0 ?
          (<FilmCardWrapper data={
            filterArr.items?.map((item, index) => (
          <Link to={`/posts/:${item.kinopoiskId}`} key={index}>
            <FilmCard
              key={index}
              id={item.kinopoiskId}
              title={item.nameRu}
              titleOriginal={item.nameEn}
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
        ))} />):(
          <FilmCardWrapper data={
        allPosts.items?.map((item, index) => (
        <Link to={`/posts/:${item.kinopoiskId}`} key={index}>
          <FilmCard
            key={index}
            id={item.kinopoiskId}
            title={item.nameRu}
            titleOriginal={item.nameOriginal}
            genre={item.genres?.map((element) => ' ' + element.genre)}
            rating={item.ratingKinopoisk}
            year={item.year}
            country={item.countries?.map((element) => ' ' + element.country)}
            img={<img src={item.posterUrl} alt="movie" />}
            onClick={() => {
            dispatch(setCards(item.kinopoiskId));
            }}
          ></FilmCard>
        </Link>
      ))} />
        )
            }
        </>
      ) : (
        <FilmCardWrapper data={
          searchedMovies.films?.map((item, index) => (
          <Link to={`/posts/:${item.filmId}`} key={index}>
            <FilmCard
              key={index}
              id={item.filmId}
              title={item.nameRu}
              titleOriginal={item.nameEn}
              genre={item.genres.map((element) => ' ' + element.genre)}
              rating={item.rating}
              year={item.year}
              country={item.countries.map((element) => ' ' + element.country)}
              img={<img src={item.posterUrl} alt="movie" />}
              onClick={() => {
              dispatch(setCards(item.filmId));
              }}
            ></FilmCard>
          </Link>
        ))} />
      )
    }
    />
    
    </PageAllPostsWraper>
  );
};

const PageAllPostsWraper = styled.div`
background-color: var(--background-primary-color);
    display: flex;
`
