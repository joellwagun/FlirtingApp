import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const MainMenuScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title="Flirting Tips" onPress={() => navigation.navigate('FlirtingTips')} />
      <Button title="Messaging Lines" onPress={() => navigation.navigate('MessagingLines')} />
      <Button title="Favorites" onPress={() => navigation.navigate('Favorites')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});

export default MainMenuScreen;
