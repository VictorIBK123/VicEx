import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { data } from '../data/selloffers';

import { NavigationProp } from '@react-navigation/native';

type ExchangeRatesProps = {
    navigation: NavigationProp<any>;
};

const ExchangeRates: React.FC<ExchangeRatesProps> = ({ navigation }) => {

    // Define the type for the data items
    type ExchangeRateItem = {
        id: string;
        user: string;
        action: string;
        rate: string;
    };
    
    const renderItem = ({ item }: { item: ExchangeRateItem }) => (
        <View style={styles.itemContainer} >
            <View style={styles.unContainer}>
                <Text style={styles.un}>UN</Text>
            </View>
            <View style={styles.ratesContainer}>
                <Text style={styles.user}>{item.user}</Text>
                <Text style={styles.rate}>{item.rate}</Text>
            </View>
            <View style={styles.buyingSellingContainer}>
                <Text style={styles.buyingSelling}>{item.action}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.liveExchangeRatesContainer}>
                <Text style={styles.liveExchangeRates} >Live exchange rates</Text>
            </View>
            <FlatList
                style={styles.flatList}
                contentContainerStyle={styles.flatlistContentContainer}
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
            <View style={styles.footerContainer}>
                <TouchableOpacity onPress={()=>navigation.navigate('create_account')} style={[styles.bestRateContainer,{backgroundColor: '#22A37C'}]}>
                    <Text style={[styles.bestRate,{color:'white'}]}>Get Started</Text>
                </TouchableOpacity> 
                <View style={styles.alreadyHaveAccountContainer}>
                    <Text style={styles.alreadyHaveAccount}>Already have an account? <Text style={{color:'#2563EB'}}>Login</Text></Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,    
    },
    liveExchangeRates: {
        fontSize:18,
        fontWeight:'400',
        
    },
    liveExchangeRatesContainer:{
        marginBottom:5,
        flex:1/10
    },
    itemContainer:{
        flexDirection:'row',
        alignItems:'center',
        flex:1
    },
    un:{
        color:'#22A37C',
        fontSize:20,
        fontWeight:'500',
        textAlign:'center',
    },
    unContainer:{
        padding:10,
        backgroundColor:'#61CE701A',
        marginBottom:8,
        borderRadius:50,
        flex:1.5/10,
        alignSelf:'center'
    },
    ratesContainer:{
        flex:7/10,
        paddingLeft:20,
        alignSelf:'center',
        justifyContent:'center',
    },
    buyingSellingContainer:{
        flex:2.5/10
    },
    buyingSelling:{
        fontWeight:'500',
        fontSize:15,
        textAlign:'center',
        color:'#22A37C'
    },
    user:{
        fontWeight:'400',
        fontSize:15,
        color:'#0C263A'
    },
    rate:{
        fontSize:13,
        fontWeight: '400',
        color:'#6B777F'
    },
    flatlistContentContainer:{
        backgroundColor:'white', 
        paddingHorizontal:10, 
        paddingVertical:20,
        borderRadius:5
    },
    flatList:{
        flex:6/10,
    },
    bestRateContainer:{
        borderWidth:1,
        width:'90%',
        paddingVertical:15,
        borderColor:'#0C263A',
        borderRadius:20,
        marginBottom:20
    },
    bestRate:{
        textAlign:'center',
        fontWeight:'600',
        fontSize:16,
        color:'#0C263A'
    },
    alreadyHaveAccountContainer:{

    },
    alreadyHaveAccount:{
        fontSize:16,
        fontWeight:'500',
        letterSpacing:0
    },
    footerContainer:{
        flex:3/10, 
        justifyContent:'center', 
        alignItems:'center', 
        marginTop:10
    }
});

export default ExchangeRates;