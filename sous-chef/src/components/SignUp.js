import React, { Component } from 'react';
import { Link} from 'react-router-dom';
 import { withFirebase } from './Firebase';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './../index.css';
import * as ROUTES from './../constants/routes';
 
const SignUpPage = () => (
  <div>
    <SignUpForm />
  </div>
);
 
const INITIAL_STATE = {
  username: '',
  email: '',
  password: '',
  error: true
};
 
class SignUpFormBase extends Component {
  constructor(props) {
    super(props);
 
    this.state = { ...INITIAL_STATE };
  }
 
  onSubmit = event => {
    const { username, email, password, error} = this.state;
    
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, password)
      .then(() => {
        window.location("/");
      })
      .catch(error => {
        console.log(error);
        this.setState({ error });
      });
 
    event.preventDefault();
  };
 
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
 
  render() {
    const { username, email, password, error } = this.state;
    const invalid = this.state.email == '' || this.state.password == '' || this.state.username == '';
    return (
      <div style={ backgroundStyle }>
        <Jumbotron style={jumbotronStyle}>
              <h1 style={welcomeTextStyle}>Welcome to Sous Chef!</h1>
              <Form style={formStyle} onSubmit={this.onSubmit}>
                <Form.Group>
                    <Form.Label style={labelStyle}>Name</Form.Label>
                    <Form.Control name="username" onChange={this.onChange} style={inputStyle} type="username" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label style={labelStyle}>Email address</Form.Label>
                  <Form.Control name="email" onChange={this.onChange} style={inputStyle} type="email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label style={labelStyle}>Password</Form.Label>
                  <Form.Control name="password" onChange={this.onChange} style={inputStyle} type="password" />
                </Form.Group>
                <Button disabled={invalid} style={submitStyle} type="submit">
                <Link style={submitlinkStyle} to={ROUTES.HOME}>Sign Up</Link>
                </Button>
              </Form>
              <p style={signinStyle}>Already a user? <Link style={linkStyle} to={ROUTES.SIGNIN}>Sign In</Link></p>
              <p style={signinStyle}>By signing up you're agreeing to all T&C</p>
        </Jumbotron>
      </div>
    );
  }
}

const backgroundStyle = {
  backgroundImage: 'url("/images/food.svg")',
  backgroundSize: 'contain',
  height: 900,
  overflow: 'hidden'
};

const jumbotronStyle = {
  marginTop: 96,
  marginLeft: 400,
  width:624,
  height:528,
  backgroundColor: 'white'
};

const welcomeTextStyle = {
  color: '#EA655D',
  textAlign: 'center',
  fontFamily: 'Poppins',
  marginTop: -20,
  fontWeight: 'bold',
  fontSize: 23
};

const formStyle = {
  width: 300,
  fontFamily: 'Poppins',
  marginTop: 30,
  marginLeft: 130
};

const submitStyle = {
  backgroundColor: '#EA655D',
  outline: 'none !important',
  fontFamily: 'Poppins',
  marginLeft: 90,
  width: 126,
  marginTop: 30,
  fontSize: 13
};

const inputStyle = {
  backgroundColor: '#F3F3F4'
};

const signinStyle = {
  textAlign: 'center',
  fontSize: 13,
  marginTop: 20,
  fontFamily: 'Poppins',
  color: 'gray'
};

const labelStyle = {
  fontSize: 13,
  fontWeight: 'bold',
  color: 'black'
};

const linkStyle = {
  color: '#EA655D'
};

const submitlinkStyle = {
  color: 'white'
};

const SignUpForm = withFirebase(SignUpFormBase);
 
export default SignUpPage;
 
export { SignUpForm };