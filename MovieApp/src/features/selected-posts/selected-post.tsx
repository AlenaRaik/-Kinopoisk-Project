import { MainTemplate } from '#ui/templates/main-template';
import { Menu } from '#ui/header/menu';
import { BigCardSelect } from '#ui/cards/bid-card-select';
import { Link, Navigate, useParams } from 'react-router-dom';
import { MenuNav } from '#ui/header/menuNav';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '#hooks';
import { FilmCard } from '#ui/cards/films-card';
import { setCards } from './selected-posts.slice';
import { getRecommendation } from '#features/recomend/recomend.slice';

export const SelectedPost: React.FC = () => {
  const dispatch = useAppDispatch();
  const selectedPost = useAppSelector(
    (state) => state.selectedMovie.setCards
  );
  const recommendations = useAppSelector(
    (state) => state.recommendation.recommendation
  );
  if (recommendations.items.length === 0) {
    dispatch(getRecommendation({ page: 1 }));
  }
   const allPostsRecomendSelected = Array.from(recommendations.items.slice(0,4));
  console.log(recommendations);

  if (!selectedPost) {
    return <Navigate to={'/'} />;
  }
  console.log(selectedPost)
  return (
    <PageAllPostsWraper>
      <MenuNav />
      <MainTemplate
        header={<Menu />}
        body={
          <BigCardSelect
          img={<img src={selectedPost.posterUrl} alt="movie" />}
          genres={selectedPost.genres?.map(a=>a.genre).join('-')}
          name={selectedPost.nameRu}
          year={selectedPost.year}
          description={selectedPost.description}
          raitingKinipoisk={selectedPost.ratingKinopoisk}
          filmLenght={selectedPost.filmLength}
          countries={selectedPost.countries?.map(a=>a.country).join(', ')}
          nameOriginal={selectedPost.nameOriginal}
          slogan={selectedPost.slogan}
          recommendationMovie={allPostsRecomendSelected.map(
            (item, index) => (
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
            )
          )}
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
