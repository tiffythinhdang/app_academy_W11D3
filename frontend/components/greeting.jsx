import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  debugger
  return (
    <div>
    {
      currentUser ? (
        <div>
          <p>Welcome {currentUser.username}</p>
          <button onClick={logout}></button>
        </div>
      ) : (
        <div>
          <Link to='/signup'>Sign Up</Link>
          <Link to='/login'>Log In</Link>
        </div>
      )
    }
    </div>
  )
}

export default Greeting;