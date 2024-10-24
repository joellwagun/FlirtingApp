import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FlirtingTipsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Here are some great flirting tips!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FlirtingTipsScreen;
