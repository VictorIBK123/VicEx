import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../screens/home';
import WalletScreen from '../screens/wallet';
import OrdersScreen from '../screens/orders';
import CardsScreen from '../screens/cards';
import { Image } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function TabApp() {
    return (
        <Tab.Navigator  tabBarPosition='bottom' >
            <Tab.Screen 
                name="home" 
                component={HomeScreen} 
                options={{
                    title: 'HOME',
                    tabBarIcon: () => (
                        <Image source={require('../assets/home.png')} />
                    )
                }} 
            />
            <Tab.Screen 
                name="wallet" 
                component={WalletScreen} 
                options={{
                    title: 'WALLET',
                    tabBarIcon: () => (
                        <Image source={require('../assets/empty-wallet.png')} />
                    )
                }} 
            />
            <Tab.Screen 
                name="orders" 
                component={OrdersScreen} 
                options={{
                    title: 'ORDERS',
                    tabBarIcon: () => (
                        <Image source={require('../assets/Group.png')} />
                    )
                }} 
            />
            <Tab.Screen 
                name="cards" 
                component={CardsScreen} 
                options={{
                    title: 'CARDS',
                    tabBarIcon: () => (
                        <Image source={require('../assets/card-tick.png')} />
                    )
                }} 
            />
        </Tab.Navigator>
    );
}