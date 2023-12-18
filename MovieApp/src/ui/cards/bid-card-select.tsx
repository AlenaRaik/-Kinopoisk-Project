
import { styled } from 'styled-components';

type Props = {
  description: React.ReactNode;
  img: React.ReactNode;
  genres:React.ReactNode;
  name:React.ReactNode;
  year:React.ReactNode;
};

export const BigCardSelect: React.FC<Props> = ({ description, img, genres, name, year }) => {
  return (
    <div>
      <Card>

            <ImageCard>{img}</ImageCard>
            <DataWrapper>
            <GenresName>{genres}</GenresName>
            <FilmName>{name}:{year}</FilmName>
            <HeaderDate>{description}</HeaderDate>
            </DataWrapper>

      </Card>
    </div>
  );
};

const Card = styled.div`
  display: flex;
`;
const ImageCard = styled.div`
  width: 300px;
  height: 300px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;


const GenresName = styled.p``
const ButtonBookmark = styled.button`
  width: 150px;
  height: 2rem;
  color: #b5b5b7;
  background-color: #daddea;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  &:hover {
    color: #333333;
  }
`;

const HeaderDate = styled.p`
  
`;
const FilmName = styled.p`
  
`;
const DataWrapper = styled.div`
color: white;
width: 90%;`