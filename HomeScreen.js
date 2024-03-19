import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importa los iconos de Ionicons

import { ExerciseImages, NutritionImages } from './data';
const HomeScreen = ({ navigation, route }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const goToProfile = () => {
    const { email } = route.params; // Obtener el correo electrónico de los parámetros de la ruta
    navigation.navigate('Profile', { email }); // Pasar el correo electrónico como parámetro
  };
  

  const cerrarSesion = () => {
    navigation.navigate('Auth');
  };

  const goToProgress = () => {
    const { email } = route.params;
    navigation.navigate('Progress', { email }); // Pasar el correo electrónico como parámetro
  };

  const goToDailyTraining = () => {
    navigation.navigate('DailyTraining');
  };

  const goToExerciseSuggestions = () => {
    navigation.navigate('ExerciseSuggestions');
  };

  const goToNutritionRecommendations = () => {
    navigation.navigate('NutritionRecommendations');
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a MundoFit</Text>
      <Text style={styles.subtitle}>¡Tu compañero de fitness!</Text>
      <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
        <Ionicons name="menu" size={24} color="black" />
      </TouchableOpacity>
      {menuVisible && (
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem} onPress={goToProfile}>
            <Ionicons name="person" size={24} color="black" />
            <Text style={styles.menuItemText}>Perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={goToProgress}>
            <Ionicons name="trending-up" size={24} color="black" />
            <Text style={styles.menuItemText}>Progreso</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={goToDailyTraining}>
            <Ionicons name="calendar" size={24} color="black" />
            <Text style={styles.menuItemText}>Entrenamiento del Día</Text>
          </TouchableOpacity>
          {/* Nuevas secciones */}
          <TouchableOpacity style={styles.menuItem} onPress={goToExerciseSuggestions}>
            <Ionicons name="fitness" size={24} color="black" />
            <Text style={styles.menuItemText}>Sugerencias de Ejercicios</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={goToNutritionRecommendations}>
            <Ionicons name="nutrition" size={24} color="black" />
            <Text style={styles.menuItemText}>Recomendaciones de Nutrición</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={cerrarSesion}>
            <Ionicons name="log-out" size={24} color="black" />
            <Text style={styles.menuItemText}>Cerrar Sesión</Text>
          </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity style={styles.imagelog}>
        <Text style={styles.additionalContent}>
          ¡Empieza tu día con energía y motivación!
        </Text>
        <Image source={require('./assets/logofit.jpg')} style={styles.imageEM} />
      </TouchableOpacity>

      <View style={styles.imageContainer}>
        <Text style={styles.imageText}>Sugerencias de Ejercicios</Text>
        <View style={styles.row}>
          {ExerciseImages.map((image, index) => (
            <TouchableOpacity key={index} style={styles.imageButton}>
              <Image source={image.uri} style={styles.image} />
              <Text style={styles.imageButtonText}>{image.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Text style={styles.imageText}>Recomendaciones de Nutrición</Text>
        <View style={styles.row}>
          {NutritionImages.map((image, index) => (
            <TouchableOpacity key={index} style={styles.imageButton}>
              <Image source={image.uri} style={styles.image} />
              <Text style={styles.imageButtonText}>{image.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <Text style={styles.additionalContent}>
        Descubre nuevos desafíos y supera tus límites.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // Establece la posición relativa
  },
  title: {
    color: 'red',
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  subtitle: {
    color: 'gray',
    fontSize: 18,

  },
  additionalContent: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  menuButton: {
    position: 'absolute',
    top: 10,
    left: 10, // Ajusta la posición a la izquierda
    zIndex: 1, // Asegura que el botón del menú esté por encima del contenido
  },
  menuContainer: {
    position: 'absolute',
    top: 50,
    left: 10, // Ajusta la posición a la izquierda
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    elevation: 5,
    zIndex: 2, // Asegura que el menú esté por encima del contenido
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  menuItemText: {
    marginLeft: 10,
    fontSize: 16,
  },
  imageContainer: {
    flexDirection: 'column',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  imageButton: {
    alignItems: 'center',
  },
  image: {
    width: 130,
    height: 100,
    resizeMode: 'cover',
    marginBottom: 10,
    margin:10,
  },
  imageText: {
    textAlign: 'center',
    marginTop: 5,
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
    
  },
  imageButtonText: {
    textAlign: 'center',
    marginTop: 5,
    color: 'black', // Puedes ajustar el color del texto según tus preferencias
    fontStyle:'italic'
  },
  imagelog: {
    margin:40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageEM: {
    width: 150,
    height: 150,
    borderRadius: 75, // Esto hará que la imagen tenga forma de círculo
  },
});

export default HomeScreen;
