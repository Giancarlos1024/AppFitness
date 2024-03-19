import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    fechaNacimiento: '',
    email: '',
    contraseña: '',
    confirmarContraseña: ''
  });

  const handleRegister = async () => {
    try {
      console.log('Datos del formulario:', formData); // Agrega un console.log para ver los datos del formulario antes de enviar la solicitud
  
      const response = await fetch('http://192.168.1.14:3000/register', {
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombres"
        onChangeText={text => handleChangeText('nombres', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Apellidos"
        onChangeText={text => handleChangeText('apellidos', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Fecha de Nacimiento"
        onChangeText={text => handleChangeText('fechaNacimiento', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        keyboardType="email-address"
        onChangeText={text => handleChangeText('email', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry={true}
        onChangeText={text => handleChangeText('contraseña', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar Contraseña"
        secureTextEntry={true}
        onChangeText={text => handleChangeText('confirmarContraseña', text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrarse</Text>
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
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
});

export default RegisterScreen;
