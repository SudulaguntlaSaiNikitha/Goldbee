
import {StyleSheet,View,Text, ScrollView} from 'react-native';
import React from 'react'
import MainCard from './android/app/src/Components/MainCard.js'
import Categories from './android/app/src/Components/Categories.js'
import Features from './android/app/src/Components/Features.js'

import HighBrands from './android/app/src/Components/HighBrands.js'
export default function App() {
  return (
    <View style={{"flex" : 2, "alignItems" : 'center'}}>
      < View>
      <ScrollView>
   <MainCard/>
     <Features/>
     <Categories/>
     <HighBrands/>
     </ScrollView>

    </View>
    </View>
  )
}
