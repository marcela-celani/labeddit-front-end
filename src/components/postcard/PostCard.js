import React from 'react'
import { Button, Container, ContainerLikes } from './PostCardStyle'
import arrowUp from '../../assets/arrow-up.svg'
import arrowDown from '../../assets/arrow-down.svg'
import commentsImg from '../../assets/comments.svg'
import { goToPost } from '../../routes/Coordinator'


const PostCard = ({post, navigate, likePost, dislikePost}) => {

  const {id, content, comments, creator, dislikes, likes} = post


  const handleclick = (id) => {
    goToPost(navigate, id)
  }

  return (
    <>

        <Container>
            <div>
              <p>Enviado por: {creator.name}</p>
              <h3>{content}</h3>
            </div>
          <ContainerLikes>
            <div className='likes'>
              <Button onClick={()=> likePost(id)}><img src={arrowUp} alt="like" /></Button>
              <p>{likes - dislikes}</p>
              <Button onClick={()=> dislikePost(id)}><img src={arrowDown} alt="dislike" /></Button>
            </div>
            <div className='comments' onClick={()=> handleclick(id)}>
              <Button><img src={commentsImg} alt="" /></Button>
              <p>{comments}</p>
            </div>
          </ContainerLikes>
        </Container>

    </>
  )
}

export default PostCard
