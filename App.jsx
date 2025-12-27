import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthTabs from './src/navigation/AuthTabs';
import AuthSceen from './src/screens/AuthScreen'
export default function App() {
  return (
    <NavigationContainer>
      <AuthSceen />
      {/* <AuthTabs /> */}
    </NavigationContainer>
  );
}
