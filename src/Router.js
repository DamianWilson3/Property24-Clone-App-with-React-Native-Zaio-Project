import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import SignInForm from './components/SignInForm';
import ViewingForm from './components/ViewingForm';
import Profile from './components/Profile';
import AddListing from './components/AddListing';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} hideNavBar initial />
          <Scene key="signUp" component={SignInForm} title="Sign Up" />
        </Scene>
        <Scene
          key="main"
          tabs={true}
          hideNavBar={true}
          hideBackImage={true}
          tabBarStyle={styles.tabBarStyle}>
          <Scene
            key="viewing"
            component={ViewingForm}
            title="Listings"
            hideNavBar
          />
          <Scene key="profile" component={Profile} title="Profile" hideNavBar />
        </Scene>
        <Scene key="Listing">
          <Scene
            key="addListing"
            component={AddListing}
            title="Create Listing"
          />
        </Scene>
      </Scene>
    </Router>
  );
};

const styles = {
  tabBarStyle: {
    fontSize: 20,
  },
};

export default RouterComponent;
