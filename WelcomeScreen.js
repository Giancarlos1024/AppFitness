//WelcomeScreen.js

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  const handleStartPress = () => {
    navigation.replace('Auth'); // Redirigir a la pantalla de inicio de sesión al hacer clic en "Empezar"
  };

  const handleRegisterPress = () => {
    navigation.navigate('Register'); // Ir a la pantalla de registro al hacer clic en "Registrarse"
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MundoFit</Text>
      <Image source={require('./assets/logofit.jpg')} style={styles.logo} />
      <TouchableOpacity style={styles.button} onPress={handleStartPress}>
        <Text style={styles.buttonText} >Empezar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.registerButton} onPress={handleRegisterPress}>
        <Text style={styles.registerButtonText}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 400,
    height: 300,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerButton: {
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
