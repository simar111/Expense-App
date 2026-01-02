import React from 'react';
import { Text, StyleSheet, View ,Alert,ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthInput from '../components/AuthInput';
import PrimaryButton from '../components/PrimaryButton';
import { COLORS } from '../theme/colors';
import api from '../services/api'
import DateTimePicker from '@react-native-community/datetimepicker';
import { Platform, Pressable } from 'react-native';

import { useState } from 'react';
export default function SignupScreen({ setIsLoggedIn }) {
  const [showDatePicker, setShowDatePicker] = useState(false);
const [dobDate, setDobDate] = useState(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneno, setPhoneno] = useState('');
  const [address, setAddress] = useState('');
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
const onDateChange = (event, selectedDate) => {
  setShowDatePicker(false);

  if (selectedDate) {
    setDobDate(selectedDate);

    // Convert to YYYY-MM-DD
    const isoDate = selectedDate.toISOString().split('T')[0];
    setDob(isoDate);
  }
};

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
      dob: dob.trim(),
      password,
    });

    if (res.data) {
      setIsLoggedIn(true);
    }
  } catch (error) {
    console.log('ERROR DATA:', error?.response?.data);
    console.log('ERROR STATUS:', error?.response?.status);
    console.log('ERROR MESSAGE:', error?.message);

    Alert.alert(
      'Signup Failed',
      error?.response?.data?.message || 'Network error'
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
        <Pressable onPress={() => setShowDatePicker(true)}>
  <AuthInput
    placeholder="Date of Birth"
    value={dob}
    editable={false}
  />
</Pressable>

{showDatePicker && (
  <DateTimePicker
    value={dobDate || new Date(2000, 0, 1)}
    mode="date"
    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
    onChange={onDateChange}
    maximumDate={new Date()}
  />
)}

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