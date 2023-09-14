import { StyleSheet, View, Text,Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'


export default function Comp1() {
  return (
    <View>
      <View style={[styles.card, styles.androidProp]}>
        <Text style={[styles.boxText, styles.text]}> Goldbee </Text>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
        <Image
          source={require('../assests/pg.jpg')} // Replace with your image path
          style={styles.image}
        />
          <View style={{ flexDirection: 'row' }}>
            <Image
          source={require('../assests/bell2.png')} 
          style={{width:30,height:30,borderRadius:50,marginTop:4,marginRight:20}}
        />
          </View>
        </View>
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
  boxText: {
    paddingLeft: 10,
  },
  text: {
    fontSize: 16,
    color:'#CC7722',
    fontWeight:'bold',
    // color: '#800000',
    paddingTop: 8,
  },
  card: {
    backgroundColor:'#ffcb5b',
    height: 100,
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    // backgroundColor:'#78feff',
    marginLeft:8,
    width: 425,
borderWidth:0,
    // marginTop:5,
  },

  androidProp: {
    // borderColor:'black',
    // borderBottomWidth:0.5,
    // marginLeft:7,
    // shadowColor: 'blue',
    // elevation: 20,
  },
  image:{
  borderRadius:20,
  elevation:23,
  width:50,
  marginLeft:12,
  height:50,
  }

});