import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/home';
import WalletScreen from '../screens/wallet';
import OrdersScreen from '../screens/orders';
import CardsScreen from '../screens/cards';

const Tab = createMaterialTopTabNavigator();

export default function TabApp() {
    return (
        <Tab.Navigator tabBarPosition='bottom' screenOptions={{tabBarStyle:{height:50}, tabBarLabelStyle:{fontSize:15, color:'black'}, tabBarShowLabel: true }}>
            <Tab.Screen name="home" options={{title:'HOME'}} component={HomeScreen} />
            <Tab.Screen name="wallet" options={{title:'WALLET'}} component={WalletScreen} />
            <Tab.Screen name="orders" options={{title:'ORDERS'}} component={OrdersScreen} />
            <Tab.Screen name="cards" options={{title:'CARDS'}}  component={CardsScreen} />
        </Tab.Navigator>
    );
}