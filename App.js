import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, SafeAreaView, StyleSheet } from 'react-native';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim() !== '') {
      const newTask = {
        id: Math.random().toString(),
        title: task,
      };
      setTasks([...tasks, newTask]);
      setTask('');
    }
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((item) => item.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Органайзер справ</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Введіть справу"
          onChangeText={(text) => setTask(text)}
          value={task}
        />
        <Button title="Додати" onPress={addTask} />
      </View>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.task}>
            <Text>{item.title}</Text>
            <Button title="Видалити" onPress={() => deleteTask(item.id)} />
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop:30,
    marginBottom: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginRight: 8,
  },
  task: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});
