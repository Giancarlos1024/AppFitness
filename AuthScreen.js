import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';

const AuthScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    console.log('Email:', email);
    console.log('Contraseña:', password);
  
    if (!email || !password) {
      console.error('El correo electrónico y la contraseña son obligatorios');
      return;
    }
    const isValidEmail = (email) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };
    
    if (!email || !isValidEmail(email)) {
      console.error('Ingrese un correo electrónico válido');
      return;
    }
    if (!password || password.length < 6) {
      console.error('La contraseña debe tener al menos 6 caracteres');
      return;
    }
    
    try {
      const response = await fetch('http://192.168.1.109:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      
      const responseData = await response.json();
      
      console.log('Respuesta del servidor:', responseData);
      
      if (response.ok) {
        navigation.replace('Home', { email }); // Pasar el correo electrónico como parámetro
      } else {
        console.error('Error al iniciar sesión:', responseData.error);
      }
      
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  const handleRegister = () => {
    navigation.replace('Register'); // Redirigir a la pantalla de registro
  };

  const handleWelcome = () => {
    navigation.replace('Welcome'); // Redirigir a la pantalla de bienvenida
  };

  return (
    <ImageBackground source={require('./assets/Logo3.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry={true}
          autoCapitalize="none"
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleWelcome}>
          <Text style={styles.buttonText}>Welcome</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center', // Centrar verticalmente los elementos en el contenedor
    alignItems: 'center', // Centrar horizontalmente los elementos en el contenedor
    marginTop:310
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black', // Color blanco para que sea visible sobre el fondo
  },
  input: {
    width: '90%', // Ampliar el ancho del input al 90% del contenedor
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',// Color de fondo blanco para distinguir los inputs
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default AuthScreen;
