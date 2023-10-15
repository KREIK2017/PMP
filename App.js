import React, { useState } from 'react';
import { View, Text, TextInput, Button, SafeAreaView, StyleSheet } from 'react-native';

export default function App() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);
  const [backgroundColor, setBackgroundColor] = useState(`rgb(${red}, ${green}, ${blue})`);

  const updateColor = () => {
    setBackgroundColor(`rgb(${red}, ${green}, ${blue})`);
  };

  const increaseSize = () => {
    setWidth((prevWidth) => prevWidth + 10);
    setHeight((prevHeight) => prevHeight + 10);
  };

  const decreaseSize = () => {
    setWidth((prevWidth) => prevWidth - 10);
    setHeight((prevHeight) => prevHeight - 10);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: width,
          height: height,
          backgroundColor: backgroundColor,
        }}
      ></View>
      <TextInput
        placeholder="Введіть R (0-255)"
        keyboardType="numeric"
        onChangeText={(text) => setRed(text)}
      />
      <TextInput
        placeholder="Введіть G (0-255)"
        keyboardType="numeric"
        onChangeText={(text) => setGreen(text)}
      />
      <TextInput
        placeholder="Введіть B (0-255)"
        keyboardType="numeric"
        onChangeText={(text) => setBlue(text)}
      />
      <Button title="Змінити колір" onPress={updateColor} />
      <View style={styles.buttonContainer}>
        <View style={styles.buttonContainer1}>
          <Button title="+" onPress={increaseSize} />
        </View>
        <View style={styles.buttonContainer1}>
          <Button title="-" onPress={decreaseSize} />
        </View>
      </View>
      <View style={styles.tableContainer}>
        <View style={styles.tableRow}>
          <View style={styles.tableCell}></View>
          <View style={styles.tableCell}></View>
          <View style={styles.tableCell}></View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCell}></View>
          <View style={styles.tableCell}></View>
          <View style={styles.tableCell}></View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCell}></View>
          <View style={styles.tableCell}></View>
          <View style={styles.tableCell}></View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  buttonContainer1: {
    height: 50,
    width: 50,
    marginRight: 10,
  },
  tableContainer: {
    flexDirection: 'column',
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCell: {
    width: 50,
    height: 50,
    backgroundColor: 'lightgray',
    margin: 5,
  },
});
