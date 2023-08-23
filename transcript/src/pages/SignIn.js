import React from 'react';
import '../sign-in.css'
import Login from '../components/Login';
import Image from '../components/Image';

function SignIn() {
    return (
      <div className="SignIn">
        <Image />
        <Login />  
      </div>
    );
  }

  export default SignIn;