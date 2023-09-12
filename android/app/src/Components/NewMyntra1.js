import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import Inputfield from './Inputfield';
import ProcessDropdown from './ProcessDropdown';
export default function NewMyntra1() {
  return (
    <View style={{marginTop:30}}>
      {/* <Text>NewMyntra1</Text> */}
      <View style={styles.container}>
      {/* Card Container */}
      <View style={styles.card}>
        {/* Image */}
        <Image
          source={require('../assests/Myntra.png')} // Replace with your image path
          style={styles.image}
        />
        {/* Text Message Enclosed in Dotted Border */}
        <View style={styles.dottedBorder}>
          <Text style={styles.messageText}>
          Earn 10% digital Gold
          </Text>
        </View>
        {/* Small Message and Buttons */}
        <View style={styles.smallMessageContainer}>
          <Text style={styles.smallMessage}>Modes Available </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Online</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Offline</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{marginTop:-200}}>
      <ProcessDropdown/>
      </View>
<View style={{marginTop:-460}} >
<Inputfield/>
</View>
    </View>
    </View>
  )
}



const styles = StyleSheet.create({
    container: {
     
      justifyContent: 'center',
      alignItems: 'center',
    },
    card: {
      backgroundColor: 'white',
      width: 380,
      padding: 20,
      borderRadius: 10,
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      elevation: 12,
    },
    image: {
      width: '100%',
      height: 100,
      borderRadius: 10,
      marginBottom: 10,
    },
    dottedBorder: {
      borderWidth: 1,
      borderColor: '#cc7722',
      borderColor:'grey',
      borderStyle: 'dashed',
      padding: 10,
      marginBottom: 10,
    },
    messageText: {
      fontSize: 16,
      marginLeft:65,
      color:'blue'
    },
    smallMessageContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    smallMessage: {
      flex: 1,
      fontSize: 14,
      // marginLeft:15,
      marginRight: 10,
    },
    buttonContainer: {
      flexDirection: 'row',
    },
    button: {
      backgroundColor: '#d3e0d9',
      paddingVertical: 8,
      shadowColor:'black',
      paddingHorizontal: 12,
      elevation:10000,
      borderRadius: 205,
      marginRight: 10,
    },
    buttonText: {
      color: '#87898a',
      fontSize: 14,
    },
  });
  
