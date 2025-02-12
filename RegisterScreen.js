import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    fechaNacimiento: '',
    email: '',
    contrasena: '',
    confirmarContrasena: ''
  });

  const handleRegister = async () => {
    try {
      // Validación de campos obligatorios
      if (!formData.nombres || !formData.apellidos || !formData.fechaNacimiento || !formData.email || !formData.contrasena || !formData.confirmarContrasena) {
        console.error('Todos los campos son obligatorios');
        return;
      }
  
      // Validación de formato de correo electrónico
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        console.error('Correo electrónico inválido');
        return;
      }
  
      // Validación de coincidencia de contraseñas
      if (formData.contrasena !== formData.confirmarContrasena) {
        console.error('Las contraseñas no coinciden');
        return;
      }
  
      // Si todas las validaciones pasan, enviar la solicitud al servidor
      const response = await fetch('http://192.168.1.109:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      console.log('Respuesta del servidor:', response); // Agrega un console.log para ver la respuesta del servidor
  
      if (response.ok) {
        navigation.replace('Auth');
      } else {
        console.error('Error al registrar usuario:', response.statusText);
        // Maneja el error de registro
      }
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      // Maneja el error de red
    }
  };

  const handleChangeText = (key, value) => {
    setFormData(prevState => ({
      ...prevState,
      [key]: value
    }));
  };
  const handleStartPress = () => {
    navigation.replace('Auth'); // Redirigir a la pantalla de inicio de sesión al hacer clic en "Empezar"
  };
  return (
    <ImageBackground source={require('./assets/Logo3.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Registro</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombres Completos"
          onChangeText={text => handleChangeText('nombres', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Apellidos Completos"
          onChangeText={text => handleChangeText('apellidos', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Fecha de Nacimiento DD-MM-AAAA"
          onChangeText={text => handleChangeText('fechaNacimiento', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Correo Electrónico"
          keyboardType="email-address"
          onChangeText={text => handleChangeText('email', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry={true}
          onChangeText={text => handleChangeText('contrasena', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirmar Contraseña"
          secureTextEntry={true}
          onChangeText={text => handleChangeText('confirmarContrasena', text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleStartPress}>
          <Text style={styles.buttonText} >Iniciar cerrarSesion</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
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

export default RegisterScreen;
