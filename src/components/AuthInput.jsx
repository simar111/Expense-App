import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { COLORS } from '../theme/colors';

export default function AuthInput(props) {
  return (
    <TextInput
      {...props}
      placeholderTextColor={COLORS.muted}
      style={styles.input}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: COLORS.card,
    borderRadius: 14,
    padding: 16,
    color: COLORS.text,
    marginBottom: 15,
    fontSize: 16,
  },
});
