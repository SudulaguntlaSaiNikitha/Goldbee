import React, { useState, useRef } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions,Image } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const data = [
    {
        id: 1,
        imageSource: require('../assests/Myntra.png'), // Image 1 source
        title: '7%',
        title2:'Easily',
        description: 'you can easily earn gold by "payments"',
      },
      {
        id: 2,
        imageSource: require('../assests/Myntra.png'), // Image 2 source
        title: '10%',
        title2:'Gold',
        description: 'Very "Trusted" so you can invest here',
      },
      {
        id: 3,
        imageSource: require('../assests/flip.png'), // Image 3 source
        title: '16%',
        title2:'Coins',
        description: '"Best & Easy" way to buy gold coins',
      },
      {
        id: 4,
        imageSource: require('../assests/bookmyshow.png'), // Image 4 source
        title: '5% ',
        title2:'Earn Rewards',
        description: 'Get Best  "Rewards" just by refering ',
      },
      {
          id: 6,
          imageSource: require('../assests/flip.png'), // Image 1 source
          title: '10 % ',
          title2:'Easily',
          description: 'you can easily earn gold by "payments"',
        },
        {
          id: 7,
          imageSource: require('../assests/flip.png'), // Image 2 source
          title: '12%',
          title2:'Gold',
          description: 'Very "Trusted" so you can invest here',
        },
        {
          id: 8,
          imageSource: require('../assests/bookmyshow.png'), // Image 3 source
          title: '15%',
          title2:'Coins',
          description: '"Best & Easy" way to buy gold coins',
        },
        {
          id: 5,
          imageSource: require('../assests/bookmyshow.png'), // Image 4 source
          title: '17% ',
          title2:'Earn Rewards',
          description: 'Get Best  "Rewards" just by refering ',
        },
//   { id: '1', title: 'Card 1' },
//   { id: '2', title: 'Card 2' },
//   { id: '3', title: 'Card 3' },
//   { id: '4', title: 'Card 4' },
//   { id: '5', title: 'Card 5' },
  // Add more data as needed
];

const cardsPerRow = 3; // Adjust the number of cards per row as needed
const initialCardWidth = (screenWidth - 0 * (cardsPerRow + 1)) / cardsPerRow;
const initialCardHeight = 100; // Adjust card height as needed

const HighBrands = () => {
  const flatListRef = useRef(null);
  const [middleCardIndex, setMiddleCardIndex] = useState(0);

  const handleScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / (initialCardWidth + 20)); // 20 is the horizontal margin
    setMiddleCardIndex(index);
  };

  const renderItem = ({ item, index }) => {
    const isMiddleCard = index === middleCardIndex;
    const cardWidth = isMiddleCard ? initialCardWidth * 1.2 : initialCardWidth;
    const cardHeight = isMiddleCard ? initialCardHeight * 1.2 : initialCardHeight;

    return (
      <View
        style={[
          styles.card,
          {
            width: cardWidth,
            height: cardHeight,
          },
        ]}
      >
       <Image source={item.imageSource } style={styles.image} />
       <View style={styles.line} />
        <Text style={styles.cardText}>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        onMomentumScrollEnd={handleScroll}
        decelerationRate={0.9}
        getItemLayout={(data, index) => ({
          length: initialCardWidth + 20, // 20 is the horizontal margin
          offset: (initialCardWidth + 20) * index,
          index,
        })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  card: {
    // backgroundColor: '#fffee0',
    backgroundColor:'white',
    // backgroundColor:'#ebe9e6',
    marginHorizontal: 20,
    marginBottom: 20, // Adjust vertical margin as needed
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  cardText: {
    fontSize: 20,
    color:'black',

  },
  line: {
    height: 1,
    backgroundColor:'grey',
    // backgroundColor:'#f4c430',
    // backgroundColor: '#cfb53b',
    width: '80%',
    marginLeft: 6,
    marginTop: -5,
    marginBottom:5,
},
  image: {
    width: 100,
    height: 50,
    marginTop:-17,
    borderRadius: 50,
    marginBottom: 10,
  
  },
});

export default HighBrands;
