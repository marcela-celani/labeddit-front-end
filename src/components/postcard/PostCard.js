import React from 'react'
import { Button, Container, ContainerLikes, Likes } from './PostCardStyle'
import arrowUp from '../../assets/arrow-up.svg'
import arrowDown from '../../assets/arrow-down.svg'
import comments from '../../assets/comments.svg'

const PostCard = () => {
  return (
    <>
      <Container>
        <div>
          <p>Enviado por: labaluno83</p>
          <h3>Porque a maioria dos desenvolvedores usam Linux? ou as empresas de tecnologia usam Linux ?</h3>
        </div>
        <ContainerLikes>
          <div className='likes'>
            <Button><img src={arrowUp} alt="" /></Button>
            <p>1.2k</p>
            <Button><img src={arrowDown} alt="" /></Button>
          </div>
          <div className='comments'>
            <Button><img src={comments} alt="" /></Button>
            <p>32</p>
          </div>
        </ContainerLikes>
      </Container>
    </>
  )
}

export default PostCard
