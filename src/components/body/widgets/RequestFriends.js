import { Avatar } from '@material-ui/core'
import React from 'react'
import {Request, RequestInfo, RequestDays, ContainerInfo, ContainerButtons, CardButton} from './styles'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const RequestFriends = () => {
  return (
    <Request>
      <Avatar style={{width:"75px", height:"75px"}} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSp15YA5zptEQj5AClh34Y3PoEWYkpBDgzLg&usqp=CAU'}/>
      <ContainerInfo>
        <RequestInfo>
          <h4>Mark Zuckerberg</h4>
          <RequestDays>
            <span>6 d</span>
            <FiberManualRecordIcon style={{width:"15px", height:"15px"}}/>
          </RequestDays>
        </RequestInfo>
        <div>
          <span>90 friends in common</span>
        </div>
        <ContainerButtons hover="gray">
          <CardButton bg={'#2e81f4'} text={'white'}>Confirm</CardButton>
          <CardButton bg={'transparent'} text={'gray'} >Delete</CardButton>
        </ContainerButtons>
      </ContainerInfo>
    </Request>
  )
}

export default RequestFriends
