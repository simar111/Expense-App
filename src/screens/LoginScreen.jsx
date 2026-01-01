import React from 'react';
import { View, Text, StyleSheet,Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthInput from '../components/AuthInput';
import PrimaryButton from '../components/PrimaryButton';
import { COLORS } from '../theme/colors';
import api from '../services/api'
import { useState } from 'react';
export default function LoginScreen({ setIsLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Email and password required');
      return;
    }

    try {
      setLoading(true);

      const res = await api.post('/api/auth/login', {
        email,
        password,
      });

      // TEMP: assume success
      if (res.data) {
        console.warn(JSON.stringify(res))
        setIsLoggedIn(true);
      }
    } catch (error) {
       console.warn(JSON.stringify(error))
      Alert.alert(
        'Login Failed',
        error?.response?.data?.message || 'Something went wrong'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>

      <AuthInput
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <AuthInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <PrimaryButton
        title={loading ? 'Logging in...' : 'Login'}
        onPress={handleLogin}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
  },
  title: {
    color: COLORS.text,
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 30,
  },
});