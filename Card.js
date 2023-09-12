import React from 'react';
import { Text } from 'react-native'
import {StyleSheet,View} from 'react-native';
export default function Card(){
    return(
        <View>
        < View style={styles.card1}>
        <View style={styles.cardContent1}>
            <Text style={styles.fn}>Earn assured digital{'\n'}gold  for every payment</Text>
            <Text></Text>
            <View style={styles.button}>
            <Text style={styles.btext}>Know More</Text> 
            
            </View>
            <Text></Text>
        </View>
        </View> 


        < View style={styles.card}>
        <View style={styles.cardContent}>
            <Text style={styles.fn}>Hi</Text>
        </View>
        </View> 


        < View style={styles.card}>
        <View style={styles.cardContent}>
            <Text style={styles.fn}>Hi</Text>
        </View>
        </View> 


        < View style={styles.card}>
        <View style={styles.cardContent}>
            <Text style={styles.fn}>Hi</Text>
        </View>
        </View> 



        </View>
    );
}

const styles = StyleSheet.create({
    card:{
        borderRadius:20,
        elevation:15,
        backgroundColor:'#3660a3',
        shadowOffset:{width:1,height:1},
        shadowColor:'#333',
        shadowOpacity:0.1,
        height:130,
        width:380,
        shadowRadius:2,
        // marginHorizontal:10,
        marginVertical:9
    },
    button:{
        borderRadius:20,
        elevation:4,
        shadowOffset:{width:1,height:1},
        shadowColor:'#333',
        backgroundColor:'#3660a3',
        width:170,
        marginTop:8,
        // marginLeft:2,
        height:45,
        marginBottom:5,
        shadowOpacity:0.1,
    },
    btext:{
      alignContent:'center',
      marginTop:10,
    marginLeft:19
    },
    card1:{
        borderRadius:20,
        elevation:15,
        // backgroundColor:'#3660a3',
        backgroundColor:'#002D62',
        // backgroundColor:'#5072A7',
        shadowOffset:{width:1,height:1},
        shadowColor:'#333',
        shadowOpacity:0.1,
        height:150,
        width:380,
        shadowRadius:2,
        marginVertical:9
    },
    cardContent:{
        marginHorizontal:9,
        marginVertical:10,
    },
    cardContent1:{
        marginHorizontal:9,
        marginVertical:10,
    },
    fn:{
        fontSize:18,
        color:'white',
        fontWeight:"bold"
    }
})