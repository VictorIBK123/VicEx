import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { NavigationProp } from '@react-navigation/native';

interface SplashScreenProps {
    navigation: NavigationProp<any>;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/globe.png')} style={{height:194.29, width:192.13}} />
            </View>
            <View style={styles.exchangeCurrenciesContainer}>
                <Text style={styles.exchangeCurrencies}>{`Exchange currencies with ease and confidence, anytime, anywhere.`}</Text>
            </View>
            <TouchableOpacity  onPress={()=>navigation.navigate('exchange_rates')} style={styles.bestRateContainer}>
                <Text style={styles.bestRate} >View Best Rate Now</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('create_account')} style={[styles.bestRateContainer,{backgroundColor: '#22A37C', borderWidth:0}]}>
                <Text style={[styles.bestRate,{color:'white'}]}>Get Started</Text>
            </TouchableOpacity> 
            <View style={styles.alreadyHaveAccountContainer}>
                <Text style={styles.alreadyHaveAccount}>Already have an account? <Text style={[styles.alreadyHaveAccount, {color:'#2563EB',}]}>Login</Text></Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    imageContainer:{
        marginBottom:20
    },
    exchangeCurrenciesContainer:{
        marginBottom:30
    },
    exchangeCurrencies: {
        textAlign:'center', 
        fontWeight:'500', 
        fontSize:20, 
        letterSpacing:-0.3, 
        marginHorizontal:20,
    },
    bestRateContainer:{
        borderWidth:1,
        width:'85%',
        paddingVertical:12,
        borderColor:'#0C263A',
        borderRadius:20,
        marginBottom:20
    },
    bestRate:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:16,
        color:'#0C263A'
    },
    alreadyHaveAccountContainer:{
        
    },
    alreadyHaveAccount:{
        fontSize:16,
        fontWeight:'bold',
        letterSpacing:0,
        
    }
});

export default SplashScreen;