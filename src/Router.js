import React from 'react';
import {Text, View} from 'react-native';
import {Scene, Router} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import SignInForm from './components/SignInForm';
import ViewingForm from './components/ViewingForm';
import Profile from './components/Profile';
import AddListing from './components/AddListing';
import EditListing from './components/EditListing';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} hideNavBar initial />
          <Scene key="signUp" component={SignInForm} title="Sign Up" />
        </Scene>
        <Scene key="properties">
          <Scene
            key="main"
            tabs={true}
            title="Property24"
            hideBackImage={true}
            tabBarStyle={styles.tabBarStyle}>
            <Scene
              key="viewing"
              component={ViewingForm}
              title=" "
              hideNavBar
              icon={ListingsTab}
            />
            <Scene
              key="profile"
              component={Profile}
              hideNavBar
              icon={ProfileTab}
              title=" "
            />
          </Scene>

          <Scene
            key="addListing"
            component={AddListing}
            title="Create Listing"
          />
          <Scene
            key="editListing"
            component={EditListing}
            title="Editing Property"
          />
        </Scene>
      </Scene>
    </Router>
  );
};

//NB EDIT THESE FOR THE TABS

const ListingsTab = props => {
  let textColor = props.focused ? '#333333' : '#999999';

  let borderColor = props.focused ? '#333333' : '#FFFFFF';
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: borderColor,
        borderBottomWidth: 2,
        padding: 15,
      }}>
      <Text style={{color: textColor}}>Listings</Text>
    </View>
  );
};

const ProfileTab = props => {
  let textColor = props.focused ? '#333333' : '#999999';

  let borderColor = props.focused ? '#333333' : '#FFFFFF';
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: borderColor,
        borderBottomWidth: 2,
        padding: 15,
      }}>
      <Text style={{color: textColor}}>Profile</Text>
    </View>
  );
};
//NB, MAKE MAIN THE VONTAINER FOR A SUB CLASS (THAT CONTAINS the PROFLE?VIEWING LISTS) and A SUBCLASS FOR (ADDING/EDITING/DELETING)
//THAT WILL ALLOW FOR EASY BACKS

const styles = {
  tabBarStyle: {
    height: 50,
    borderTopColor: 'darkgrey',
    borderTopWidth: 1,
    opacity: 0.98,
    justifyContent: 'space-between',
  },
};

export default RouterComponent;
