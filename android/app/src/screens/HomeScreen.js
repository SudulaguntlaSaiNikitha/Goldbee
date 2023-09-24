
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import React from 'react';
import MainCard from '../Components/MainCard'
import Categories from '../Components/Categories.js'
import Features from '../Components/Features.js'

import HighBrands from '../Components/HighBrands.js'
import AppHeader from '../Components/AppHeader.js';
// import Drawer from './android/app/src/Components/Drawer1.js';
import NewMyntra from '../Components/NewMyntra.js';
// import NewMyntra1 from './android/app/src/Components/NewMyntra1.js';
import { SafeAreaView } from 'react-navigation';
export default function HomeScreen() {
    return (
        <View style={{ "flex": 2, "alignItems": 'center' }}>
            < View>
                {/* <SafeAreaView> */}
                <AppHeader />
                {/* <SafeAreaView></SafeAreaView> */}
                <ScrollView>
                    <View style={{ marginVertical: -11 }}>
                        {/* <MainCard/> */}
                        <MainCard />
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <ScrollView>
                            <Features />
                            <Categories />
                            <HighBrands />

                        </ScrollView>
                    </View>
                </ScrollView>
                {/* </SafeAreaView> */}
                {/* <Test1/>  */}
                {/* <View style={{backgroundColor:'#78feff',height:200}}>
      </View> */}
                {/* <AppHeader/> */}
                {/* <AppHeader/>
      <View style={{backgroundColor:'#78feff',height:220}}>
      <ScrollView>
      <MainCard/>
      </ScrollView>
      </View> */}
                {/* </View> */}
                {/* <MainCard/> */}
                {/* </View> */}
                {/* <ScrollView>
      <Features/>
        <Categories/>
        <HighBrands/>
        <Features/>
        <Categories/>
        <HighBrands/>
        </ScrollView> */}
                {/* </View> */}
                {/* <Comp1/> */}
                {/* <Drawer/> */}
                {/* <ScrollView> */}
                {/* <Test1/> */}
                {/* <NewMyntra/> */}
                {/* <NewMyntra1/> */}
                {/* </ScrollView> */}
                {/* <ScrollView>
        {/* <Comp1/> */}
                {/* <MainCard/>
        <Features/>
        <Categories/>
        <HighBrands/>
        <Features/>
        <Categories/>
        <HighBrands/>
     </ScrollView> */}
            </View>
        </View>
    )
}
