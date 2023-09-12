import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';

function Modelpopup() {
  const [showModal, setShowModal] = useState(false);

  // Text points to display in the pop-up
  const textPoints = [
    'Point 1: Select the mode of shopping.',
    'Point 2: Select the amount.',
    'Point 3: Click "Pay".',
    'Point 3: Payment Sucessfull.',
    'Point 3: Earn Digital Gold.',
  ];

  return (
    <View style={{marginTop:60,marginLeft:10}} >
      <TouchableOpacity onPress={() => setShowModal(true)}>
        <Text style={{color:'#1E90FF',fontSize:10,fontWeight:'bold'}}>VIEW CARD</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View
            style={{
              backgroundColor: 'white',
              padding: 20,
              borderRadius: 10,
              elevation: 5,
              width: '300',
            }}
          >
            <Text style={{ fontSize: 18, marginBottom: 10, fontWeight: 'bold' }}>
              Text Points
            </Text>
            {textPoints.map((point, index) => (
              <Text key={index} style={{ marginBottom: 5 }}>
                {point}
              </Text>
            ))}
            <TouchableOpacity onPress={() => setShowModal(false)}>
              <Text style={{ color: 'blue', marginTop: 10 }}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default Modelpopup;
