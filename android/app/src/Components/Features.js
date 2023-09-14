import React from 'react';
import { View, Text, Image, StyleSheet,FlatList } from 'react-native';

const cardData = [
  {
    id: 1,
    imageSource: require('../assests/goldmon.jpg'), // Image 1 source
    title: 'Earn Gold      Easily',
    title2:'Easily',
    description: 'you can easily earn gold by "payments"',
  },
  {
    id: 2,
    imageSource: require('../assests/goldbis.jpg'), // Image 2 source
    title: 'Invest In               Gold',
    title2:'Gold',
    description: 'Very "Trusted" so you can invest here',
  },
  {
    id: 3,
    imageSource: require('../assests/goldc.jpg'), // Image 3 source
    title: 'Buy Gold                             Coins',
    title2:'Coins',
    description: '"Best & Easy" way to buy gold coins',
  },
  {
    id: 4,
    imageSource: require('../assests/goldmon.jpg'), // Image 4 source
    title: 'Refer  to Friends',
    title2:'Earn Rewards',
    description: 'Get Best  "Rewards" just by refering ',
  },
  {
    id: 5,
    imageSource: require('../assests/goldmon.jpg'), // Image 1 source
    title: 'Earn Gold      Easily',
    title2:'Easily',
    description: 'you can easily earn gold by "payments"',
  },
  {
    id: 6,
    imageSource: require('../assests/goldbis.jpg'), // Image 2 source
    title: 'Invest In               Gold',
    title2:'Gold',
    description: 'Very "Trusted" so you can invest here',
  },
  {
    id: 7,
    imageSource: require('../assests/goldc.jpg'), // Image 3 source
    title: 'Buy Gold                             Coins',
    title2:'Coins',
    description: '"Best & Easy" way to buy gold coins',
  },
  {
    id: 8,
    imageSource: require('../assests/goldmon.jpg'), // Image 4 source
    title: 'Refer  to Friends',
    title2:'Earn Rewards',
    description: 'Get Best  "Rewards" just by refering ',
  },
];

const CardComponent = ({ item }) => {
  return (
    <View style={styles.card}>
    <View style={{flexDirection:'row'}}>
      <Image
        source={ item.imageSource }
        style={styles.image}
      />
      <Text style={{fontSize: 16,
    fontWeight: 'bold',marginTop:14,marginLeft:14}}>{item.title}</Text>
      </View>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
};

const Features = () => {
  return (
    <View style={styles.container}>
      {/* {cardData.map(card => (
        <CardComponent key={card.id} data={card} />
      ))} */}
      <View style={{marginLeft:-50,marginTop:56}}>
      <FlatList
        data={cardData}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardComponent item={item} />}
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    marginTop:-34,
    // flexWrap: 'wrap',
    marginLeft:10,
    justifyContent: 'space-between',
    padding: 16,
  },
  card: {
    width: 170,
    height:150,
    // backgroundColor:'#fffee0',
    // backgroundColor: '#ebe9e6',
    backgroundColor:'#fcf2e6',
    borderRadius: 10,
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
    elevation: 63,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 70,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    marginTop: 8,
  },
});

export default Features;
