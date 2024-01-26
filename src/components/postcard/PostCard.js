import React, { useContext } from 'react'
import { Button, Container, ContainerLikes, Likes } from './PostCardStyle'
import arrowUp from '../../assets/arrow-up.svg'
import arrowDown from '../../assets/arrow-down.svg'
import comments from '../../assets/comments.svg'
import { goToPost } from '../../routes/Coordinator'
import { useNavigate } from 'react-router-dom'
import { GlobalStateContext } from '../../contexts/GlobalContext'


const PostCard = ({post, navigate}) => {

  const {id, content, comments, creator, dislikes, likes} = post

  const handleclick = (id) => {
    goToPost(navigate, id)
  }

  return (
    <>
      <div onClick={()=> handleclick(id)}>
        <Container>
            <div>
              {/* <p>Enviado por: {creator.name}</p> */}
              <h3>{content}</h3>
            </div>
          <ContainerLikes>
            <div className='likes'>
              <Button><img src={arrowUp} alt="" /></Button>
              <p>{likes - dislikes}</p>
              <Button><img src={arrowDown} alt="" /></Button>
            </div>
            <div className='comments'>
              <Button><img src={comments} alt="" /></Button>
              <p>{comments}</p>
            </div>
          </ContainerLikes>
        </Container>
      </div>
    </>
  )
}

export default PostCard
