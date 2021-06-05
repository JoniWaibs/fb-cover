import React from 'react';
import { FeedContainer } from './styles';
import StoryReel from './StoryReel';
import PostFrame from './PostFrame';
import MainContent from './MainContent';


const Feed = () => {
  return (
    <FeedContainer>
      {/** Feeds */}
      <StoryReel/>
      {/** Post Frame */}
      <PostFrame/>
      {/** Main content */}
      <MainContent/>
    </FeedContainer>
  )
}

export default Feed
