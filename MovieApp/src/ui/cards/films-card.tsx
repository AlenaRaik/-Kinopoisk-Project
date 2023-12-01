import styled from 'styled-components';
import { useAppSelector } from '../../hooks';
import favAcitveIco from './img/favAcitveIco.svg';

type Props = {
  id: number;
  title: React.ReactNode;
  titleOriginal: React.ReactNode;
  rating: number;
  genre: React.ReactNode;
  img: React.ReactNode;
  year: React.ReactNode;
  country: React.ReactNode;
  onClick: () => void;
};

export const FilmCard: React.FC<Props> = ({
  id,
  title,
  titleOriginal,
  genre,
  rating,
  img,
  year,
  country,
  onClick,
}) => {
  return (
    <FilmCardWrapper id={`${id}`} onClick={(event) => onClick()}>
      <FilmCardImgWrapper>
        <FilmCardImg>{img}</FilmCardImg>
      </FilmCardImgWrapper>
      <FilmCardInfoWrapper>
        <FilmCardTitle>
          <FilmCardTitleNameRus>{title}</FilmCardTitleNameRus>
          <FilmCardNameOriginal>{titleOriginal}</FilmCardNameOriginal>
          <FilmCardRating>Рейтинг: {rating}</FilmCardRating>
          <FilmCardTextCountry>{year} {country}</FilmCardTextCountry>
          <FilmCardGenre>{genre}</FilmCardGenre>
        </FilmCardTitle>
      </FilmCardInfoWrapper>
    </FilmCardWrapper>
  );
};

const FilmCardWrapper = styled.div`
  width: 205px;
  padding: 0 30px 0 0;
`;

const FilmCardImgWrapper = styled.div`
  position: relative;
`;

const FilmCardImg = styled.div`
  width: 205px;
  height: 307px;
  cursor: pointer;

  & img {
    width: 100%;
    height: 100%;
  }
`;


const FilmCardInfoWrapper = styled.div``;

const FilmCardRating = styled.div`
  color: var(--text-primary-color);
  font-size: 13px;
  cursor: pointer;
  margin: 0;

`;

const FilmCardTitle = styled.div``;

const FilmCardTitleNameRus = styled.p`
  color: var(--text-primary-color);
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;

`;

const FilmCardNameOriginal = styled.p`
  color: var(--text-primary-color);
  font-weight: 700;
  font-size: 15px;
  margin: 0;

`;

const FilmCardTextCountry = styled.p`
  color: var(--text-primary-color);
  font-size: 13px;
  cursor: pointer;
  margin: 0;

`;

const FilmCardGenre = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-size: 13px;
  margin: 0;
`;
