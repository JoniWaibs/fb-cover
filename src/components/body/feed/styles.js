import styled from "styled-components";

export const FeedContainer = styled.main`
  flex: 0.50;
  padding:30px 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap:50px;
  width:100%;
`;
export const StoriesContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap:10px;
`;
export const StoryUser = styled.div`
  background-image: url(${(props)=>props.coverImage});
  position: relative;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 120px;
  height: 200px;
  box-shadow: 0px 5px 17px -7px rgba(0, 0, 0, 0.75);
  border-radius: 15px;
  transition: transform 100ms ease-in;
  cursor: pointer;
  &:hover{
    transform: scale(1.07);
  }
`;
export const StoryUserName = styled.h4`
  position: absolute;
  bottom: 0px;
  left:20px;
  color: white;
  text-shadow: 1px 1px 3px rgba(150, 150, 150, 1);
`;
export const NewPostContainer = styled.div`
  background-color: white;
  border-radius:10px;
  width:100%;
  padding:12px 20px;
`;
export const BoxSearch = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #eff2f5;
  padding: 10px 10px;
  margin-left: 10px;
  border-radius: 50px;
  width: 100%;
`;
export const Input = styled.input`
  border: none;
  background-color: transparent;
  outline-width: 0;
  font-size: 15px;
  width: 100%;
`;
export const TextArea = styled.textarea`
  border: none;
  background-color: transparent;
  outline-width: 0;
  font-size: 15px;
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top:10px;
`;
export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap:10px;
  background-color: transparent;
  border:none;
  flex: 1;
  width: 100%;
  cursor: pointer;
  border-radius: 10px;
  &:hover{
    background: #eff2f5;
  }
`;
export const ButtonSubmit = styled.button`
  text-align: center;
  display: block;
  width:100%;
  padding:15px 0px;
  color:white;
  font-size: 18px;
  background-color: #2e81f4;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  font-weight: 600;
`;
export const UploadImage = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap:10px;
  background-color: transparent;
  border:none;
  flex: 1;
  width: 100%;
  cursor: pointer;
  border-radius: 10px;
  &:hover{
    background: #eff2f5;
  }
`;
export const ButtonText = styled.p`
  font-size: '15px';
  letter-spacing: '.5px';
  color:'gray';
`;
export const MainContainer = styled.div`
  width:100%;
  display: flex;
  flex-direction: column;
  gap:20px;
`;
export const UserPost = styled.div`
  padding:12px 20px 2px 20px;
  background-color: white;
  border-radius:10px;
`;
export const PostHeader = styled.div`
  width:100%;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: start;
  gap:10px;
  height:55px;
`;
export const PostUserName  = styled.h4`
  margin:0px 0px 3px 0px!important;
  padding:0px!important;
  font-weight: 600;
  font-size:16px;
`;
export const PostTimeStamp  = styled.span`
  display:flex;
  flex-direction: row;
  align-items:center;
  gap: 5px;
  padding:0px;
  color:gray;
  font-size:14px;
`;
export const PostBody = styled.div`
  width:100%;
  display:flex;
  flex-direction: column;
  gap:10px;
  padding-bottom:10px;
`;
export const PostUsserText = styled.p`
  padding:0px;
  margin:0px;
  width:100%;
`;
export const PostPerformance = styled.div`
  padding:10px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e8e8e8;
`;
export const ItemPerformance = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  span{
    color:#666666;
  }
`;
export const PostFooter = styled.div`
  padding:5px 0px;
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const PostButton = styled.button`
  padding:10px 0px;
  border:none;
  background-color: transparent;
  flex: 1;
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap:10px;
  cursor: pointer;
  border-radius: 10px;
  &:hover{
    background: #eff2f5;
  }
  span{
    color: gray;
    font-size:16px;
    font-weight: 600;
  }
  :last-child{
    flex: 0.25;
    gap:2px;
    margin-left:2px;
  }
`;
export const ModalContainer = styled.form`
  background-color: white;
  width:40%;
  border-radius: 10px;
  &:focus{
    outline:none;
    border: none;
  }
`;
export const ModalHeader = styled.div`
  padding:10px 20px;
  border-bottom: 1px solid #f5f5f5;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const TitleModal = styled.h4`
  font-weight: 600;
  padding:0;
  margin:0px;
  color: gray;
  font-size: 22px;
`;
export const ModalSection = styled.div`
  padding:10px 20px;
  width:100%;
`;
export const ModalBodyUserData = styled.div`
  display: flex;
  flex-direction: row;
  align-items:center;
  gap:10px;
`;



