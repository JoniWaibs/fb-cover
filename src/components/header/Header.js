import React from 'react'
import {HeaderContainer,LeftHeader,MiddleHeader,RightHeader,FacebookLogo,HeaderSearch,InputSearch ,MenuIcon,UserInfo } from './styles'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AddIcon from '@material-ui/icons/Add';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Avatar, IconButton } from '@material-ui/core';


const Header = () => {
  return (
    <HeaderContainer>
      <LeftHeader>
        <FacebookLogo
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1365px-Facebook_f_logo_%282019%29.svg.png"
          alt="Facebook Logo"
        />
        <HeaderSearch>
          <SearchIcon/>
          <InputSearch type="text"/>
        </HeaderSearch>
      </LeftHeader>
      <MiddleHeader>
        <MenuIcon> <HomeIcon fontSize="large"/> </MenuIcon>
        <MenuIcon> <OndemandVideoIcon fontSize="large"/> </MenuIcon>
        <MenuIcon> <StorefrontIcon fontSize="large"/> </MenuIcon>
        <MenuIcon> <SupervisedUserCircleIcon fontSize="large"/> </MenuIcon>
        <MenuIcon> <DashboardIcon fontSize="large"/> </MenuIcon>
      </MiddleHeader>
      <RightHeader>
        <UserInfo>
          <Avatar/>
          <h4>Jota</h4>
        </UserInfo>
        <IconButton> <AddIcon fontSize="large"/> </IconButton>
        <IconButton> <WhatsAppIcon fontSize="large"/> </IconButton>
        <IconButton> <NotificationsIcon fontSize="large"/> </IconButton>
        <IconButton> <ArrowDropDownIcon fontSize="large"/> </IconButton>
      </RightHeader>
    </HeaderContainer>
  )
}

export default Header
