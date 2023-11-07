import React, { useState } from 'react';
import { View, Text, Image, FlatList, SafeAreaView, StyleSheet } from 'react-native';

const initialImages = [
  { id: '1', source: require('../assets/image/31512.jpg') },
  { id: '2', source: require('../assets/image/23322162.jpg') },
  { id: '3', source: require('../assets/image/Wallpaper.png') },
  // Додайте більше зображень за потреби, вказавши власні шляхи до файлів.
];

const GalleryScreen = () => {
  const [images, setImages] = useState(initialImages);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Галерея</Text>
      <FlatList
        data={images}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={item.source} style={styles.image} />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

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
  imageContainer: {
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 200,
  },
});

export default GalleryScreen;
