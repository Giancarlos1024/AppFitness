import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Modal, Button } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const ProfileScreen = ({ route }) => {
  const { email } = route.params;
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(170);
  const [age, setAge] = useState(25);
  const [modalVisible, setModalVisible] = useState(false);

  const changeWeight = (text) => setWeight(text);
  const changeHeight = (text) => setHeight(text);
  const changeAge = (text) => setAge(text);

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    return (weight / (heightInMeters * heightInMeters)).toFixed(2);
  };

  const bmi = calculateBMI();

  const getWeightCategory = (bmi) => {
    if (bmi < 18.5) {
      return 'Bajo peso';
    } else if (bmi >= 18.5 && bmi < 25) {
      return 'Peso normal (saludable)';
    } else if (bmi >= 25 && bmi < 30) {
      return 'Sobrepeso';
    } else {
      return 'Obesidad';
    }
  };

  const weightCategory = getWeightCategory(bmi);

  const getFitnessGoals = (age) => {
    if (age >= 18 && age <= 30) {
      return '1.Mejorar la fuerza muscular y la resistencia.\n2.Desarrollar hábitos saludables de ejercicio para mantener un estilo de vida activo a largo plazo.\n3.Participar en actividades cardiovasculares como correr, nadar o practicar deportes de equipo para mantener la salud cardiovascular.';
    } else if (age > 30 && age <= 50) {
      return '1.Mantener un peso corporal saludable y prevenir el aumento de peso relacionado con la edad.\n2.Mejorar la flexibilidad y la movilidad para prevenir lesiones y mantener la función física.\n3.Incorporar ejercicios de resistencia para mantener la masa muscular y la densidad ósea.';
    } else {
      return '1.Enfocarse en ejercicios de equilibrio y estabilidad para prevenir caídas y lesiones.\n2.Participar en actividades de bajo impacto para preservar las articulaciones y la salud cardiovascular.\n3.Incorporar ejercicios de fuerza para mantener la masa muscular y la función física a medida que envejecen.';
    }
  };

  const fitnessGoals = getFitnessGoals(age);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil de Usuario</Text>
      <Image
        source={require('./assets/user.png')}
        style={styles.profileImage}
      />
      <Text style={styles.label}>Email: {email}</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Peso (kg)</Text>
        <TextInput
          style={styles.input}
          value={weight.toString()}
          onChangeText={changeWeight}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Altura (cm)</Text>
        <TextInput
          style={styles.input}
          value={height.toString()}
          onChangeText={changeHeight}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Edad (años)</Text>
        <TextInput
          style={styles.input}
          value={age.toString()}
          onChangeText={changeAge}
          keyboardType="numeric"
        />
      </View>
      <Text style={styles.label}>IMC: {bmi}</Text>
      <Text style={styles.label}>Categoría de peso: {weightCategory}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>Ver objetivos de fitness</Text>
      </TouchableOpacity>
      <Modal
  animationType="slide"
  transparent={true}
  visible={modalVisible}
  onRequestClose={() => setModalVisible(false)}>
  <View style={styles.modalContainer}>
    <View style={styles.modalContent}>
      <Text style={styles.modalTitle}>Objetivos de fitness</Text>
      {fitnessGoals.split('\n').map((paragraph, index) => {
        let icon;
        if (paragraph.includes('fuerza muscular') || paragraph.includes('resistencia') || paragraph.includes('ejercicios de fuerza')) {
          icon = 'dumbbell';
        } else if (paragraph.includes('hábitos saludables') || paragraph.includes('estilo de vida activo')) {
          icon = 'heartbeat';
        } else if (paragraph.includes('actividades cardiovasculares') || paragraph.includes('correr') || paragraph.includes('nadar') || paragraph.includes('deportes de equipo') || paragraph.includes('salud cardiovascular')) {
          icon = 'running';
        } else if (paragraph.includes('peso corporal') || paragraph.includes('aumento de peso') || paragraph.includes('peso relacionado') || paragraph.includes('flexibilidad') || paragraph.includes('movilidad')) {
          icon = 'weight';
        } else if (paragraph.includes('resistencia') || paragraph.includes('masa muscular') || paragraph.includes('densidad ósea')) {
          icon = 'dumbbell';
        } else if (paragraph.includes('equilibrio') || paragraph.includes('estabilidad') || paragraph.includes('caídas') || paragraph.includes('lesiones')) {
          icon = 'balance-scale';
        } else if (paragraph.includes('bajo impacto') || paragraph.includes('articulaciones')) {
          icon = 'hand-paper';
        } else {
          icon = 'question';
        }
        return (
          <View key={index} style={styles.goalContainer}>
            <FontAwesome5 name={icon} size={20} color="black" style={styles.icon} />
            <Text style={styles.modalText}>{paragraph}</Text>
          </View>
        );
      })}
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => setModalVisible(false)}>
        <Text style={styles.closeButtonText}>Cerrar</Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 18,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign:'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'justify', // Añadir esta línea
  },
  closeButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default ProfileScreen;
