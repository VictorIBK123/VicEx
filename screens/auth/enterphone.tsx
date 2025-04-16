import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, Dimensions } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';

const {height, width} = Dimensions.get('window');
import { NavigationProp } from '@react-navigation/native';

interface EnterPhoneScreenProps {
    navigation: NavigationProp<any>;
}

const EnterPhoneScreen: React.FC<EnterPhoneScreenProps> = ({navigation}) => {
    
    return (
        <View style={styles.container}>
            <Text style={styles.enterPhone}>Enter Phone number</Text>
            <Text style={styles.verificationCode}>We'll send you a verification code</Text>
            <View style={styles.phoneNumberContainer}>
                <View style={styles.countryNumber}>
                    <Image source={require('../../assets/flag.png')} style={{height:19, width:26.13}} />
                    <Text style={styles.code}>+1</Text>
                    <AntDesign name="down" size={16} color="#6B777F" />
                </View>
                <TextInput maxLength={20} value='(506) 210-0661' style={styles.numberInput}  />
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate("verify_phone")} style={styles.continueContainer}>
                <Text style={styles.continue}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    verificationCode:{
        fontWeight:'500',
        fontSize:16,
        color:'#6B777F',
        marginBottom:40
    },
    enterPhone: {
        fontSize: 28,
        color: '#0C263A',
        fontWeight: 'bold',
        marginBottom:15
    },
    phoneNumberContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:50
    },
    countryNumber:{
        flexDirection:'row',
        width:30/100 * width,
        paddingHorizontal:10,
        backgroundColor:'white',
        paddingVertical:14,
        elevation:10,
        borderRadius:10,
        marginRight:10,
        justifyContent:'space-between'
    },
    numberInput:{
        width:60/100 * width,
        paddingHorizontal:10,
        backgroundColor:'white',
        paddingVertical:10,
        elevation:10,
        borderRadius:10,
        fontSize:16,
        color:'#6B777F',
        fontWeight:'400'
    },
    continueContainer:{
        width:90/100*width,
        borderRadius:20,
        paddingVertical:13,
        backgroundColor:'#22A37C'
    },
    continue:{
        color:'white',
        textAlign:'center',
        fontSize:16,
        fontWeight:'bold'
    },
    code:{
        fontSize:16,
        fontWeight:'400', 
        color:'#6B777F'
    }
});

export default EnterPhoneScreen;