import React from 'react';
import { View, StyleSheet,Text, TouchableOpacity, ScrollView, Dimensions, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { NavigationProp } from '@react-navigation/native';
interface VerifyEmailScreenProps{
    navigation: NavigationProp<any>;
}

const VerifyEmailScreen: React.FC<VerifyEmailScreenProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.pleaseVerifyPhone}>Please verify your email address</Text>
            <Text style={styles.weHaveSent}>We have sent an 6-digit verification code to ki***w*****@gmail.com.</Text>
            <Text style={styles.enterThisCodeBelow}>Enter this code below</Text>
            <View style={styles.textInputsContainer}>
                <TextInput editable={false} style={styles.textInput} maxLength={1} value='5' />
                <TextInput editable={false} style={styles.textInput} maxLength={1} value='8' />
                <TextInput editable={false} style={styles.textInput} maxLength={1} value='2' />
                <TextInput editable={false} style={styles.textInput} maxLength={1} value='1' />
                <TextInput editable={false} style={styles.textInput} maxLength={1} value='' />
                <TextInput editable={false} style={styles.textInput} maxLength={1} value='' />
            </View>
            <Text style={styles.didNotGetTheCode}>Didn’t get the code? <Text style={{color:'#2563EB'}}>Resend code (59s)</Text></Text>
            <TouchableOpacity onPress={()=>navigation.navigate("enter_phone")} style={styles.submitButtonContainer}>
                <Text style={styles.submit}>Submit</Text>
            </TouchableOpacity>
            <View style={styles.buttonsContainer}>
                <View style={styles.rowContainer}>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.enterButton}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.enterButton}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.enterButton}>3</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.rowContainer}>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.enterButton}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.enterButton}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.enterButton}>6</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.rowContainer}>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.enterButton}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.enterButton}>8</Text>
                    </TouchableOpacity >
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.enterButton}>9</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.rowContainer}>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.enterButton}>*</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.enterButton}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Image source={require('../../assets/fill1.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
        marginBottom:10,
    },
    rowContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    pleaseVerifyPhone:{
        fontSize:20,
        color:'#0C263A',
        fontWeight:'500',
        paddingHorizontal:40,
        textAlign:'center',
        marginBottom:20
    },
    weHaveSent:{
        fontSize:16,
        fontWeight:'500',
        textAlign:'center',
        paddingHorizontal:25,
        color:'#6B777F'
    },
    enterThisCodeBelow:{
        fontSize:16,
        fontWeight:'500',
        textAlign:'center',
        paddingHorizontal:25,
        marginBottom:30,
        color:'#6B777F'
    },
    didNotGetTheCode:{
        color:'#0C263A',
        fontSize:16,
        fontWeight:'500',
        textAlign:'center',
        marginBottom:20
    },
    submitButtonContainer:{
        backgroundColor:'#22A37C',
        width:80/100 *Dimensions.get('window').width,
        paddingHorizontal:20,
        paddingVertical:15,
        borderRadius:20,
    },
    submit:{
        color:'white',
        fontSize:16,
        textAlign:'center',
        fontWeight:'700'
    },
    buttonsContainer:{
        marginTop:30,
    },
    enterButton:{
        fontSize:18,
        fontWeight:'800'
    },
    buttonContainer:{
        paddingHorizontal:50,
        paddingVertical:10,
    }
});

export default VerifyEmailScreen;