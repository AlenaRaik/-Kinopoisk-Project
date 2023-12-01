import { useAppDispatch, useAppSelector } from '#hooks';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { dislike, like } from './like-dislike.slice';

type Props = {
  postId: number;
};

export const LikeDislike: React.FC<Props> = ({ postId }) => {
  const dispatch = useAppDispatch();
  const rating = useAppSelector((state) => state.likeDislike[postId]);
  const activeLike = rating.userChoice === 'like';
  const activeDislike = rating.userChoice === 'dislike';
  return (
    <>
      <WrapperLike>
        <ButtonLike
          onClick={() => {
            dispatch(like({ postId }));
          }}
        >
          {activeLike ? (
            <FontAwesomeIcon icon={faThumbsUp} color="black" />
          ) : (
            <FontAwesomeIcon icon={faThumbsUp} />
          )}
        </ButtonLike>
        <p>{rating.likes}</p>
        <ButtonDislike onClick={() => {
            dispatch(dislike({ postId }));
          }}>
          {activeDislike ? (
            <FontAwesomeIcon icon={faThumbsDown} color="black" />
          ) : (
            <FontAwesomeIcon icon={faThumbsDown} />
          )}
        </ButtonDislike>
        <p>{rating.dislikes}</p>
      </WrapperLike>
    </>
  );
};

const WrapperLike = styled.div`
  display: flex;
  align-items: center;
`;
const ButtonLike = styled.button`
  width: 2rem;
  height: 2rem;
  color: #b5b5b7;
  background-color: #daddea;
  margin-right: 2px;
`;
const ButtonDislike = styled.button`
  width: 2rem;
  height: 2rem;
  color: #b5b5b7;
  background-color: #daddea;
`;
