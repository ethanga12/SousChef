import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
 
import { withFirebase } from './Firebase';
 
const SignUpPage = () => (
  <div>
    <h1>Sign Up</h1>
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
      <form onSubmit={this.onSubmit}>
        <input
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Username"
        />
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign up
        </button>
 
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignUpForm = withFirebase(SignUpFormBase);
 
export default SignUpPage;
 
export { SignUpForm };