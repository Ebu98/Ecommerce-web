import React, { Component } from "react";
import "./SignIn.Style.scss";
import FormInput from "../Form-Inputs/FormInput";
import CustomButton from "../Custom-button/CustomButton";
import { auth,signInWithGoogle } from "../../firebase/firebase.utils";

export class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };


  handleSubmit =async e => {
    e.preventDefault();
    const { email, password} = this.state;

    try {
      await auth.signInWithEmailAndPassword(
        email,
        password
      );
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
    
  };
  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h1>I already have an account</h1>
        <span>SignIn with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            handleChange={this.handleChange}
            label="email"
            required
          />

          <FormInput
            type="password"
            name="password"
            value={password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isgooglesignin="true">
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;



