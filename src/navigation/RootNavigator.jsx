import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from '../screens/AuthScreen';
import MainTabs from './MainTabs';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  // TEMP: always false initially
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLoggedIn ? (
        <Stack.Screen name="MainTabs" component={MainTabs} />
      ) : (
        <Stack.Screen name="Auth">
          {(props) => (
            <AuthScreen {...props} setIsLoggedIn={setIsLoggedIn} />
          )}
        </Stack.Screen>
      )}
    </Stack.Navigator>
  );
}
