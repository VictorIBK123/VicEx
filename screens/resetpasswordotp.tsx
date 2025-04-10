import React from 'react';
import { View, StyleSheet,Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Fontisto, MaterialCommunityIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

const ResetPasswordOtp:React.FC = () => {
    return (
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.weHaveSent}>We have sent an OTP verification code to ki*****w****@gmail.com</Text>
            <View style={styles.textInputsContainer}>
                <TextInput style={styles.textInput} maxLength={1} value='5' />
                <TextInput style={styles.textInput} maxLength={1} value='8' />
                <TextInput style={styles.textInput} maxLength={1} value='2' />
                <TextInput style={styles.textInput} maxLength={1} value='1' />
                <TextInput style={styles.textInput} maxLength={1} value='0' />
                <TextInput style={styles.textInput} maxLength={1} value='6' />
            </View>
            <TouchableOpacity style={[styles.submitButtonContainer, {backgroundColor:'#00000000'}]}>
                <Text style={[styles.submit,{color:'#0C263A', fontWeight:'500'}]}>Didn’t get the code? Resend code (59s)</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.submitButtonContainer}>
                <Text style={styles.submit}>Proceed</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems:'center'
    },
    weHaveSent:{
        fontSize:14,
        fontWeight:'500',
        textAlign:'center',
        paddingHorizontal:25,
        color:'#6B777F',
        marginBottom:40,
        marginTop:30,
        
    },
    submitButtonContainer:{
        backgroundColor:'#22A37C',
        width:85/100 *Dimensions.get('window').width,
        paddingHorizontal:20,
        paddingVertical:15,
        alignSelf:'center',
        borderRadius:20,
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
    textInput:{
        borderWidth:2,
        textAlign:'center',
        borderColor:'#0C263A',
        paddingVertical:10,
        paddingHorizontal:7,
        fontSize:20,
        fontWeight:'500',
        marginHorizontal:5,
        borderRadius:5,
        color:'#0C263A'
    },
    textInputsContainer:{
        flexDirection:'row',
        marginBottom:20,
    },
});

export default ResetPasswordOtp;