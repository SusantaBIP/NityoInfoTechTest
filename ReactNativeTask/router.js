import React from 'react';
import {View} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';
import DashBoard from './src/components/DashBoard';

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene
        key="DashBoard"
        component={DashBoard}
        initial={true}
        hideNavBar={true}
      />
    </Scene>
  </Router>
);
export default Routes;
