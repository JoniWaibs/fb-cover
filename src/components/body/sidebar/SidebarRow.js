import { Avatar } from '@material-ui/core'
import React from 'react'
import { Row, IconRow, TitleRow } from './styles'



const SidebarRow = ({src, Icon, title}) => {
  return (
    <Row>
      {src && <Avatar src={src}/>}
      {Icon && <IconRow> <Icon fontSize="large"/> </IconRow>}
      <TitleRow>{title}</TitleRow>
    </Row>
  )
}

export default SidebarRow
