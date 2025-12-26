import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthTabs from './navigation/AuthTabs';

export default function App() {
  return (
    <NavigationContainer>
      <AuthTabs />
    </NavigationContainer>
  );
}
