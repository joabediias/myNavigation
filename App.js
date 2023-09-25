import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Contacts from './src/pages/Contacts';
import Information from './src/pages/Information';
import AppContacts from './src/pages/AppContacts';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return(
    <Tab.Navigator>
      <Tab.Screen name = "AppContacts" component = {AppContacts}/>
      <Tab.Screen name = "Contacts" component = {Contacts}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
     myStack() // função utilizando o navigator Stack 
     //myDrawer() // função utilizando o navigator Drawer
  );
}

function myStack() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name = "AppContacts" 
            component = {Tabs} />
          <Stack.Screen 
            name = "Information" 
            component = {Information}/>
        </Stack.Navigator>
      </NavigationContainer>
    ); 
}

function myDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen 
          name = "AppContacts" 
          component = {Tabs} />
        <Drawer.Screen 
          name = "Information" 
          component = {Information}/>
      </Drawer.Navigator>
    </NavigationContainer>
  ); 
}