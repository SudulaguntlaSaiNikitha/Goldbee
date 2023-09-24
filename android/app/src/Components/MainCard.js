import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function MainCard() {
    return (
        <View>
            <View style={styles.card1}>
                <View>
                    {/* <Image
                        source={require('../assests/goldbee.jpg')}
                        style={{ width: 50, height: 50, marginLeft: 189, marginTop: 9, borderRadius: 300 }}
                    /> */}
                    {/* <Text style={{fontSize:17,marginLeft:130,verticalHeight:7,color:'black'}}>Hi Goldbee Truster</Text> */}
                    <Text style={{ fontSize: 17, marginLeft: 60, verticalHeight: 7, fontWeight: 'bold', verticalHeight: 8, color: 'black' }}>Get 24k Gold for Free with Every Purchase</Text>
                </View>
                <View style={[styles.card, styles.androidProp]}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <View style={styles.box}>
                            <Image
                                source={require('../assests/gold-coin.gif')}
                                style={{ width: 40, height: 40, marginHorizontal: 7, marginTop: 10, borderRadius: 300 }}
                            />
                        </View>
                        <View style={{ marginLeft: 20, marginTop: 15 }}>
                            <Text style={styles.txt}>0.000gms</Text>
                            <Text style={styles.txt}>Gold Balance</Text>
                        </View>
                        <Image
                            source={require('../assests/coin1.gif')}
                            style={{ width: 40, height: 70, marginLeft: 45, marginTop: 6, overflow: 'hidden', borderEndWidth: 10, resizeMode: 'stretch' }}
                            resizeMode='contain' />
                        <View >
                            <View style={styles.arrowsContainer}>
                                <Text style={styles.arrow}>&#8646;</Text>
                            </View>
                        </View>
                        <Image
                            source={require('../assests/rupee1.jpg')}
                            style={{ width: 30, height: 30, marginTop: 7, overflow: 'hidden', borderEndWidth: 10, resizeMode: 'stretch', borderRadius: 56 }}
                            resizeMode='contain' />
                    </View>
                    <View style={styles.line} />
                    <View style={styles.cont}>
                        <Text style={styles.leftText}>Total gold purchased</Text>
                        <Text style={styles.rightText}>0.000 gms</Text>
                    </View>
                    <View style={styles.cont1}>
                        <Text style={styles.leftText}> Free gold earned</Text>
                        <Text style={styles.rightText}>0.000 gms</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    card1: {
        backgroundColor: '#ffcb5b',
        // borderRadius: 20,
        height: 240,
        width: 430,
        marginTop: -10,
        marginLeft: 6,
        marginTop: 10,
    },
    card: {
        // backgroundColor: '#fcedc5',
        // backgroundColor:'#f0ead2',
        // backgroundColor:'#fffe7a',
        // backgroundColor:'#FBD5AB',
        // backgroundColor:'#f5f3f0',
        backgroundColor: 'white',
        // backgroundColor:'#ebe9e6',
        borderRadius: 20,
        height: 200,
        width: 370,
        marginTop: 30,
        // padding:23,
        marginLeft: 30,
        // marginTop:180,
    },
    txt: {
        // color: '#800000',
        color: '#f4c430',
        lineHeight: 30,
        fontWeight: '600',
        fontWeight: 'bold',
    },

    arrowsContainer: {
        flexDirection: 'column',

    },
    arrow: {
        color: '#f4c430',
        fontWeight: '800',
        fontSize: 35,
        marginLeft: 3,
    },
    line: {
        height: 1,
        backgroundColor: 'grey',
        width: '89%',
        marginLeft: 20,
        marginTop: 25,
    },
    leftText: {
        fontWeight: 'bold',
        fontSize: 14,
        fontWeight: 'bold',
        // color:'#07149c',
        marginLeft: 18,
        // color:'#f4c430',
        // color:'#800000'
    },
    rightText: {
        fontSize: 14,
        fontWeight: 'bold',
        marginRight: 18,
        // color:'#800000'
        // color:'#f4c430',
    },
    cont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 14,
    },
    cont1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },


    androidProp: {
        shadowColor: '#333',
        elevation: 10,
    },
    box: {
        width: 60,
        height: 60,
        backgroundColor: 'white',
        borderRadius: 50,
        shadowColor: 'grey',
        shadowOffset: { width: 10, height: 200 },
        // shadowOpacity: 0.9,
        // shadowRadius: 10,
        // elevation: 4, // For Android
        marginLeft: 20,
        marginTop: 18,

    },

});