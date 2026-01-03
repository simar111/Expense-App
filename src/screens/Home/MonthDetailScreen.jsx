import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import TransactionItem from '../../components/TransactionItem';

export default function MonthDetailScreen({ route }) {
  const { month, data } = route.params;

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 22 }}>{month}</Text>
      <Text>Income ₹{data.income}</Text>
      <Text>Expense ₹{data.expense}</Text>

      {data.transactions.map(txn => (
        <TransactionItem key={txn._id} item={txn} />
      ))}
    </ScrollView>
  );
}
