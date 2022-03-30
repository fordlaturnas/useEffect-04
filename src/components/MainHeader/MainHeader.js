import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';

// received props from App.js { isAuthenticated, onLogout }
const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <Navigation
        isLoggedIn={props.isAuthenticated}
        onLogout={props.onLogout}
      />
    </header>
  );
};

export default MainHeader;
