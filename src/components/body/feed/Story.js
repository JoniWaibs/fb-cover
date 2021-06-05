import React from 'react'
import { Avatar } from '@material-ui/core'
import { StoryUser, StoryUserName } from './styles'


const Story = ({title, userAvatar, coverImage}) => {
  return (
    <StoryUser coverImage={coverImage}>
      {/* <StoryCointainer style={{ backgroundImage: `url(${coverImage})`}}> */}
      <Avatar src={userAvatar} style={{ position: 'absolute', top: '12px', left: '12px', border: '4px solid #2e81f4' }}/>
      <StoryUserName>{title}</StoryUserName>
    </StoryUser>
  )
}

export default Story
