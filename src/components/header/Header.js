import React, {useState} from 'react'
import {HeaderContainer,LeftHeader,MiddleHeader,RightHeader,FacebookLogo,HeaderSearch,InputSearch ,MenuIcon,UserInfo, DropDownOptions, OptionRow,TitleRow } from './styles'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AddIcon from '@material-ui/icons/Add';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Avatar, IconButton } from '@material-ui/core';
import './styles.css'
import { useStateValue } from '../../store';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpIcon from '@material-ui/icons/Help';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import { auth } from "../../config/firebase";
import { types } from '../../store/reducer'


const Header = () => {
  let [isDropDownOpen, setShowDropDown] = useState(false)
  const [{currentUser}, dispatch] = useStateValue();
  const string = currentUser.displayName.split(" ") || 'user';

  const logout = () => {
    auth.signOut().then(() => {
      console.log('cerrando sesion')
      // Sign-out successful.
      dispatch({
        type: types.LOGOUT,
      })
    }).catch((error) => {
      // An error happened.
      console.log(error)
    });
  }

  return (

    <HeaderContainer>
      <LeftHeader>
        <FacebookLogo
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1365px-Facebook_f_logo_%282019%29.svg.png"
          alt="Facebook Logo"
        />
        <HeaderSearch>
          <SearchIcon/>
          <InputSearch type="text" placeholder="Search Facebook"/>
        </HeaderSearch>
      </LeftHeader>
      <MiddleHeader>
        <MenuIcon className="active"><HomeIcon fontSize="large"/> </MenuIcon>
        <MenuIcon> <OndemandVideoIcon fontSize="large"/></MenuIcon>
        <MenuIcon><StorefrontIcon fontSize="large"/></MenuIcon>
        <MenuIcon><SupervisedUserCircleIcon fontSize="large"/></MenuIcon>
        <MenuIcon><DashboardIcon fontSize="large"/></MenuIcon>
      </MiddleHeader>
      <RightHeader>
        <UserInfo>
          <Avatar src={currentUser.photoURL}/>
          <h4>{string[0]}</h4>
        </UserInfo>
        <IconButton><AddIcon fontSize="large"/> </IconButton>
        <IconButton><QuestionAnswerIcon fontSize="large"/></IconButton>
        <IconButton><NotificationsIcon fontSize="large"/></IconButton>
        <IconButton onClick={() => setShowDropDown( isDropDownOpen = !isDropDownOpen )}><ArrowDropDownIcon fontSize="large"/></IconButton>
      </RightHeader>
      {
        isDropDownOpen &&
        (
          <DropDownOptions>
            <OptionRow style={{marginBottom : '10px'}}>
              <IconButton><Avatar src={currentUser.photoURL} style={{width:"75px", height:"75px"}}/></IconButton>
              <div>
                <TitleRow>{currentUser.displayName}</TitleRow>
                <span style={{color: 'gray', padding: '10px 0px 0px 0px'}}>See your profile</span>
              </div>
            </OptionRow>
            <div style={{borderBottom : '1px solid #e8e8e8', borderTop : '1px solid #e8e8e8', padding: '10px 0px'}}>
              <OptionRow>
                <IconButton><AnnouncementIcon fontSize="large" style={{color: '#4a4a4a'}}/></IconButton>
                <div>
                  <TitleRow>Give Feedback</TitleRow>
                  <span style={{color: 'gray', padding: '10px 0px 0px 0px'}}>Help us improve the new Facebook</span>
                </div>
              </OptionRow>
            </div>
            <OptionRow style={{marginTop : '10px'}}>
              <IconButton><SettingsIcon fontSize="large" style={{color: '#4a4a4a'}}/></IconButton>
              <TitleRow>Settings & Privacy</TitleRow>
            </OptionRow>
            <OptionRow>
              <IconButton><HelpIcon fontSize="large" style={{color: '#4a4a4a'}}/></IconButton>
              <TitleRow>Help & Support</TitleRow>
            </OptionRow>
            <OptionRow>
              <IconButton><Brightness2Icon fontSize="large" style={{color: '#4a4a4a'}}/></IconButton>
              <TitleRow>Display & Accessibility</TitleRow>
            </OptionRow>
            <OptionRow onClick={logout}>
              <IconButton><ExitToAppIcon fontSize="large" style={{color: '#4a4a4a'}}/></IconButton>
              <TitleRow>Log Out</TitleRow>
            </OptionRow>
          </DropDownOptions>
        )
      }
    </HeaderContainer>
  )
}

export default Header
