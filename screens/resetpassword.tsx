import React from 'react';
import { View, StyleSheet,Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Fontisto, MaterialCommunityIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

const ResetPassword:React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.weHaveSent}>Enter your email address and we’ll send you OTP verification code.</Text>
            <View style={{width:'80%', flex:2/10}}>
                <Text style={styles.label}>E-mail</Text>
                <View style={styles.inputView}>
                    <Fontisto style={styles.iconB4} name="email" size={18} color="black" />
                    <TextInput style={styles.textInput1} placeholder='Email' />
                </View>
            </View>
            <TouchableOpacity style={styles.submitButtonContainer}>
                <Text style={styles.submit}>Proceed</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.submitButtonContainer, {backgroundColor:'#00000000'}]}>
                <Text style={[styles.submit,{color:'#0C263A', fontWeight:'500'}]}>Return to login</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center'
    },
    weHaveSent:{
        fontSize:14,
        fontWeight:'500',
        textAlign:'center',
        paddingHorizontal:25,
        color:'#6B777F',
        marginBottom:20,
        flex:2/10,
        marginTop:30,
        
    },
    submitButtonContainer:{
        backgroundColor:'#22A37C',
        width:80/100 *Dimensions.get('window').width,
        paddingHorizontal:20,
        paddingVertical:5,
        alignSelf:'center',
        borderRadius:20,
        flex:1/10,
        marginTop:20,
        justifyContent:'center'
    },
    submit:{
        color:'white',
        fontSize:16,
        textAlign:'center',
        fontWeight:'700'
    },
 
    label:{
        alignItems:'center',
        fontSize:14,
        marginBottom:10
    },
    inputView:{
        flexDirection:'row',
        backgroundColor:'white',
        elevation:10,
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:10,
        marginBottom:12
    },
    iconB4:{
        alignSelf:'center',
        marginRight:10,

    },
    textInput1:{
        alignSelf:'center',
    },
});

export default ResetPassword;