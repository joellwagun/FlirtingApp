import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');  // Get the screen width

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
  <Image source={require('../../Assets/images/chat.png')} style={styles.image} />

  <Text style={styles.heading}>Get better at flirting and messaging</Text>
  
  {/* Button placed in the middle, before the description */}
  <TouchableOpacity 
    style={styles.button}
    onPress={() => navigation.navigate('Login')}
  >
    <Text style={styles.buttonText}>Get Started</Text>
  </TouchableOpacity>

  <Text style={styles.description}>
    Learn how to make the first move, ask for a date, and more. All the tips are backed by science.
  </Text>
</View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',  // Align items starting from the top
    alignItems: 'center',
    backgroundColor: '#FFFFFF',  // White background
  },
  image: {
    width: screenWidth,  // Full width of the screen
    height: 300,  // Adjust height as needed
    resizeMode: 'cover',  // Cover the width and height of the view
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333333',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#6E6E6E',
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#FF007F',  // Pink button
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default WelcomeScreen;
