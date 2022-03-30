import React from 'react';

import classes from './Navigation.module.css';

// received props from MainHeader { isLoggedIn, onLogout }
const Navigation = (props) => {
  return (
    /**
     *  it will automatically show the this component if if the isLoggedIn props has a truthy value.
     *  otherwise, it will automatically not show the componet if the isLoggedIn props has a falsy value.
     */
    <nav className={classes.nav}>
      <ul>
        {props.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
