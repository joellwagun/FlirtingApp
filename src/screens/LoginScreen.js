import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.signupText}>Sign up</Text>
      <Text style={styles.heading}>
        Join 10,000+ people and get better at flirting
      </Text>

      <TextInput 
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#C39EA0"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput 
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#C39EA0"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.googleButton}>
        <Text style={styles.socialButtonText}>Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.appleButton}>
        <Text style={styles.socialButtonText}>Continue with Apple</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Log In</Text>
      </TouchableOpacity>

      <Text style={styles.termsText}>
        By continuing, you agree to the Terms of Use. Read our Privacy Policy.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5E7E7',
    paddingHorizontal: 20,
  },
  signupText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4D4D4D',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4D4D4D',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#F9EDED',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 15,
    color: '#4D4D4D',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#FF007F',
    width: '100%',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  googleButton: {
    backgroundColor: '#E3E3E3',
    width: '100%',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 15,
  },
  appleButton: {
    backgroundColor: '#E3E3E3',
    width: '100%',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  socialButtonText: {
    color: '#4D4D4D',
    fontSize: 16,
  },
  loginText: {
    color: '#4D4D4D',
    fontSize: 16,
    marginBottom: 20,
  },
  termsText: {
    fontSize: 12,
    color: '#A29F9F',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default LoginScreen;
