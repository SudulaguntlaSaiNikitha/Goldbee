import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Modelpopup from './Modelpopup';

const cardData = [
  {
    id: 1,
    imageSource: require('../assests/bitcoin.png'), // Image 1 source
    title: 'Flipkart Card',
    title2:'            Sucess',
    title3:'1:30 PM',
    color:'#24c98f',
    title4:'19 Apr 2023',
  },
  {
    id: 2,
    imageSource: require('../assests/bitcoin.png'), // Image 2 source
    title: 'Myntra Card',
    title2:'               Retry',
    color:'red',
    title3:'10:30 AM',
    title4:'1 JAN 2023',
  },
  {
    id: 3,
    imageSource: require('../assests/bitcoin.png'), // Image 3 source
    title: 'Flipkart Card',
    title2:'          Processing',
    color:'gold',
    title3:'10:30 AM',
    title4:'19 Apr 2023',
  },
  {
    id: 4,
    imageSource: require('../assests/bitcoin.png'), // Image 4 source
    title: 'Myntra Card',
    title2:'            Sucess',
    color:'#24c98f',
    title3:'7:00 pM',
    title4:'1 Mar 2021',
  },
  {
    id: 4,
    imageSource: require('../assests/bitcoin.png'), // Image 4 source
    title: 'Flipkart Card',
    title2:'        Processing',
    color:'gold',
    title3:'7:00 pM',
    title4:'1 Mar 2021',
  },
  {
    id: 4,
    imageSource: require('../assests/bitcoin.png'), // Image 4 source
    title: 'Myntra Card',
    title2:'           Failed',
    color:'red',
    title3:'7:00 pM',
    title4:'1 Mar 2021',
  },
];

const CardComponent = ({ data }) => {
  return (
    <View style={styles.card}>
    <View style={{flexDirection:'row'}}>
      <View style={{elevation:10,width:20,height:30,borderRadius:50}}>
      <Image
        source={ data.imageSource }
        style={styles.image}
      />
      </View>
      <Text style={{fontSize: 16,
    fontWeight: '500',marginTop:1,marginLeft:15,color:'#595c59'}}>{data.title}</Text>
    <Text style={{fontSize: 14,
    fontWeight: '500',marginTop:1,marginLeft:100,color:'#24c98f',color:data.color}}>{data.title2}</Text>
      </View>
    <View style={{flexDirection:'row'}}>
      <Text style={{ fontSize: 11, marginTop: 17,marginLeft:32}}>{data.title3}</Text>
      <Text style={{ fontSize: 11, marginTop: 17,marginLeft:32}}>{data.title4}</Text>
      <View style={{elevation:3,width:90,height:35,backgroundColor:'white',marginLeft:88,marginTop:9,borderRadius:3}}><Text style={{padding:11}}><Modelpopup/></Text></View>
      </View>
    </View>
  );
};

const NewCard = () => {
  return (
    <View style={styles.container}>
      {cardData.map(card => (
        <CardComponent key={card.id} data={card} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 16,
    marginLeft:-15,
    marginRight:-9
  },
  card: {
    width: 400,
    height:110,
    backgroundColor:'#ffffff',
    borderRadius: 23,
    padding: 16,
    marginBottom: 16,
    marginLeft:10,
    shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 490,
  },
  image: {
    width: 25,
    height: 25,
    borderRadius: 50,
  
  },

  
});

export default NewCard;
