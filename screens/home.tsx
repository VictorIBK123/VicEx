import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Pressable, TouchableOpacity, FlatList } from 'react-native';
import { Feather, FontAwesome6, MaterialIcons, Octicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { data } from '../data/selloffers';

interface ExchangeRateItem {
    user: string;
    rate: string;
    action: string;
}

const HomeScreen = () => {
    const [height1, setHeight1] = React.useState(0);
    const [width1, setWidth1] = React.useState(0);
    const measeureBalanceContainer = (event: { nativeEvent: { layout: { width: number; height: number; }; }; }) => {
        const { width, height} = event.nativeEvent.layout;
        setWidth1(width)
        setHeight1(height)
    }
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
            <FlatList
                ListHeaderComponent={()=>(
                    <View>
                    <View style={styles.header}>
                        <Image  style={styles.avatar} source={require('../assets/avatar.png')} />
                        <Text style={styles.headerText}>Welcome back, Walter</Text>
                        <View style={styles.notificationIconContainer}>
                            <MaterialIcons style={styles.notificationIcon} name="notifications" size={24} color="black" />
                            <Octicons style={styles.notificationBadge} name="dot-fill" size={15} color="red" />
                        </View>
                    </View>
                    <Text style={styles.idCheck}>Complete ID Check</Text>
                    <Text style={styles.verifyIdentity}>Verify your identity to access features</Text>
                    <LinearGradient
                        colors={['#0D3D2E','#22A37C']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={[styles.balanceandothersContainer, ]}
                        onLayout={measeureBalanceContainer}
                    >
                        <Image style={[styles.wallet,{top:height1/2 - 25, bottom:width1/2 - 20}]} source={require('../assets/wallet.png')} />
                        <Text style={styles.currentBalance}>Current balance</Text>
                        <View style={styles.currencyContainer}>
                            <Text style={styles.currency}>CAD. O.OO</Text>
                            <Pressable>
                                <Feather  name="eye-off" size={15} color="white" />
                            </Pressable>
                        </View>
                    </LinearGradient>
                    <View style={styles.actions}>
                        <TouchableOpacity>
                            <Image source={require('../assets/add.png')} />
                            <Text style={styles.actionsText}>Fund wallet</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../assets/swap.png')} />
                            <Text style={styles.actionsText} >Swap</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../assets/buysell.png')} />
                            <Text style={styles.actionsText}>Buy/Sell</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../assets/withdraw.png')} />
                            <Text style={styles.actionsText}>Withdraw</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.allOffersContainer}>
                    <View style={styles.offerTextandSeeAllContainer}>
                        <Text style={{fontSize:17, fontWeight:'500'}}>Sell Offers</Text>
                        <TouchableOpacity>
                            <Text style={{color:'#004BEC', fontSize:14, fontWeight:'400'}}>See all</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                </View>
                    )}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.flatlistContentContainer}
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                 />
            
            
        </View>
    );
};

const styles = StyleSheet.create({
    allOffersContainer:{
        marginTop:30,
    },
    offerTextandSeeAllContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:20,
    },
    container: {
        flex: 1,
        paddingTop:50,
        paddingHorizontal:15,
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:15,
    },
    avatar:{
        height:40,
        width:40,
        borderRadius:50,
        marginRight:10
    },
    headerText:{
        fontSize:20,
        fontWeight:'500'
    },
    notificationIconContainer:{

    },
    notificationIcon:{

    },
    notificationBadge:{
        position:'absolute',
        right:0,
        top:-5
    },
    idCheck:{
        fontSize:15,
        fontWeight:'500',
        textAlign:'center',
        paddingHorizontal:10,
        paddingVertical:8,
        backgroundColor: '#E99B36',
        color:'white',
        width:160,
        borderRadius:5,
        marginBottom:5
    },
    verifyIdentity:{
        fontSize:13,
        color:'#6B777F',
        marginBottom:5
    },
    balanceandothersContainer:{
        alignItems:'center',
        paddingVertical:18,
        borderRadius:10
    },
    wallet:{
        position:'absolute',
        left:20,
        height:50,
        width:50
    },
    currency:{
        color:'white', 
        marginRight:10, 
        fontWeight:'500', 
        fontSize:22
    },
    currencyContainer:{
        flexDirection:'row', 
        alignItems:'center'
    },
    currentBalance:{
        color:'white', 
        marginBottom:5, 
        fontSize:14
    },
    actions:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        marginTop:20,
    },
    actionsText:{
        textAlign:'center',
        fontSize:13
    },
    itemContainer:{
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:'center',
        flex:1,
        paddingHorizontal:10,
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
        borderRadius:5,
    },
});

export default HomeScreen;