import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthInput from '../components/AuthInput';
import PrimaryButton from '../components/PrimaryButton';
import { COLORS } from '../theme/colors';

export default function SignupScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>
          Start tracking your expenses today
        </Text>
      </View>

      <View style={styles.form}>
        <AuthInput placeholder="Full Name" />
        <AuthInput placeholder="Email" keyboardType="email-address" />
        <AuthInput placeholder="Password" secureTextEntry />
        <PrimaryButton title="Sign Up" />
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
