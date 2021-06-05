import { Avatar } from '@material-ui/core'
import React from 'react'
import { UserPost, PostHeader, PostBody, PostFooter, PostUserName, PostTimeStamp, PostUsserText, PostPerformance, ItemPerformance, PostButton} from './styles'
import PublicIcon from '@material-ui/icons/Public';
import Moment from 'react-moment';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ShareIcon from '@material-ui/icons/Share';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {db} from '../../../config/firebase';
import { useStateValue } from '../../../store';


const Post = ({data, CurrentUserAvatar}) => {
  const {userData, text, timestamp, image, likes, comments, shared} = data.data;
  const [{currentUser}] = useStateValue();

  const hasLike = likes.includes(currentUser.uid)

  const doLike = () =>{
    let allLikes;
    //chequear si el usuario ya dio like,
    if(hasLike){
      allLikes = likes.filter( like => like !== currentUser.uid)
    }else{
      allLikes = [...likes, currentUser.uid]
    }

    db.collection('posts').doc(data.id).update({likes : allLikes})
  }

  return (
    <UserPost>
      <PostHeader>
        <Avatar src={userData.avatar}/>
        <div>
          <PostUserName>{userData.name}</PostUserName>
          <PostTimeStamp>
            <Moment fromNow>{timestamp}</Moment>
            <PublicIcon style={{fontSize:"16px"}}/>
          </PostTimeStamp>
        </div>
      </PostHeader>
      <PostBody>
        { text && (<PostUsserText>{text}</PostUsserText>) }
        { image && (<img src={image} alt={image} style={{width: '100%', maxWidth: '100%'}}/>)}
      </PostBody>
      <PostPerformance>
        <ItemPerformance>
          { likes.length > 0 && (
            <>
              <ThumbUpIcon style={{color:'#2e81f4'}}/>
              <span>{likes.length} likes</span>
            </>
          )
          }
        </ItemPerformance>
        <ItemPerformance>
          <span>{comments.length > 0 ? `${comments.length} comments`: null}</span>
          <span>{shared.length > 0 ? `${shared.length} shared`: null}</span>
        </ItemPerformance>
      </PostPerformance>
      <PostFooter>
        <PostButton onClick={doLike}>
          <ThumbUpIcon style={{color:`${hasLike ? '#2e81f4' : 'gray'}`}}/>
          <span style={{color:`${hasLike ? '#2e81f4' : 'gray'}`}}>Like</span>
        </PostButton>
        <PostButton>
          <ChatBubbleOutlineIcon style={{color:'gray'}}/>
          <span>Comment</span>
        </PostButton>
        <PostButton>
          <ShareIcon style={{color:'gray'}}/>
          <span>LikeShare</span>
        </PostButton>
        <PostButton>
          <Avatar src={CurrentUserAvatar} style={{width:"26px", height:"26px"}}/>
          <ArrowDropDownIcon  style={{color:'gray'}}/>
        </PostButton>
      </PostFooter>
    </UserPost>
  )
}

export default Post
