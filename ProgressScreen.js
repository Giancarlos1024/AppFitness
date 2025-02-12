import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProgressScreen = ({ route }) => {
  const [personalGoal, setPersonalGoal] = useState('');
  const [goals, setGoals] = useState([]);

  const { email } = route.params;

  useEffect(() => {
    const loadGoals = async () => {
      try {
        const userGoals = await AsyncStorage.getItem(email);
        if (userGoals !== null) {
          setGoals(JSON.parse(userGoals));
        }
      } catch (error) {
        console.error('Error retrieving goals from AsyncStorage:', error);
      }
    };
    loadGoals();
  }, [email]);

  useEffect(() => {
    const saveGoals = async () => {
      try {
        await AsyncStorage.setItem(email, JSON.stringify(goals));
      } catch (error) {
        console.error('Error saving goals to AsyncStorage:', error);
      }
    };
    saveGoals();
  }, [email, goals]);

  const handleSetGoal = () => {
    if (personalGoal.trim() !== '') {
      setGoals([...goals, { text: personalGoal, achieved: false }]);
      setPersonalGoal('');
    }
  };

  const handleGoalStatusChange = (index, achieved) => {
    const updatedGoals = [...goals];
    updatedGoals[index].achieved = achieved;
    setGoals(updatedGoals.filter((goal) => !goal.achieved));
  };

  return (
    <ImageBackground source={require('./assets/Logo2.jpg')} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Progreso</Text>
        <Text style={styles.subtitle}>Establecer objetivo personal:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese su objetivo"
          value={personalGoal}
          onChangeText={(text) => setPersonalGoal(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleSetGoal}>
          <Text style={styles.buttonText}>Establecer Objetivo</Text>
        </TouchableOpacity>

        {goals.map((goal, index) => (
          <View key={index} style={styles.goalItem}>
            <Image source={require('./assets/Progress_Objetivo.png')} style={styles.icon} />
            <Text style={styles.goalText}>{goal.text}</Text>
            <View style={styles.statusContainer}>
              <TouchableOpacity
                style={[styles.statusButton, goal.achieved ? styles.achievedButton : null]}
                onPress={() => handleGoalStatusChange(index, true)}
              >
                <Text style={styles.statusButtonText}>✔</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.statusButton, !goal.achieved ? styles.notAchievedButton : null]}
                onPress={() => handleGoalStatusChange(index, false)}
              >
                <Text style={styles.statusButtonText}>❌</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flexGrow: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Fondo semitransparente para mantener la visibilidad del contenido
    alignItems: 'center',
    paddingVertical: 20,
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    color:'black',
    fontWeight:'bold'
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  goalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  goalText: {
    fontSize: 18,
    flex: 1,
    fontWeight:'bold'
  },
  statusContainer: {
    flexDirection: 'row',
  },
  statusButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  statusButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
  },
  achievedButton: {
    backgroundColor: 'green',
    borderColor: 'green',
  },
  notAchievedButton: {
    backgroundColor: 'red',
    borderColor: 'red',
  },
});

export default ProgressScreen;
