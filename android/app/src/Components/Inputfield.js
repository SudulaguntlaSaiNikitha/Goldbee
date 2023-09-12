import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';

const CustomInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [isEditable, setIsEditable] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

  const handleInputClick = () => {
    setIsEditable(true);
  };

  const handleInputChange = (text) => {
    // Validate if the input is a number within the range [100, 200]
    const numericValue = parseInt(text, 10);
    if (isNaN(numericValue) || numericValue < 100 || numericValue > 200) {
      setErrorMessage('Enter a number between 100 and 200');
      setIsSubmitEnabled(false);
    } else {
      setErrorMessage('');
      setIsSubmitEnabled(true);
    }

    setInputValue(text);
  };

  const handleSubmit = () => {
    // Show an alert with the entered value only when enabled
    if (isSubmitEnabled) {
      alert(`Amount value : ₹ ${inputValue}`);

    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleInputClick} activeOpacity={0.7}>
        <View
          style={[
            styles.inputContainer,
            isEditable ? styles.inputHighlighted : styles.inputDull,
          ]}
        >
          <TextInput
            style={styles.input}
            value={inputValue}
            onChangeText={handleInputChange}
            placeholder="Enter Amount"
            keyboardType="numeric"
            editable={isEditable}
          />
        </View>
      </TouchableOpacity>
      <Text style={styles.errorMessage}>{errorMessage}</Text>

      {/* Replace the Button with an Input field */}
      <TouchableOpacity
        style={[
          styles.submitField, // Apply the same styling as the submit button
          { backgroundColor: isSubmitEnabled ? 'blue' : 'lightgray' }, // Dynamic background color
        ]}
        onPress={handleSubmit} // Handle the submit action when enabled
        disabled={!isSubmitEnabled} // Disable the button when not enabled
      >
        <Text style={{ color: 'white', fontSize: 18, textAlign: 'center' }}>Pay ₹100</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    width: 350,
    height: 50,
    marginTop: 70,
    borderRadius: 10,
    elevation: 90,
    paddingLeft: 10,
    paddingRight: 10,
  },
  inputDull: {
    backgroundColor: 'lightgray',
    borderColor: 'gray',
    borderWidth: 0,
  },
  inputHighlighted: {
    backgroundColor: 'white',
    borderColor: 'blue', // Highlight color
    borderWidth: 0,
  },
  input: {
    flex: 1,
  },
  errorMessage: {
    color: 'red',
    marginTop: 5,
  },
  // Styling for the input field (formerly the submit button)
  submitField: {
    width: 290,
    height: 50,
    marginTop: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomInput;
