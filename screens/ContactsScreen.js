import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, SafeAreaView, StyleSheet } from 'react-native';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');

  const addContact = () => {
    if (contactName.trim() !== '' && contactPhone.trim() !== '') {
      const newContact = {
        id: Math.random().toString(),
        name: contactName,
        phone: contactPhone,
      };
      setContacts([...contacts, newContact]);
      setContactName('');
      setContactPhone('');
    }
  };

  const deleteContact = (contactId) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== contactId);
    setContacts(updatedContacts);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Контакти</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ім'я контакту"
          onChangeText={(text) => setContactName(text)}
          value={contactName}
        />
        <TextInput
          style={styles.input}
          placeholder="Телефон контакту"
          onChangeText={(text) => setContactPhone(text)}
          value={contactPhone}
        />
        <Button title="Додати контакт" onPress={addContact} />
      </View>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.contact}>
            <Text style={styles.contactName}>{item.name}</Text>
            <Text style={styles.contactPhone}>{item.phone}</Text>
            <Button title="Видалити контакт" onPress={() => deleteContact(item.id)} />
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
    marginTop: 30,
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
  contact: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  contactPhone: {
    fontSize: 16,
    color: 'gray',
  },
});
