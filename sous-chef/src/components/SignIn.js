import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
 
import { withFirebase } from './Firebase';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './../index.css';
 
const SignUpPage = () => (
  <div>
    <SignUpForm />
  </div>
);
 
const INITIAL_STATE = {
  username: '',
  email: '',
  password: '',
  error: null,
};
 
class SignUpFormBase extends Component {
  constructor(props) {
    super(props);
 
    this.state = { ...INITIAL_STATE };
  }
 
  onSubmit = event => {
    const { email, password } = this.state;
 
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });
 
    event.preventDefault();
  };
 
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
 
  render() {
    const { username, email, password, error } = this.state;
 
    const isInvalid = password === '' || email === '' || username == '';
 
    return (
    <Jumbotron style={jumbotronStyle}>
          <h1 style={welcomeTextStyle}>Good to see you back!</h1>
          <Form style={formStyle}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control style={inputStyle} type="email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <Button style={submitStyle} type="submit">
              Sign in
            </Button>
          </Form>
          <p style={s}>Don't have an account yet? Sign Up</p>
    </Jumbotron>

    );
  }
}

const jumbotronStyle = {
  marginTop: 96,
  marginLeft: 400,
  width:624,
  height:528,
  // backgroundColor: 'white'
};

const welcomeTextStyle = {
  color: '#EA655D',
  textAlign: 'center',
  fontFamily: 'Poppins'
};

const formStyle = {
  width: 300,
  // textAlign: 'center',
  fontFamily: 'Poppins',
  marginTop: 50,
  marginLeft: 130
};

const submitStyle = {
  backgroundColor: '#EA655D',
  outline: 'none !important',
  fontFamily: 'Poppins',
  marginLeft: 90,
  width: 126,
  marginTop: 30
};

const inputStyle = {
  backgroundColor: '#F3F3F4'
};

const SignUpForm = withFirebase(SignUpFormBase);
 
export default SignUpPage;
 
export { SignUpForm };