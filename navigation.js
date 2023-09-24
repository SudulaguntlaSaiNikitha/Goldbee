import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './android/app/src/screens/HomeScreen';
import PartnerBrands from './android/app/src/screens/PartnerBrands';

const Tab = createBottomTabNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Tab.Screen name="Partner Brands" component={PartnerBrands} options={{ headerShown: false }} />
            </Tab.Navigator>
        </NavigationContainer>

    );
}

export default Navigation;