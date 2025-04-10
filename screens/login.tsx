import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign, Feather, Fontisto } from '@expo/vector-icons';

import { NavigationProp } from '@react-navigation/native';

const Login = ({navigation}: {navigation: NavigationProp<any>}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Login to your account</Text>
            <Text style={styles.label}>E-mail</Text>
            <View style={styles.inputView}>
                <Fontisto style={styles.iconB4} name="email" size={18} color="black" />
                <TextInput style={styles.textInput} placeholder='Email' />
            </View>
            <Text style={styles.label} >Password</Text>
            <View style={styles.inputView}>
                <AntDesign style={styles.iconB4} name="lock" size={18} color="black" />
                <TextInput style={styles.textInput} placeholder='password' />
                <Feather style={styles.eyeIcon} name="eye-off" size={15} color="black" />
            </View>
            <TouchableOpacity style={styles.forgotPasswordContainer}>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('tab')} style={styles.signUpContainer}>
                <Text style={styles.signUp}>Sign up</Text>
            </TouchableOpacity>
            <Text style={styles.alreadyHaveAccount}>Don’t have an account?  <Text style={{color:'#2563EB'}}>Sign up</Text></Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    header:{
        fontSize:20,
        marginBottom:20
    },
    label:{
        alignItems:'center',
        fontSize:14,
        marginBottom:10,
        width:'85%',
    },
    inputView:{
        flexDirection:'row',
        backgroundColor:'white',
        elevation:10,
        paddingVertical:10,
        paddingHorizontal:10,
        borderRadius:10,
        marginBottom:12,
        width:'85%',
    },
    iconB4:{
        alignSelf:'center',
        marginRight:10,

    },
    textInput:{
        alignSelf:'center',
    },
    eyeIcon:{
        position:'absolute',
        right:10,
        alignSelf:'center',
        marginLeft:50
    },
    signUpContainer:{
        backgroundColor:'#22A37C',
        paddingVertical:15,
        borderRadius:20,
        marginTop:20,
        width:'85%'
    },
    signUp:{
        textAlign:'center',
        color:'white',
        fontSize:16,
    },
    alreadyHaveAccount:{
        fontSize:16,
        fontWeight:'500',
        letterSpacing:0,
        textAlign:'center',
        marginTop:10
    },
    forgotPasswordContainer:{
        alignSelf:'flex-end',
        marginRight:20,
    },
    forgotPassword:{
        color:'#2563EB'
    }
});

export default Login;