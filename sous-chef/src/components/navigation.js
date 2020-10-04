import React from 'react';
import { Link } from 'react-router-dom';
 
import * as ROUTES from './../constants/routes';
 
const Navigation = () => (
  <div>
    <ul>
      <li>
        <Link to={ROUTES.SIGNUP}>Sign Up</Link>
      </li>
    </ul>
  </div>
);
 
export default Navigation;