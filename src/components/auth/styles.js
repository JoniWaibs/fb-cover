import styled from "styled-components";

export const LoginContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f1f2f5;
`;
export const LoginBox = styled.div`
  width:400px;
  background-color: white;
  border-radius: 10px;
  padding:30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: 0px 4px 5px -5px rgba(214, 214, 214, 1);
  -moz-box-shadow: 0px 4px 5px -5px rgba(214, 214, 214, 1);
  box-shadow: 0px 4px 5px -5px rgba(214, 214, 214, 1);
`;
export const LoginButton = styled.button`
  font-size: 20px;
  font-weight: 600;
  color:white;
  background-color: #2e81f4;
  border-radius: 5px;
  display: block;
  padding: 15px 20px;
  border:none;
  cursor: pointer;
  &:hover {
    background-color: #1877f1;
    transition: all .3s ease-in-out;
  }
`;
