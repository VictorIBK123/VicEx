import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign, Feather, Fontisto } from '@expo/vector-icons';

import { NavigationProp } from '@react-navigation/native';

const CreateAccount = ({navigation}: {navigation: NavigationProp<any>}) => {
    return (
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.label}>E-mail</Text>
            <View style={styles.inputView}>
                <Fontisto style={styles.iconB4} name="email" size={18} color="black" />
                <TextInput style={styles.textInput} placeholder='Email' />
            </View>
            <Text style={styles.label}>Username</Text>
            <View style={styles.inputView}>
                <TextInput style={styles.textInput} placeholder='Enter unique username' />
            </View>
            <Text style={styles.label} >Create Password</Text>
            <View style={styles.inputView}>
                <AntDesign style={styles.iconB4} name="lock" size={18} color="black" />
                <TextInput style={styles.textInput} placeholder='password' />
                <Feather style={styles.eyeIcon} name="eye-off" size={15} color="black" />
            </View>
            <Text style={styles.label}>Confirm Password</Text>
            <View style={styles.inputView}>
                <AntDesign style={styles.iconB4} name="lock" size={18} color="black" />
                <TextInput style={styles.textInput} placeholder='Confirm Password' />
                <Feather style={styles.eyeIcon} name="eye-off" size={15} color="black" />
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('personal_info')} style={styles.signUpContainer}>
                <Text style={styles.signUp}>Sign up</Text>
            </TouchableOpacity>
            <Text style={styles.alreadyHaveAccount}>Already have an account? <Text style={{color:'#2563EB'}}>Login</Text></Text>
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:30,
        paddingHorizontal:20
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
    }
});

export default CreateAccount;