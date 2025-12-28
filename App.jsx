import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthTabs from './src/navigation/AuthTabs';
import AuthSceen from './src/screens/AuthScreen'
import RootNaviagtor from './src/navigation/RootNavigator'
export default function App() {
  return (
    <NavigationContainer>
      {/* <AuthSceen /> */}
      {/* <AuthTabs /> */}
      <RootNaviagtor />
    </NavigationContainer>
  );
}
