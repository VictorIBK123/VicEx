import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { AntDesign, Feather, Fontisto } from '@expo/vector-icons';

const NewPassword:React.FC = () => {
    return (
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.header}>Enter your new password below</Text>
            <Text style={styles.label}>New Password</Text>
            <View style={styles.inputView}>
                <AntDesign style={styles.iconB4} name="lock" size={18} color="black" />
                <TextInput style={styles.textInput} placeholder='New Password' />
                <Feather style={styles.eyeIcon} name="eye-off" size={15} color="black" />
            </View>
            <Text style={styles.label}>Confirm Password</Text>
            <View style={styles.inputView}>
                <AntDesign style={styles.iconB4} name="lock" size={18} color="black" />
                <TextInput style={styles.textInput} placeholder='Confirm New Password' />
                <Feather style={styles.eyeIcon} name="eye-off" size={15} color="black" />
            </View>
            <TouchableOpacity style={styles.submitButtonContainer}>
                <Text style={styles.submit}>Proceed</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.submitButtonContainer, {backgroundColor:'#00000000', borderWidth:1}]}>
                <Text style={[styles.submit,{color:'#0C263A', fontWeight:'500'}]}>Cancel</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:30,
        paddingHorizontal:20,
    },
    header:{
        fontSize:18,
        fontWeight:'500',
        textAlign:'center',
        marginBottom:30,
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
        marginBottom:20,
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
        marginVertical:20,
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
     submitButtonContainer:{
            backgroundColor:'#22A37C',
            width:80/100 *Dimensions.get('window').width,
            paddingHorizontal:20,
            paddingVertical:10,
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
});

export default NewPassword;