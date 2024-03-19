import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';
import { NutritionRecommendationsData } from './data';

const NutritionRecommendationsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Recomendaciones de Nutrición</Text>
      <Text style={styles.subtitle}>¡Descubre consejos útiles para una alimentación saludable!</Text>
      {Object.keys(NutritionRecommendationsData).map((recommendationKey) => (
        <View key={recommendationKey} style={styles.recommendationContainer}>
          <Image source={NutritionRecommendationsData[recommendationKey].image} style={styles.recommendationImage} />
          <View style={styles.textContainer}>
            <Text style={styles.recommendationTitle}>{recommendationKey.charAt(0).toUpperCase() + recommendationKey.slice(1)}</Text>
            <Text style={styles.recommendationDescription}>{NutritionRecommendationsData[recommendationKey].description}</Text>
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
  recommendationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    elevation: 3,
  },
  recommendationImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    marginLeft: 15,
  },
  recommendationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  recommendationDescription: {
    fontSize: 16,
    color: '#666',
  },
});

export default NutritionRecommendationsScreen;
