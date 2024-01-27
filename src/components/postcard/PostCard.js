import React from "react";
import { Button, Container, ContainerLikes } from "./PostCardStyle";
import { goToPost } from "../../routes/Coordinator";
import { FaArrowDown, FaArrowUp, FaComments } from "react-icons/fa";

const PostCard = ({ post, navigate, likePost, dislikePost }) => {
  const { id, content, comments, creator, dislikes, likes } = post;

  const handleclick = (id) => {
    goToPost(navigate, id);
  };

  return (
    <>
      <Container>
        <div>
          <p>Enviado por: {creator.name}</p>
          <h3>{content}</h3>
        </div>
        <ContainerLikes>
          <div className="likes">
            <Button onClick={() => likePost(id)}>
              <FaArrowUp className="arrow-up-icon" />
            </Button>
            <p>{likes - dislikes}</p>
            <Button onClick={() => dislikePost(id)}>
              <FaArrowDown className="arrow-down-icon" />
            </Button>
          </div>
          <div className="comments" onClick={() => handleclick(id)}>
            <Button>
              <FaComments className="comments-icon" />
            </Button>
            <p>{comments}</p>
          </div>
        </ContainerLikes>
      </Container>
    </>
  );
};

export default PostCard;
