import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const cardData = [
  {
    id: 1,
    imageSource: require('../assests/goldmon.jpg'), // Image 1 source
    title: 'Make the Payments through Gift cards',
    title2: 'Gift Cards',
    description: 'Earn Free 24k Gold',
  },
  {
    id: 2,
    imageSource: require('../assests/goldbis.jpg'), // Image 2 source
    title: 'Buy Digital Gold',
    title2: 'Gold',
    description: '24k pure digital gold',
  },
  {
    id: 3,
    imageSource: require('../assests/goldc.jpg'), // Image 3 source
    title: 'Buy Gold coins',
    title2: 'Coins',
    description: 'Low Price & 100% Quality guaranteed',
  },
  {
    id: 4,
    imageSource: require('../assests/goldmon.jpg'), // Image 4 source
    title: 'Refer & Earn',
    title2: 'Earn',
    description: 'Earn Gold every time you refer Friends ',
  },

];

const CardComponent = ({ item }) => {
  return (
    <View style={styles.card}>
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={item.imageSource}
          style={styles.image}
        />
        <Text style={{
          fontSize: 16,
          fontWeight: 'bold', marginTop: 14, marginLeft: 14
        }}>{item.title}</Text>
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
      <View style={{ marginLeft: -50, marginTop: 56 }}>
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
    marginTop: -23,
    // flexWrap: 'wrap',
    marginLeft: 10,
    justifyContent: 'space-between',
    padding: 16,
    paddingTop: 20,
  },
  card: {
    width: 230,
    height: 150,
    // backgroundColor:'#fffee0',
    // backgroundColor: '#ebe9e6',
    backgroundColor: '#fcf2e6',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    marginLeft: 10,
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
