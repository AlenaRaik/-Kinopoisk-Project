
import { faBarcode, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from 'styled-components';

type Props = {
  description: React.ReactNode;
  img: React.ReactNode;
  genres:React.ReactNode;
  name:React.ReactNode;
  year:React.ReactNode;
  raitingKinipoisk:React.ReactNode;
  filmLenght:React.ReactNode;
  countries:React.ReactNode
  recommendationMovie: React.ReactNode;
  nameOriginal:React.ReactNode;
  slogan: React.ReactNode;
};

export const BigCardSelect: React.FC<Props> = ({ description, img, genres, name, year, raitingKinipoisk, filmLenght, countries, nameOriginal, recommendationMovie, slogan }) => {
  return (
    <div>
      <Card>

            <ImageCard>{img}</ImageCard>
            <DataWrapper>
            <GenresName>{genres}</GenresName>
            <FilmName>{name}:{year}</FilmName>
            <RaitingWrapper>
              <Raiting>
                <TextRaiting>{raitingKinipoisk}</TextRaiting>
              </Raiting>
              <RaitingImdb>
              <FontAwesomeIcon icon={faBarcode} />
              <TextRaitingImdb>{raitingKinipoisk}</TextRaitingImdb>
              </RaitingImdb>
              <FilmLenght>
                <TextLenght>{filmLenght} min</TextLenght>
              </FilmLenght>
            </RaitingWrapper>
            <HeaderDate>{description}</HeaderDate>
            <InfoFilmTable>
              <InfoFilmTableTr>
                <InfoFilmTableTdName>Year</InfoFilmTableTdName>
                <InfoFilmTableTdValue>{year}</InfoFilmTableTdValue>
              </InfoFilmTableTr>
              <InfoFilmTableTr>
                <InfoFilmTableTdName>Released</InfoFilmTableTdName>
                <InfoFilmTableTdValue>{year}</InfoFilmTableTdValue>
              </InfoFilmTableTr>
              <InfoFilmTableTr>
                <InfoFilmTableTdName>Country</InfoFilmTableTdName>
                <InfoFilmTableTdValue>{countries}</InfoFilmTableTdValue>
              </InfoFilmTableTr>
              <InfoFilmTableTr>
                <InfoFilmTableTdName>Country</InfoFilmTableTdName>
                <InfoFilmTableTdValue>{nameOriginal}</InfoFilmTableTdValue>
              </InfoFilmTableTr>
              <InfoFilmTableTr>
                <InfoFilmTableTdName>Slogan</InfoFilmTableTdName>
                <InfoFilmTableTdValue>{slogan}</InfoFilmTableTdValue>
              </InfoFilmTableTr>
            </InfoFilmTable>
            <RecommendationsString>Recommendation</RecommendationsString>
            <RecommendationsContent>
              {recommendationMovie}
            </RecommendationsContent>
            </DataWrapper>

      </Card>
    </div>
  );
};

const RecommendationsString = styled.p`
font-size: 18px;
`
const RecommendationsContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
  @media screen and (max-width: 630px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`
const InfoFilmTable = styled.table`
font-size: 14px;
`
const InfoFilmTableTr = styled.tr`
height: 30px;
`
const InfoFilmTableTdName = styled.td`
width: 200px;
`
const InfoFilmTableTdValue = styled.td`
`

const TextLenght = styled.p`
margin: 0;
`
const TextRaitingImdb = styled.div`

`
const RaitingImdb = styled.div`
  display: flex;
  align-items:center;
  justify-content: space-between;
  background-color: #4c4d51;
  width: 50px;
  height: 22px;
  margin-right: 10px;
`
const FilmLenght = styled.div`
  display: flex;
  align-items:center;
  justify-content: space-between;
  background-color: #4c4d51;
  width: 65px;
  height: 22px;
  margin-right: 10px;
`
const TextRaiting = styled.p`
margin: 0;
color: wheat;
`

const Raiting = styled.div`
  background-color: green;
  width: 22px;
  height: 22px;
  margin-right: 10px;
`
const RaitingWrapper = styled.div`
  display: flex;
`
const Card = styled.div`
  display: flex;
`;
const ImageCard = styled.div`
  width: 300px;
  height: 300px;
  img {
    height: 100%;
    object-fit: contain;
  }
`;


const GenresName = styled.p`
font-size: 12px;
margin:0;
`

const HeaderDate = styled.p`
  font-size: 14px;
`;
const FilmName = styled.p`
  font-size: 24px;
  font-weight: 500;
`;
const DataWrapper = styled.div`
color: white;
width: 70%;`