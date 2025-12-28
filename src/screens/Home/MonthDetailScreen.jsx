import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../../theme/colors';

export default function MonthDetailScreen({ route }) {
  const { month } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{month} Summary</Text>
      <Text style={styles.muted}>Charts + data go here</Text>
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
    fontSize: 22,
    color: COLORS.text,
    fontWeight: '700',
  },
  muted: {
    color: COLORS.muted,
    marginTop: 10,
  },
});
