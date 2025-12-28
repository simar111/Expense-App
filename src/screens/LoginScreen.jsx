import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthInput from '../components/AuthInput';
import PrimaryButton from '../components/PrimaryButton';
import { COLORS } from '../theme/colors';

export default function LoginScreen({setIsLoggedIn}) {
    const handleLogin = () => {
    // TEMP: skip validation
    setIsLoggedIn(true);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>
          Login to manage your expenses smartly
        </Text>
      </View>

      <View style={styles.form}>
        <AuthInput placeholder="Email" keyboardType="email-address" />
        <AuthInput placeholder="Password" secureTextEntry />
        <PrimaryButton title="Login" onPress={handleLogin} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: COLORS.text,
    marginTop: 40,
  },
  subtitle: {
    color: COLORS.muted,
    marginTop: 8,
  },
  form: {
    marginBottom: 40,
  },
});
