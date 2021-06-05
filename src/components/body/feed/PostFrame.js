import React, { useState } from 'react';
import { Avatar, IconButton } from '@material-ui/core'
import { NewPostContainer, BoxSearch, Input, UploadImage, TextArea, ButtonsContainer, Button, ButtonSubmit, ButtonText, ModalContainer, ModalHeader, ModalSection, ModalBodyUserData, TitleModal  } from './styles'
import SearchIcon from '@material-ui/icons/Search';
import SwitchVideoIcon from '@material-ui/icons/SwitchVideo';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import { useStateValue } from '../../../store';
import {db, storage} from '../../../config/firebase';
import FileUploader from "react-firebase-file-uploader";
import firebase from 'firebase'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CloseIcon from '@material-ui/icons/Close';

const PostFrame = () => {

  const [{currentUser}] = useStateValue();
  const string = currentUser.displayName.split(" ") || 'user';
  const [isImageURL , setImageURL] = useState('');
  const [isUploading , setUploading] = useState(false);
  const [isProgress , setProgress] = useState(0);
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [userThinking, setUserThinking] = useState({
    text: '',
  });

  const handleUserThinking = e =>{
    setUserThinking({
      ...userThinking,
      [e.target.name] : e.target.value,
    })
  };
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => {
    setModalOpen(false)
    setUserThinking({
      text: '',
    })
  };

  const handleUploadStart = () => {
    setProgress(1)
    setUploading(true)
  };
  const handleProgress = isProgress => setProgress({ isProgress });
  const handleUploadError = () => setUploading({ isUploading: false });
  const handleUploadSuccess = filename => {
    setProgress( 0 )
    setUploading(false)
    setImageURL(filename)
    storage
      .ref("posts")
      .child(filename)
      .getDownloadURL()
      .then(url => {
        console.log(url)
        setUserThinking({
          ...userThinking,
          image : url
        })
        handleOpen()
      });
  };
  const handleSubmit =  e =>{
    e.preventDefault();
    //valdiate
    // if(userThinking.text === '' && image) return;
    const newObject = {
      text : userThinking.text,
      image : userThinking.image || null,
      comments: [],
      likes:[],
      shared: [],
      timestamp: Date.now(),
      userData:{
        id : currentUser.uid,
        name : currentUser.displayName,
        avatar : currentUser.photoURL,
      }
    }
    //save post at realtime database and update posts
    db.collection('posts').add(newObject);
    handleClose();
  };


  return (
    <NewPostContainer>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}
        open={isModalOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isModalOpen}>
          <ModalContainer onChange={handleUserThinking}>
            <ModalHeader>
              <TitleModal>Create a post</TitleModal>
              <IconButton onClick={handleClose}><CloseIcon fontSize="large" style={{ color: 'gray' }}/></IconButton>
            </ModalHeader>
            <ModalSection>
              <ModalBodyUserData>
                <Avatar src={currentUser.photoURL}/>
                <h4>{currentUser.displayName}</h4>
              </ModalBodyUserData>
              <TextArea rows={'3'} value={userThinking.text} name="text" placeholder={`¿What are you thinking about, ${string[0]}?`}/>
              <img src={userThinking.image} alt={isImageURL} style={{width: '100%', maxWidth: '100%'}}/>
            </ModalSection>
            <ModalSection>
              <ButtonSubmit type="submit" onClick={handleSubmit}>
                Post
              </ButtonSubmit>
            </ModalSection>
          </ModalContainer>
        </Fade>
      </Modal>
      <div style={{ display : 'flex', borderBottom: '1px solid #f5f5f5', paddingBottom: '15px'}}>
        <Avatar src={currentUser.photoURL}/>
        <BoxSearch onSubmit={handleSubmit}>
          <SearchIcon/>
          <Input onChange={handleUserThinking} value={userThinking.text} name="text" placeholder={`¿What are you thinking about, ${string[0]}?`}/>
          <button type="submit" style={{ display :'none'}}>Hidden Submit</button>
        </BoxSearch>
      </div>
      <ButtonsContainer>

        <Button type="button">
          <SwitchVideoIcon fontSize="large" style={{ color: '#FA383E' }}/>
          <ButtonText>Live video</ButtonText>
        </Button>
        <UploadImage>
        <PhotoLibraryIcon fontSize="large" style={{ color: `#00A400` }}/>
          <ButtonText>Photo/video</ButtonText>
          <FileUploader
            accept="image/*"
            randomizeFilename
            storageRef={firebase.storage().ref("posts")}
            onUploadStart={handleUploadStart}
            onUploadError={handleUploadError}
            onUploadSuccess={handleUploadSuccess}
            onProgress={handleProgress}
            id="image"
            name="image"
            type="file"
            style={{ display :'none'}}
          />
        </UploadImage>
        <Button type="button">
          <SentimentVerySatisfiedIcon  fontSize="large" style={{ color: `#f7b51b` }}/>
          <ButtonText>Feeling/activity</ButtonText>
        </Button>
      </ButtonsContainer>
    </NewPostContainer>
  )
}

export default PostFrame
