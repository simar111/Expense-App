import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { PieChart, BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import api from '../../services/api';
import MonthCard from '../../components/MonthCard';
import TransactionItem from '../../components/TransactionItem';

const screenWidth = Dimensions.get('window').width;

export default function HomeScreen() {
  const [transactions, setTransactions] = useState([]);
  const [monthlyData, setMonthlyData] = useState({});
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const email = 'simar123@gmail.com'; // later from AsyncStorage

 

  const fetchDashboard = async () => {
    const res = await api.get(`/api/transactions?email=${email}`);
    const monthRes = await api.get(`/api/transactions/summary/monthly?email=${email}`);

    setTransactions(res.data);
    setMonthlyData(monthRes.data);
    calculateStats(res.data);
  };
 useEffect(() => {
    fetchDashboard();
  }, []);
  const calculateStats = (data) => {
    let inc = 0, exp = 0;
    const currentMonth = new Date().getMonth();

    data.forEach(t => {
      if (new Date(t.date).getMonth() === currentMonth) {
        t.type === 'income' ? inc += t.amount : exp += t.amount;
      }
    });

    setIncome(inc);
    setExpense(exp);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>This Month Summary</Text>

      {/* SUMMARY */}
      <View style={styles.summaryRow}>
        <Text style={styles.income}>Income ₹{income}</Text>
        <Text style={styles.expense}>Expense ₹{expense}</Text>
        <Text style={styles.balance}>Balance ₹{income - expense}</Text>
      </View>

      {/* PIE CHART */}
      <PieChart
        data={[
          { name: 'Income', amount: income, color: '#4CAF50', legendFontColor: '#fff' },
          { name: 'Expense', amount: expense, color: '#F44336', legendFontColor: '#fff' },
        ]}
        width={screenWidth - 40}
        height={220}
        accessor="amount"
        backgroundColor="transparent"
        paddingLeft="20"
        chartConfig={chartConfig}
      />

      {/* RECENT TRANSACTIONS */}
      <Text style={styles.subHeading}>Recent Transactions</Text>
      {transactions.slice(0, 5).map(item => (
        <TransactionItem key={item._id} item={item} />
      ))}

      {/* MONTHS */}
      <Text style={styles.subHeading}>Monthly History</Text>
      {Object.keys(monthlyData).map(month => (
        <MonthCard
          key={month}
          month={month}
          data={monthlyData[month]}
        />
      ))}
    </ScrollView>
  );
}

const chartConfig = {
  backgroundGradientFrom: '#1f2937',
  backgroundGradientTo: '#1f2937',
  color: () => '#fff',
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  heading: { fontSize: 22, fontWeight: '700', marginBottom: 10 },
  subHeading: { fontSize: 18, marginTop: 20 },
  summaryRow: { marginBottom: 20 },
  income: { color: '#4CAF50' },
  expense: { color: '#F44336' },
  balance: { color: '#3B82F6' },
});
