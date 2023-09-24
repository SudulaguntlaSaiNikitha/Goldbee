import React from 'react';
import { View, FlatList, Text, Image, StyleSheet } from 'react-native';


const cardData = [
  {
    id: 1,
    imageSource: require('../assests/game.png'), // Image 1 source
    title: 'Games',
    title2: 'Easily',
    description: 'you can easily earn gold by "payments"',
  },
  {
    id: 2,
    imageSource: require('../assests/Go.jpeg'), // Image 2 source
    title: 'Groceries',
    title2: 'Gold',
    description: 'Very "Trusted" so you can invest here',
  },
  {
    id: 3,
    imageSource: require('../assests/food1.jpeg'), // Image 3 source
    title: '     Food',
    title2: 'Coins',
    description: '"Best & Easy" way to buy gold coins',
  },
  {
    id: 4,
    imageSource: require('../assests/movie.jpg'), // Image 4 source
    title: '  Movies',
    title2: 'Earn Rewards',
    description: 'Get Best  "Rewards" just by refering ',
  },
  {
    id: 6,
    imageSource: require('../assests/ott2.png'), // Image 1 source
    title: '       OTT',
    title2: 'Easily',
    description: 'you can easily earn gold by "payments"',
  },
  {
    id: 7,
    imageSource: require('../assests/travel.gif'), // Image 2 source
    title: '    Travel',
    title2: 'Gold',
    description: 'Very "Trusted" so you can invest here',
  },
  {
    id: 8,
    imageSource: require('../assests/girll.jpg'), // Image 3 source
    title: ' Shopping',
    title2: 'Coins',
    description: '"Best & Easy" way to buy gold coins',
  },
  {
    id: 5,
    imageSource: require('../assests/fur1.jpeg'), // Image 4 source
    title: '  Furniture ',
    title2: 'Earn Rewards',
    description: 'Get Best  "Rewards" just by refering ',
  },
  {
    id: 5,
    imageSource: require('../assests/jewe2.jpeg'), // Image 4 source
    title: '   jewellary',
    title2: 'Earn Rewards',
    description: 'Get Best  "Rewards" just by refering ',
  },
  {
    id: 5,
    imageSource: require('../assests/hotel1.png'), // Image 4 source
    title: '   Hotels',
    title2: 'Earn Rewards',
    description: 'Get Best  "Rewards" just by refering ',
  },
  {
    id: 5,
    imageSource: require('../assests/fit2.png'), // Image 4 source
    title: '  Fitness',
    title2: 'Earn Rewards',
    description: 'Get Best  "Rewards" just by refering ',
  },
];
// Add more data as needed


const SquareCard = ({ item }) => (
  <View>
    <View style={styles.card}>
      <Image source={item.imageSource} style={styles.image} />
      {/* <Text >{item.title}</Text> */}
    </View>
    <Text style={{ marginLeft: 28, fontSize: 15, fontWeight: 'bold' }}>{item.title}</Text>
  </View>
);

const Categories = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cardData}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <SquareCard item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    marginTop: -23,
    // borderRadius:50,
  },
  card: {
    width: 100,
    height: 100,
    backgroundColor: '#ebe9e6',
    margin: 10,
    borderRadius: 50,
    // borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 70,
    height: 60,
    marginTop: 8,
    borderRadius: 30,
    marginBottom: 10,
  },
});

export default Categories;
