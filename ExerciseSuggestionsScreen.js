import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';
import { ExerciseSuggestionsData } from './data';

const ExerciseSuggestionsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sugerencias de Ejercicios</Text>
      <Text style={styles.subtitle}>¡Encuentra inspiración para tu rutina de ejercicios!</Text>
      {Object.keys(ExerciseSuggestionsData).map((exerciseKey) => (
        <View key={exerciseKey} style={styles.exerciseContainer}>
          <Image source={ExerciseSuggestionsData[exerciseKey].image} style={styles.exerciseImage} />
          <View style={styles.textContainer}>
            <Text style={styles.exerciseTitle}>{exerciseKey.charAt(0).toUpperCase() + exerciseKey.slice(1)}</Text>
            <Text style={styles.exerciseDescription}>{ExerciseSuggestionsData[exerciseKey].description}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: '#666',
  },
  exerciseContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    elevation: 3,
  },
  exerciseImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    marginLeft: 15,
  },
  exerciseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  exerciseDescription: {
    fontSize: 16,
    color: '#666',
  },
});

export default ExerciseSuggestionsScreen;
