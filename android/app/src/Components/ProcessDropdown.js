import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const Dropdown = ({ options, selectedValue, onValueChange }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleOptionSelect = (item) => {
    // onValueChange(item);
    toggleDropdown();
  };

  return (
    <View style={styles.dropdownContainer}>
      <TouchableOpacity onPress={toggleDropdown} style={styles.dropdownHeader}>
        <Text style={styles.dropdownHeaderText}> Click here -- for the process</Text>
      </TouchableOpacity>
      {isDropdownVisible && (
        <View style={styles.dropdownOptions}>
       
          {options.map((item) => (
            
            <TouchableOpacity
              key={item}
              onPress={() => handleOptionSelect(item)}
              style={styles.optionItem}
            >

              <Text style={styles.optionText}><View style={{  backgroundColor: '#82a6c2',width:20,height:20,borderRadius:10}}></View>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    width: '80%',
    alignSelf: 'center',
    borderWidth: 1,
    width:390,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
    elevation: 3, // Add shadow for card effect
  },
  dropdownHeader: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    // borderBottomWidth: 1,
    // borderBottomColor: '#ccc',
  },
  dropdownHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  dropdownOptions: {
    maxHeight: 400,
    height:320,
    width:390,
    overflowY: 'scroll', // Add scroll for options if they exceed maxHeight
  },
  optionItem: {
    paddingVertical: 10,
  
    paddingHorizontal: 15,
    // borderBottomWidth: 1,
    // borderBottomColor: '#ccc',
  },
  optionText: {
    marginTop:10,
    fontSize: 16,
    color: '#333',
  },
});

// Example usage:
const ProcessDropdown= () => {
  const options = ['  Select the mode of shopping.',
  '   Select the amount.',
  '   Click "Pay".',
  '   Payment Sucessfull.',
  '   Earn Digital Gold.',];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleValueChange = (value) => {
    setSelectedOption(value);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Dropdown
        options={options}
        selectedValue={selectedOption}
        // onValueChange={handleValueChange}
      />
    </View>
  );
};

export default ProcessDropdown;