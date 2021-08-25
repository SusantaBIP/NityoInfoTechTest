import React from 'react'
import {View} from 'react-native'
import { Router, Scene } from 'react-native-router-flux'
import songList from './src/components/songList'
import songDetails from './src/components/songDetails';
import DashBoard from './src/components/DashBoard';

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "songList" component = {songList} title = "Song List" />
         <Scene key = "songDetails" component = {songDetails} title = "Song Details" back={true}/>
         <Scene key = "DashBoard" component = {DashBoard} initial = {true} hideNavBar={true}/>
      </Scene>
   </Router>
)
export default Routes