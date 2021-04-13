import React , {useState} from "react";
import CustomButton from "../custom-button/custom-button.component";
import Forminput from "../form-input/from-input.component";
import {auth , signInWithGoogle} from '../../firebase/firebase.utils';

import "./sign-in.styles.scss";

const SignIn = () => {

  const [userCredential , setCredential] = useState({email:'',password:''});
  const {email,password} = userCredential;

  const handleSubmit = async event => {
    event.preventDefault();
    try{
    await auth.signInWithEmailAndPassword(email , password);
    setCredential({ email: "", password: "" });
    }catch(error){
      alert(error);
      setCredential({ email: "", password: "" });
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setCredential({...userCredential,[name]: value });
  };

    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
          <Forminput
            name="email"
            type="email"
            handleChange={handleChange}
            label="Email"
            value={email}
            required
          />
          <Forminput
            name="password"
            type="password"
            handleChange={handleChange}
            label="password"
            value={password}
            required
          />
          <div className='buttons'>
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
          </div>
          
        </form>
      </div>
    );
  }


export default SignIn;
