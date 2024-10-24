import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MessagingLinesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Here are some amazing messaging lines!</Text>
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

export default MessagingLinesScreen;
