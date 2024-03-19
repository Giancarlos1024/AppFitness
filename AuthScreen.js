import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

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
  
    try {
      const response = await fetch('http://192.168.1.14:3000/login', {
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
    <View style={styles.container}>
      <Image source={require('./assets/user.png')} style={styles.userImage} />
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
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
  userImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});

export default AuthScreen;
