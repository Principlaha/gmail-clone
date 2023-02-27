import { Button } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth, provider } from './firebase';
import './Login.css';

function Login() {
    const dispatch = useDispatch();

    const signIn = () => {
      auth.signInWithPopup(provider)
      .then(({ user }) => {
             dispatch(login({
              displayName: user.displayName,
              email: user.email,
              photoUrl: user.photoURL,
          }))
      }).catch((error) => alert(error.message))
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://cdn.pixabay.com/photo/2014/08/02/10/07/google-408194_960_720.png" alt="" />
                 <Button 
                 onClick={signIn}
                 variant="contained"
                 color="primary">Login</Button>
            </div>
        </div>
    )
}

export default Login
