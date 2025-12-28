import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../../theme/colors';
import MonthCard from '../../components/MonthCard';
import TransactionItem from '../../components/TransactionItem';

const months = ['January', 'February', 'March'];

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>This Month</Text>

      {/* Summary */}
      <View style={styles.summary}>
        <Text style={styles.amount}>₹24,500</Text>
        <Text style={styles.muted}>Total spent</Text>
      </View>

      {/* Month History */}
      <FlatList
        data={months}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <MonthCard
            month={item}
            onPress={() => navigation.navigate('MonthDetail', { month: item })}
          />
        )}
      />

      {/* Recent Transactions */}
      <Text style={styles.subHeading}>Recent Transactions</Text>

      <TransactionItem title="Food" amount="₹450" />
      <TransactionItem title="Uber" amount="₹220" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
  },
  heading: {
    color: COLORS.text,
    fontSize: 24,
    fontWeight: '700',
  },
  summary: {
    backgroundColor: COLORS.card,
    padding: 20,
    borderRadius: 16,
    marginVertical: 20,
  },
  amount: {
    fontSize: 28,
    fontWeight: '700',
    color: COLORS.text,
  },
  muted: {
    color: COLORS.muted,
  },
  subHeading: {
    color: COLORS.text,
    fontSize: 18,
    marginVertical: 12,
  },
});
