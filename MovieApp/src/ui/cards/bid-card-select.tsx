import {
  faBookmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from 'styled-components';
import { CardProps } from './card-props';
import { LikeDislike } from '#features/like-dislike/like-dislike';

export type BigCardSelectProps = {
  value: CardProps;
  homeLink: React.ReactNode;
};

export const BigCardSelect: React.FC<BigCardSelectProps> = (
  props: BigCardSelectProps
) => {
  return (
    <div>
      <Card>
        <CardData>
          <TextData>
          {props.homeLink}
            <HeaderDate>{props.value.date}</HeaderDate>
            <Header>{props.value.title}</Header>
            <ImageCard>
              <img src={props.value.image} alt="#"></img>
            </ImageCard>
            <p>{props.value.text}</p>
          </TextData>
        </CardData>
        <CommandString>
        <LikeDislike postId={props.value.id}></LikeDislike>
          <WrapperOther>
            <ButtonBookmark>
              <FontAwesomeIcon icon={faBookmark} />
              <ButtonText>Add to favorites</ButtonText>
            </ButtonBookmark>
          </WrapperOther>
        </CommandString>
      </Card>
    </div>
  );
};

const Header = styled.h2`
  color: var(--text-primary-color);;
`;

const WrapperOther = styled.div``;
const Card = styled.div`
  width: 70%;
  margin: auto;
`;
const CommandString = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ImageCard = styled.div`
  width: 400px;
  height: 400px;
  margin: auto;
  margin-bottom: 20px;
`;
const CardData = styled.div``;

const TextData = styled.div`
  text-align: left;
  color: #989aa8;
  padding: 1% 0;
`;
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

const ButtonText = styled.p``;

const HeaderDate = styled.p`
  color: gray;
`;