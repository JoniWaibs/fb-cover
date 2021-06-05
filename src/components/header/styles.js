import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 66px;
  padding: 6px 20px;
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
  padding: 12px 10px;
  margin-left: 10px;
  border-radius: 50px;
`;
export const InputSearch = styled.input`
  border: none;
  background-color: transparent;
  outline-width: 0;
  font-size: 18px;
`;
export const MiddleHeader = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const MenuIcon = styled.a`
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
  &:active {
    border-bottom: 4px solid #2e81f4;
    background-color: transparent;
    border-radius: 0px;
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
export const DropDownOptions = styled.div`
  width: 25%;
  border-radius: 10px;
  -webkit-box-shadow: 0px 4px 5px -5px rgba(214, 214, 214, 1);
  -moz-box-shadow: 0px 4px 5px -5px rgba(214, 214, 214, 1);
  box-shadow: 0px 4px 5px -5px rgba(214, 214, 214, 1);
  position: absolute;
  z-index: 100;
  top: 66px;
  right: 30px;
  padding: 15px;
  background-color: white;
`;
export const OptionRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  &:hover {
    background-color: #dedede;
    border-radius: 10px;
  }
`;
export const TitleRow = styled.h4`
  font-weight: 600;
  padding: 0;
  margin: 0px;
  color: #4a4a4a;
`;
