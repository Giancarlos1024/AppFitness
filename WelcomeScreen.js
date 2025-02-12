import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  const handleStartPress = () => {
    navigation.replace('Auth'); // Redirigir a la pantalla de inicio de sesión al hacer clic en "Empezar"
  };

  const handleRegisterPress = () => {
    navigation.navigate('Register'); // Ir a la pantalla de registro al hacer clic en "Registrarse"
  };

  return (
    <ImageBackground
      source={require('./assets/Logo3.jpg')} // Ruta de la imagen de fondo
      style={styles.background}
    >
      <View style={styles.container}>
        
        <Text style={styles.title}>Bienvenido a GianFitPro</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleStartPress}>
            <Text style={styles.buttonText} >Empezar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.registerButton} onPress={handleRegisterPress}>
            <Text style={styles.registerButtonText}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Ajusta la imagen para que cubra todo el contenedor
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    width: 300,
    height: 300,
    borderRadius: 150, // Hacer el contenedor redondo
    overflow: 'hidden', // Ocultar cualquier parte del logo que se salga del contenedor redondo
    marginBottom: 20,
  },
  logo: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover', // Ajusta la imagen para que cubra todo el contenedor
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    marginTop:14,
    fontWeight:'bold',
    color: 'rgba(18, 16, 16, 0.97)', // Cambia el color del texto para que sea visible en el fondo
    textShadowColor: 'rgba(0, 0, 0, 0.75)', // Color de la sombra
    textShadowOffset: { width: 10, height: 10 }, // Offset de la sombra
    textShadowRadius: 10, // Radio de la sombra
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 50, // Espacio desde la parte inferior de la pantalla
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Negro con opacidad del 50%
    paddingVertical: 18,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Negro con opacidad del 50%
    paddingVertical: 18,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 10,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
