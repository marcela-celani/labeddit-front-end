import React from 'react'
import { Button, Container, ContainerLikes, Likes } from './CommentCardStyle'
import arrowUp from '../../assets/arrow-up.svg'
import arrowDown from '../../assets/arrow-down.svg'

const CommentCard = ({comment}) => {

  const {id, content, creator, dislikes, likes} = comment

  return (
    <>
      <div>
        <Container>
            <div>
              <p>Enviado por: {creator.name}</p>
              <h3>{content}</h3>
            </div>
          <ContainerLikes>
            <div className='likes'>
              <Button><img src={arrowUp} alt="" /></Button>
              <p>{likes - dislikes }</p>
              <Button><img src={arrowDown} alt="" /></Button>
            </div>
          </ContainerLikes>
        </Container>
      </div>
    </>
  )
}

export default CommentCard
