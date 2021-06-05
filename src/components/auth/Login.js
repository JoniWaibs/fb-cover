import React from "react";
import { LoginContainer, LoginBox, LoginButton } from "./styles";
import { provider, auth } from "../../config/firebase";
import { useStateValue } from "../../store";
import { types } from '../../store/reducer'


const Login = () => {
  const [state, dispatch] = useStateValue();
  const SignIn = () => {
    //Sign In with facebook provider
      auth.signInWithPopup(provider).then((result) => {
        dispatch({
          type: types.SET_USER,
          currentUser : result.user,
        })
        // var credential = result.credential;

        // The signed-in user info.
        // var user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        // var accessToken = credential.accessToken;

        // ...
      })
      .catch((error) => {
        console.log(error)
      });
  };

  return (
    <LoginContainer>
      <LoginBox>
        <img
          alt={"Facebook Logo"}
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1365px-Facebook_f_logo_%282019%29.svg.png"
          }
          style={{ width: "100px", margin: "10px 0px 10px 0px" }}
        />
        <img
          alt={"Facebook Logo"}
          src={
            "https://1000marcas.net/wp-content/uploads/2019/12/Facebook-logo.png"
          }
          style={{ width: "150px", margin: "10px 0px 20px 0px" }}
        />
        <LoginButton onClick={SignIn}>Sign In with Facebook</LoginButton>
      </LoginBox>
    </LoginContainer>
  );
};

export default Login;
