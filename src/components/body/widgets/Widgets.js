import React from 'react'
import Chat from './Chat'
import RequestFriends from './RequestFriends'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import {ContainerWidgets, FriendsWidgetContainer, Line} from './styles'



const Widgets = () => {
  return (
    <ContainerWidgets>
      <FriendsWidgetContainer>
        <div style={{display:'flex', alignItems: 'center', gap:'10px'}}>
          <PersonAddIcon/>
          <span style={{fontWeight:'600'}}>Request Friends</span>
        </div>
        <RequestFriends/>
      </FriendsWidgetContainer>
      <Line/>
      <Chat/>
    </ContainerWidgets>
  )
}

export default Widgets
