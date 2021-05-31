import styled from "styled-components";

export const HeaderContainer = styled.div`
  padding: 15px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  background-color: white;
  z-index: 100;
  top: 0;
  border-bottom: 1px solid #f5f5f5;
  -webkit-box-shadow: 0px 4px 5px -5px rgba(214, 214, 214, 1);
  -moz-box-shadow: 0px 4px 5px -5px rgba(214, 214, 214, 1);
  box-shadow: 0px 4px 5px -5px rgba(214, 214, 214, 1);
`;
export const LeftHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const FacebookLogo = styled.img`
  height: 40px;
`;
export const HeaderSearch = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #eff2f5;
  padding: 10px;
  margin-left: 10px;
  border-radius: 50px;
`;
export const InputSearch = styled.input`
  border: none;
  background-color: transparent;
  outline-width: 0;
  font-size: 20px;
`;
export const MiddleHeader = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const MenuIcon = styled.div`
  display: flex;
  align-items: center;
  color: gray;
  padding: 10px 40px;
  cursor: pointer;
  &:hover {
    border-radius: 10px;
    color: #2e81f4;
    background-color: #eff2f5;
  }
`;
export const RightHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding: 0px 5px;
  height: 50px;
  &:hover {
    cursor: pointer;
    background-color: #eff2f5;
    border-radius: 50px;
  }
`;
