import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../theme/colors';

export default function TransactionItem({
  title,
  amount,
  category = 'General',
  date = '',
}) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View style={styles.iconWrapper}>
          <Icon name="cash-minus" size={20} color={COLORS.primary} />
        </View>

        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.category}>{category}</Text>
        </View>
      </View>

      <View style={styles.right}>
        <Text style={styles.amount}>{amount}</Text>
        {date ? <Text style={styles.date}>{date}</Text> : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.card,
    padding: 14,
    borderRadius: 14,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    height: 36,
    width: 36,
    borderRadius: 18,
    backgroundColor: COLORS.background,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  title: {
    color: COLORS.text,
    fontSize: 16,
    fontWeight: '500',
  },
  category: {
    color: COLORS.muted,
    fontSize: 13,
    marginTop: 2,
  },
  right: {
    alignItems: 'flex-end',
  },
  amount: {
    color: COLORS.text,
    fontWeight: '600',
    fontSize: 15,
  },
  date: {
    color: COLORS.muted,
    fontSize: 12,
    marginTop: 2,
  },
});
