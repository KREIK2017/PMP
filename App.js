import React, { useState } from 'react';
import { Button, StyleSheet, Alert } from 'react-native';
import { Input, Heading, NativeBaseProvider, Text, Center, Stack } from 'native-base';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Словник логінів і паролів
  const users = {
    user123: 'password123',
    testuser: 'testpassword',
    // Додайте більше логінів і паролів за потреби
  };

  const styles = StyleSheet.create({
    containerTop: {
      marginTop: 40,
      alignItems: 'center',
    },
    center: {
      height: 40,
      borderRadius: 10,
      backgroundColor: 'lightgray',
    },
    input: {
      borderWidth: 3,
      borderColor: 'gray',
      borderRadius: 8,
      padding: 10,
      marginTop: 10,
      marginBottom: 10,
    },
  });

  const userLogin = () => {
    if (users[email] === password) {
      // Успішна авторизація
      Alert.alert('Успішна авторизація', 'Авторизація пройшла успішно', [
        {
          text: 'OK',
        },
      ]);
    } else {
      // Помилка авторизації
      Alert.alert('Помилка авторизації', 'Неправильний логін або пароль', [
        {
          text: 'OK',
        },
      ]);
    }
  };

  return (
    <NativeBaseProvider>
      <Stack style={styles.containerTop}>
        <Heading>Registration</Heading>
      </Stack>

      <Center style={styles.center}>Email:</Center>
      <Input
        placeholder="Enter Email..."
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
        value={email}
      />

      <Center style={styles.center}>Password:</Center>
      <Input
        placeholder="Enter Password..."
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true} // Пароль приховується
      />

      <Button title="Увійти" onPress={userLogin}>
        <Text>Увійти</Text>
      </Button>
    </NativeBaseProvider>
  );
}
