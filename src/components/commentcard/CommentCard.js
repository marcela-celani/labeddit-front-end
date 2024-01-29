import React from 'react'
import { Button, Container, ContainerLikes } from './CommentCardStyle'
import arrowUp from '../../assets/arrow-up.svg'
import arrowDown from '../../assets/arrow-down.svg'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'

const CommentCard = ({comment}) => {

  const {content, creator, dislikes, likes} = comment

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
              <Button><FaArrowUp className="arrow-up-icon" /></Button>
              <p>{likes - dislikes }</p>
              <Button> <FaArrowDown className="arrow-down-icon" /></Button>
            </div>
          </ContainerLikes>
        </Container>
      </div>
    </>
  )
}

export default CommentCard
