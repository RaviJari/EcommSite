import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import Forminput from "../form-input/from-input.component";
import {auth , signInWithGoogle} from '../../firebase/firebase.utils';

import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email , password } = this.state;

    try{
    await auth.signInWithEmailAndPassword(email , password);
    this.setState({ email: "", password: "" });
    }catch(error){
      alert(error);
      this.setState({ email: "", password: "" });
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <Forminput
            name="email"
            type="email"
            handleChange={this.handleChange}
            label="Email"
            value={this.state.email}
            required
          />
          <Forminput
            name="password"
            type="password"
            handleChange={this.handleChange}
            label="password"
            value={this.state.password}
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
}

export default SignIn;
