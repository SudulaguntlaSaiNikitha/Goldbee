import React, { useState } from 'react';
import { View, TextInput,Text, TouchableOpacity, StyleSheet } from 'react-native';

const PayButton1 = () => {
  const [inputValue, setInputValue] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleButtonClick = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleButtonClick} style={styles.button}>
        <Text style={styles.buttonText}>PAY ₹100</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:-6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'lightblue', // Button background color
    padding: 10,
    width:370,
    height:50,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    marginLeft:130,
    fontWeight:'bold',
    fontSize: 16,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginTop: 20,
  },
  focusedInput: {
    backgroundColor: 'lightgray', // Dull shade background color when focused
  },
});

export default PayButton1;
