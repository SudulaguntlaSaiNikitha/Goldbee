
import {StyleSheet,View,Text, ScrollView} from 'react-native';
import React from 'react';
import MainCard from './android/app/src/Components/MainCard.js'
 import Categories from './android/app/src/Components/Categories.js'
import Features from './android/app/src/Components/Features.js'

import HighBrands from './android/app/src/Components/HighBrands.js'
import AppHeader from './android/app/src/Components/AppHeader.js';
// import Drawer from './android/app/src/Components/Drawer1.js';
import NewMyntra from './android/app/src/Components/NewMyntra.js';
// import NewMyntra1 from './android/app/src/Components/NewMyntra1.js';
import { SafeAreaView } from 'react-navigation';
export default function App() {
  return (
    <View style={{"flex" : 2, "alignItems" : 'center'}}>
      < View>
      {/* <SafeAreaView> */}
      <AppHeader/>
      {/* <SafeAreaView></SafeAreaView> */}
      <ScrollView>
      <View style={{marginVertical:-11}}>
      {/* <MainCard/> */}
      <MainCard/>
      </View>
      <View style={{marginTop:100}}>
      <ScrollView>
      <Features/>
        <Categories/>
        <HighBrands/>
        <Features/>
        <Categories/>
        <HighBrands/>
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
