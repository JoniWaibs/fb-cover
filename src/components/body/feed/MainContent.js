import React, {useEffect, useState} from "react";
import { MainContainer } from "./styles";
import Post from "./Post";
import { useStateValue } from "../../../store";
import { db } from '../../../config/firebase'


const MainContent = () => {
  const [{currentUser}] = useStateValue();
  const CurrentUserAvatar = currentUser.photoURL;
  const [posts, setPosts ] = useState([]);
  //get posts database and map
  useEffect(() => {
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot =>{
      let posts = snapshot.docs.map( doc => {
        return {id : doc.id, data : doc.data()}
      });
      setPosts(posts);
    });
    //eslint-disable-next-line
  }, []);

  // const postsHard = [
  //   {
  //     userAvatar:
  //       "https://d25rq8gxcq0p71.cloudfront.net/dictionary-images/324/419665d2-74b7-49d4-b3c8-3aea253f966f.jpg",
  //     userName: "Gabi Belli",
  //     timeStamp: "2021-03-19",
  //     userText:
  //       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  //     image: null,
  //     likes: 120,
  //     comments: 234,
  //     shared: null,
  //   },
  // ];

  return (
    <MainContainer>
      {
        posts.map( post => <Post data={post} CurrentUserAvatar={CurrentUserAvatar} key={post.id}/> )
      }
    </MainContainer>
  );
};

export default MainContent;
