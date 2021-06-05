import React from 'react';
import SidebarRow from './SidebarRow';
import { ContainerSidebarRows } from './styles';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import RestoreIcon from '@material-ui/icons/Restore';
import TurnedInIcon from '@material-ui/icons/TurnedIn';
import FlagIcon from '@material-ui/icons/Flag';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useStateValue } from '../../../store';


const Sidebar = () => {
  const [{currentUser}] = useStateValue();
  return (
    <ContainerSidebarRows>
      <SidebarRow title={currentUser.displayName}  src={currentUser.photoURL}/>
      <SidebarRow title={'COVID-19 Information Center'} Icon={LocalHospitalIcon}/>
      <SidebarRow title={'Friends'} Icon={PeopleAltIcon}/>
      <SidebarRow title={'Marketplace'} Icon={StorefrontIcon}/>
      <SidebarRow title={'Groups'} Icon={SupervisedUserCircleIcon}/>
      <SidebarRow title={'Watch'} Icon={OndemandVideoIcon}/>
      <SidebarRow title={'Events'} Icon={CalendarTodayIcon}/>
      <SidebarRow title={'Regards'} Icon={RestoreIcon}/>
      <SidebarRow title={'Saved'} Icon={TurnedInIcon}/>
      <SidebarRow title={'Pages'} Icon={FlagIcon}/>
      <SidebarRow title={'See more'} Icon={ArrowDropDownIcon}/>
    </ContainerSidebarRows>
  )
}

export default Sidebar
