import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignUpScreen';
import { COLORS } from '../theme/colors';

const Tab = createMaterialTopTabNavigator();

export default function AuthTabs({ setIsLoggedIn }) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: COLORS.card,
          borderRadius: 14,
          marginBottom: 10,
        },
        tabBarIndicatorStyle: {
          backgroundColor: COLORS.primary,
          height: 3,
          borderRadius: 3,
        },
        tabBarLabelStyle: {
          fontWeight: '600',
          textTransform: 'none',
        },
        tabBarActiveTintColor: COLORS.text,
        tabBarInactiveTintColor: COLORS.muted,
      }}
    >
    <Tab.Screen name="Login">
        {(props) => (
          <LoginScreen {...props} setIsLoggedIn={setIsLoggedIn} />
        )}
      </Tab.Screen>

     <Tab.Screen name="Sign Up">
  {(props) => (
    <SignupScreen {...props} setIsLoggedIn={setIsLoggedIn} />
  )}
</Tab.Screen>

    </Tab.Navigator>
  );
}
