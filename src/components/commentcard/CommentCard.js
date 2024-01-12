import React from 'react'
import { Button, Container, ContainerLikes, Likes } from './CommentCardStyle'
import arrowUp from '../../assets/arrow-up.svg'
import arrowDown from '../../assets/arrow-down.svg'
import comments from '../../assets/comments.svg'

const CommentCard = ({comments}) => {

  return (
    <>
      <div>
        <Container>
            <div>
              <p>Enviado por: {comments.creator_name}</p>
              <h3>{comments.content}</h3>
            </div>
          <ContainerLikes>
            <div className='likes'>
              <Button><img src={arrowUp} alt="" /></Button>
              <p>{comments.likes}</p>
              <Button><img src={arrowDown} alt="" /></Button>
            </div>
          </ContainerLikes>
        </Container>
      </div>
    </>
  )
}

export default CommentCard
