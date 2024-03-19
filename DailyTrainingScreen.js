import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Modal, Button} from 'react-native';
import exerciseData from './data';

const DailyTrainingScreen = () => {
  const daysOfWeek = Object.keys(exerciseData); // Obtenemos los días de la semana del objeto exerciseData
  const [selectedDay, setSelectedDay] = useState(null); // Estado para almacenar el día seleccionado
  const [modalVisible, setModalVisible] = useState(false); // Estado para controlar la visibilidad del modal
  const [selectedExercises, setSelectedExercises] = useState([]); // Estado para almacenar los ejercicios seleccionados

  const toggleDay = (day) => {
    if (selectedDay === day) {
      setSelectedDay(null); // Si el día seleccionado ya está abierto, ciérralo
    } else {
      setSelectedDay(day); // Si el día seleccionado está cerrado, ábrelo
    }
  };

  const openModal = (day) => {
    setSelectedExercises(exerciseData[day]); // Actualiza los ejercicios seleccionados
    setModalVisible(true); // Abre el modal
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entrenamiento Semanal</Text>
      {daysOfWeek.map((day) => (
        <TouchableOpacity key={day} onPress={() => openModal(day)} style={styles.dayContainer}>
          <Text style={styles.dayTitle}>{day}</Text>
        </TouchableOpacity>
      ))}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
              <FlatList
                data={selectedExercises}
                renderItem={({ item }) => (
                  <View style={styles.item}>
                    <Text style={styles.itemText}>{item.nombre}</Text>
                    <Text style={styles.itemDescription}>{item.descripcion}</Text>
                  </View>
                )}
                keyExtractor={(item, index) => index.toString()}
              />
              <Button title="Cerrar" onPress={() => setModalVisible(false)} />
          </View>
        </View> 
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',

  },
  dayContainer: {
    marginBottom: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'black',

  },
  dayTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
    textAlign: 'center',
  },
  item: {
    marginBottom: 15,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    elevation: 3,
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  itemDescription: {
    fontSize: 16,
    color: '#666',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo oscuro para el modal
  },
  modalView: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    elevation: 5,
    width: '80%',
    maxHeight: '80%',
  },
});

export default DailyTrainingScreen;
