import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleNavigateToContacts = () => {
    navigation.navigate('ContactsScreen');
  };

  const handleNavigateToGallery = () => {
    navigation.navigate('GalleryScreen');
  };

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <View style={styles.buttonContainer}>
        <Button title="Contacts" onPress={handleNavigateToContacts} />
        <View style={styles.buttonSpacing} /> 
        <Button title="Gallery" onPress={handleNavigateToGallery} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  buttonSpacing: {
    marginRight: 10, // Додайте відстань між кнопками, наприклад, 10 пікселів
  },
});

export default HomeScreen;
