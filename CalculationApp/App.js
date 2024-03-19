import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

export default function App() {
  const [inputSets, setInputSets] = useState([{ number1: '', number2: '', number3: '', result: '' }]);

  const addInputSet = () => {
    setInputSets([...inputSets, { number1: '', number2: '', number3: '', result: '' }]);
  };

  const calculateResult = () => {
    const newInputSets = inputSets.map(set => {
      const calculationResult = (set.number1 * set.number1 * set.number2) / 11664;
      const formattedResult = parseFloat(calculationResult.toFixed(3));
      const priceResult = formattedResult * parseFloat(set.number3);
      return { ...set, result: `${priceResult.toFixed(3)}` };
    });
    setInputSets(newInputSets);
  };

  const updateInputSet = (index, field, value) => {
    const newInputSets = [...inputSets];
    newInputSets[index][field] = value;
    setInputSets(newInputSets);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      marginTop: 100,
    },
    scrollViewHorizontal: {
      borderWidth: 1,
      borderColor: 'black',
      paddingHorizontal: 20, // Padding inside the ScrollView for horizontal content
    },
    headerText: {
      minWidth: 90,
      marginHorizontal: 10, // Adjusted for consistent spacing
      textAlign: 'center',
      fontWeight: 'bold',
    },
    inputRow: {
      flexDirection: 'row',
      alignItems: 'center', // This ensures vertical alignment of items within the row
      marginBottom: 10,
    },
    input: {
      borderWidth: 1,
      padding: 10,
      minWidth: 90,
      marginHorizontal: 10, // Adjusted for consistent spacing
      textAlign: 'center',
    },
    resultText: {
      minWidth: 90,
      marginHorizontal: 10, // Ensure consistent margin with TextInput
      textAlign: 'center',
      // Adding padding to match the height of TextInput if needed
      paddingVertical: 10, // Adjust this based on your TextInput styling
    },
    calculateButton: {
      marginVertical: 20,
    },
  });



  return (
    <ScrollView style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={true}
        style={styles.scrollViewHorizontal}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View>
          <View style={styles.inputRow}>
            <Text style={styles.headerText}>Index</Text>
            <Text style={styles.headerText}>Diameter</Text>
            <Text style={styles.headerText}>Height</Text>
            <Text style={styles.headerText}>Price per Unit</Text>
            <Text style={styles.headerText}>Results</Text>
          </View>
          {inputSets.map((set, index) => (
            <View key={index} style={styles.inputRow}>
              <Text style={styles.headerText}>{index + 1}</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="Diameter"
                value={set.number1}
                onChangeText={(text) => updateInputSet(index, 'number1', text)}
              />
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="Height"
                value={set.number2}
                onChangeText={(text) => updateInputSet(index, 'number2', text)}
              />
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="Price"
                value={set.number3}
                onChangeText={(text) => updateInputSet(index, 'number3', text)}
              />
              <Text style={styles.resultText}>{set.result}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.calculateButton}>
        <Button title="Add Column" onPress={addInputSet} />
        <Button title="Calculate" onPress={calculateResult} />
      </View>
    </ScrollView>
  );
}
