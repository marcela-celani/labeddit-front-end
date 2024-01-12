import React from 'react'
import { Button, Container, ContainerLikes, Likes } from './PostCardStyle'
import arrowUp from '../../assets/arrow-up.svg'
import arrowDown from '../../assets/arrow-down.svg'
import comments from '../../assets/comments.svg'
import { goToPost } from '../../routes/Coordinator'
import { useNavigate } from 'react-router-dom'


const PostCard = ({posts, id}) => {

  const navigate = useNavigate();

  return (
    <>
      <div onClick={()=> goToPost(navigate, id)}>
        <Container>
            <div>
              <p>Enviado por: {posts.creator_name}</p>
              <h3>{posts.content}</h3>
            </div>
          <ContainerLikes>
            <div className='likes'>
              <Button><img src={arrowUp} alt="" /></Button>
              <p>{posts.likes}</p>
              <Button><img src={arrowDown} alt="" /></Button>
            </div>
            <div className='comments'>
              <Button><img src={comments} alt="" /></Button>
              <p>{posts.comments}</p>
            </div>
          </ContainerLikes>
        </Container>
      </div>
    </>
  )
}

export default PostCard
