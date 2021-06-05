import { Avatar } from '@material-ui/core'
import React from 'react'
import {Row,TitleRow, Pulse} from './styles'

const OnlineContact = ({contactAvatar, contactName}) => {
  return (
    <Row>
      <Avatar src={contactAvatar}/>
      <Pulse/>
      <TitleRow>{contactName}</TitleRow>
    </Row>
  )
}

export default OnlineContact
