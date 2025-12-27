import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { COLORS } from '../theme/colors';

export default function AuthHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
       <Icon name="credit-card-outline" size={26} color={COLORS.primary} />

      </View>

      <Text style={styles.title}>ExpenseEase</Text>
      <Text style={styles.subtitle}>
        Smart expense tracking & insights
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  iconWrapper: {
    height: 56,
    width: 56,
    borderRadius: 28,
    backgroundColor: COLORS.card,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.text,
  },
  subtitle: {
    color: COLORS.muted,
    marginTop: 4,
  },
});
