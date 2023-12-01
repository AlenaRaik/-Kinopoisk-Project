import { MainTemplate } from "#ui/templates/main-template";
import { Menu } from '#ui/header/menu';
import { cardArray } from "../arrayData";
import { BigCardSelect } from "#ui/cards/bid-card-select";
import { Link, Navigate, useParams } from "react-router-dom";

export const SelectedPost: React.FC = () => {
  const {postId} = useParams();
  const numericPostId = Number(postId);
  if(!Number.isFinite(numericPostId)) {
    return <Navigate to={'/'} />
  }
  const selectedPost = cardArray.find(element => element.id === numericPostId)
  if(!selectedPost) {
    return <Navigate to={'/'} />
  }
    return (
      <MainTemplate
        header={<Menu />}
        body={<BigCardSelect homeLink={<Link to={`/`}>Home</Link>} value={selectedPost}></BigCardSelect>}
      />
    );
  };