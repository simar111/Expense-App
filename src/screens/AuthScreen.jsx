import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthHeader from '../components/AuthHeader';
import AuthTabs from '../navigation/AuthTabs';
import { COLORS } from '../theme/colors';

export default function AuthScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <AuthHeader />

        <View style={styles.tabsWrapper}>
          <AuthTabs />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  tabsWrapper: {
    flex: 1,
    backgroundColor: COLORS.background,
    borderRadius: 20,
    overflow: 'hidden',
  },
});
