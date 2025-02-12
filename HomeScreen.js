import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importa los iconos de Ionicons
const HomeScreen = ({ navigation, route }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [backgroundIndex, setBackgroundIndex] = useState(0); // Estado para controlar el índice de la imagen de fondo

  const backgrounds = [require('./assets/Fondo.jpg'), require('./assets/Fondo2.jpg'), require('./assets/Fondo3.jpg'),require('./assets/Fondo4.jpg')]; // Lista de imágenes de fondo

  useEffect(() => {
    // Función para cambiar la imagen de fondo cada 5 segundos
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000);

    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
  }, []);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const goToProfile = () => {
    const { email } = route.params;
    navigation.navigate('Profile', { email });
  };

  const cerrarSesion = () => {
    navigation.navigate('Auth');
  };

  const goToProgress = () => {
    const { email } = route.params;
    navigation.navigate('Progress', { email });
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
    <ImageBackground
      source={backgrounds[backgroundIndex]}
      style={styles.container}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Bienvenido a GianFitPro</Text>
        <Text style={styles.subtitle}>¡Tu compañero de fitness!</Text>
        <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
          <Ionicons name="menu" size={24} color="#fff" />
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
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageContainer} onPress={goToExerciseSuggestions}>
          <Text style={styles.imageText}>Sugerencias de Ejercicios</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageContainer} onPress={goToNutritionRecommendations}>
          <Text style={styles.imageText}>Recomendaciones de Nutrición</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  subtitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight:'bold'
  },
  additionalContent: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
    color:'#fff',
    fontWeight:'bold'
  },
  menuButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
  menuContainer: {
    position: 'absolute',
    top: 50,
    left: 10,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    elevation: 5,
    zIndex: 2,
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
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 10,
  },
  imageText: {
    textAlign: 'center',
    marginTop: 5,
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  imagelog: {
    margin:40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageEM: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
});

export default HomeScreen;
