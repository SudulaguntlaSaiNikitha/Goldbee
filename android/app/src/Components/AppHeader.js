import { StyleSheet, View, Text, } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'


export default function Comp1() {
  return (


    <View>
      <View style={[styles.card, styles.androidProp]}>
        <Text style={[styles.boxText, styles.text]}> Welcome </Text>




        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
          <Text style={{ color: '#07149c', fontWeight: "700", fontSize: 16 }}>Guest User</Text>
          <View style={{ flexDirection: 'row' }}>
            <Icon name="user" size={25} color="gray" style={{ marginRight: 10 }} />
            <Icon name="bell" size={23} color="gray" />
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
    fontSize: 15,
    color: '#800000',
    paddingTop: 8,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    height: 80,
    width: 360,
    marginTop:5,
  },

  androidProp: {
    shadowColor: 'blue',
    elevation: 20,
  },

});