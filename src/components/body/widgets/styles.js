import styled from "styled-components";



export const ContainerWidgets = styled.aside`
  padding:30px 20px;
  min-height: 100vh;
  overflow-y: auto;
  flex: 0.33;
  display:flex;
  flex-direction: column;
  justify-content: start;
`;
export const FriendsWidgetContainer = styled.div`
  margin-left: auto;
  width: 95%;
  padding-bottom: 15px;
  display:flex;
  flex-direction: column;
  gap:10px;
  background-color: #ebebeb;
  padding:10px;
  border-radius:10px;
`;
export const Request = styled.div`
  display:flex;
  flex-direction: row;
  align-items: start;
  justify-content: start;
  gap:10px;
  padding:10px;
  border-radius:10px;
  width: 100%;
  cursor: pointer;
  &:hover{
    background-color: #d4d4d4;
    button:last-child{
      background-color: silver;
      color:black;
    }
  }
`;
export const ContainerInfo = styled.div`
  width: 100%;
  display:flex;
  flex-direction: column;
  gap:15px;
`
export const RequestInfo = styled.div`
  display:flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  h4{
    padding: 0;
    margin: 0;
  }
`;
export const RequestDays = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #2e81f4;
  font-weight: 600;
`;
export const ContainerButtons = styled.div`
  width:100%;
  display:flex;
  flex-direction: row;
  align-items: center;
  gap:10px;
`
export const CardButton = styled.button`
  flex: 1;
  border-radius: 10px;
  background-color: ${props => props.bg};
  color: ${props => props.text};
  padding:12px 30px;
  border:none;
  font-size:16px;
  font-weight: 600;
  cursor: pointer;
`;
export const Line = styled.div`
  margin: 15px 0px;
  border-bottom: 1px solid silver;
  width: 95%;
  margin-left: auto;
`;
export const ChatContainer = styled.div`
  margin-left: auto;
  width: 95%;
  padding-bottom: 15px;
  display:flex;
  flex-direction: column;
`;
export const Row = styled.div`
  position:relative;
  display:flex;
  flex-direction:row;
  align-items:center;
  gap:10px;
  padding:10px 15px;
  cursor: pointer;
  &:hover{
    background-color: #dedede;
    border-radius:10px;
  }
`;
export const Pulse = styled.span`
  position: absolute;
  background-color: #00A400;
  width:10px;
  height:10px;
  border-radius: 20px;
  left:45px;
  top:40px;
`
export const TitleRow = styled.h4`
  font-weight: 600;
  padding:0;
  margin:0px;
`;
