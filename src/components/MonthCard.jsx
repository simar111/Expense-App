import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function MonthCard({ month, data }) {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.card}
      onPress={() => navigation.navigate('MonthDetail', { month, data })}
    >
      <Text style={styles.month}>{month}</Text>
      <Text style={styles.income}>Income ₹{data.income}</Text>
      <Text style={styles.expense}>Expense ₹{data.expense}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { padding: 16, backgroundColor: '#1f2937', borderRadius: 12, marginBottom: 10 },
  month: { fontSize: 18, fontWeight: '700' },
  income: { color: '#4CAF50' },
  expense: { color: '#F44336' },
});
