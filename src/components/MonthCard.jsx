import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { COLORS } from '../theme/colors';

export default function MonthCard({ month, amount = '₹0', onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View>
        <Text style={styles.month}>{month}</Text>
        <Text style={styles.amount}>{amount}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    padding: 16,
    borderRadius: 16,
    marginRight: 12,
    minWidth: 120,
  },
  month: {
    color: COLORS.text,
    fontSize: 16,
    fontWeight: '600',
  },
  amount: {
    color: COLORS.muted,
    marginTop: 6,
    fontSize: 14,
  },
});
