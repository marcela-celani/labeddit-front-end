import React from "react";
import { Button, Container, ContainerLikes } from "./CommentCardStyle";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const CommentCard = ({ comment, likeComment, dislikeComment }) => {
  const { id, post_id, content, creator, dislikes, likes } = comment;

  return (
    <>
      <div>
        <Container>
          <div>
            <p>Enviado por: {creator.name}</p>
            <h3>{content}</h3>
          </div>
          <ContainerLikes>
            <div className="likes">
              <Button onClick={() => likeComment(post_id, id)}>
                <FaArrowUp className="arrow-up-icon" />
              </Button>
              <p>{likes - dislikes}</p>
              <Button onClick={() => dislikeComment(post_id, id)}>
                {" "}
                <FaArrowDown className="arrow-down-icon" />
              </Button>
            </div>
          </ContainerLikes>
        </Container>
      </div>
    </>
  );
};

export default CommentCard;
