
import styled from 'styled-components'

export const ContainerSidebarRows = styled.aside`
  padding:30px 10px;
  max-height: 100vh;
  overflow-y: auto;
  flex: 0.33;
`;
export const Row = styled.a`
  display:flex;
  flex-direction:row;
  align-items:center;
  gap:10px;
  padding:5px 15px;
  cursor: pointer;
  &:hover{
    background-color: #dedede;
    border-radius:10px;
  }
`;
export const IconRow = styled.div`
  color: #2e81f4;
`
export const TitleRow = styled.h4`
  font-weight: 600;
`;
