import React from 'react';
import { Text, StyleSheet, View ,Alert,ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthInput from '../components/AuthInput';
import PrimaryButton from '../components/PrimaryButton';
import { COLORS } from '../theme/colors';
import api from '../services/api'
import { useState } from 'react';
export default function SignupScreen({ setIsLoggedIn }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneno, setPhoneno] = useState('');
  const [address, setAddress] = useState('');
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    if (!name || !email || !phoneno || !address || !dob || !password) {
      Alert.alert('Error', 'All fields are required');
      return;
    }

    try {
      setLoading(true);

      const res = await api.post('/api/auth/register', {
        name,
        email,
        phoneno,
        address,
        dob,
        password,
      });

      // TEMP: auto login after signup
      if (res.data) {
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.warn(error)
      Alert.alert(
        'Signup Failed',
        error?.response?.data?.message || 'Something went wrong'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Create Account</Text>

        <AuthInput placeholder="Full Name" value={name} onChangeText={setName} />
        <AuthInput
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <AuthInput
          placeholder="Phone Number"
          keyboardType="phone-pad"
          value={phoneno}
          onChangeText={setPhoneno}
        />
        <AuthInput
          placeholder="Address"
          value={address}
          onChangeText={setAddress}
        />
        <AuthInput
          placeholder="Date of Birth (YYYY-MM-DD)"
          value={dob}
          onChangeText={setDob}
        />
        <AuthInput
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <PrimaryButton
          title={loading ? 'Creating account...' : 'Sign Up'}
          onPress={handleSignup}
        />
      </ScrollView>
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
    marginBottom: 20,
  },
});