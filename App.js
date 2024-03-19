// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './WelcomeScreen'; // Importar la pantalla de bienvenida
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import AuthScreen from './AuthScreen';
import RegisterScreen from './RegisterScreen';
import ProgressScreen from './ProgressScreen';
import DailyTrainingScreen from './DailyTrainingScreen';
import ExerciseSuggestionsScreen from './ExerciseSuggestionsScreen';
import NutritionRecommendationsScreen from './NutritionRecommendationsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome"> 
        <Stack.Screen name="Welcome" component={WelcomeScreen} /> 
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Progress" component={ProgressScreen} />
        <Stack.Screen name="DailyTraining" component={DailyTrainingScreen} />
        <Stack.Screen name="ExerciseSuggestions" component={ExerciseSuggestionsScreen} />
        <Stack.Screen name="NutritionRecommendations" component={NutritionRecommendationsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
