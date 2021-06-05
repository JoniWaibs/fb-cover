import React,{useEffect} from "react";
import styled from "styled-components";
import Header from "./components/header/Header";
import Sidebar from "./components/body/sidebar/Sidebar";
import Feed from "./components/body/feed/Feed";
import Widgets from "./components/body/widgets/Widgets";
import Login from "./components/auth/Login";
import { useStateValue } from "./store";
import { auth } from "./config/firebase";
import { types } from './store/reducer'

const AppBody = styled.div`
  display: flex;
  background-color: #f1f2f5;
  min-height: 100vh;
`;

const App = () => {


  const [{currentUser}, dispatch] = useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged( result => {
      if(result){
        dispatch({
          type: types.SET_USER,
          currentUser : result,
        })
      }
    })
    //eslint-disable-net-line
  },[]);


  return (
    <div>
      {
        !currentUser
        ?
          <Login/>
        :
        (
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Feed />
              <Widgets />
            </AppBody>
          </>
        )
      }
    </div>
  );
};

export default App;
