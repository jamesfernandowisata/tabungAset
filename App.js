import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from './routes/mainRoute';
import {createAppContainer} from 'react-navigation'

const AppContainer = createAppContainer(AppNavigator)

export default function App() {
  return (
    <NavigationContainer>
      <AppContainer/>
    </NavigationContainer>
  );
}

