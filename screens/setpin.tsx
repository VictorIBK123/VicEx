import React from 'react';
import { View, StyleSheet,Text, TouchableOpacity, ScrollView,  Image, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { NavigationProp } from '@react-navigation/native';

const SetPin:React.FC<{ navigation: NavigationProp<any> }> = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.weHaveSent}>Set up your 4 digit pin to make your account more secure. You’ll be asked to enter this pin when making transcations</Text>
            <View style={styles.pinInputsContainer}>
                <View style={{marginRight:8}}>
                    <Image source={require('../assets/ellipse.png')}  />
                    <Image style={{position:'absolute', alignSelf:'center', marginTop:11,marginBottom:11}} source={require('../assets/ellipse9.png')}  />
                </View>                
                <View style={{marginRight:8}}>
                    <Image source={require('../assets/ellipse.png')}  />
                    <Image style={{position:'absolute', alignSelf:'center', marginTop:11,marginBottom:11}} source={require('../assets/ellipse9.png')}  />
                </View>                
                <View style={{marginRight:8}}>
                    <Image source={require('../assets/ellipse.png')}  />
                    <Image style={{position:'absolute', alignSelf:'center', marginTop:11,marginBottom:11}} source={require('../assets/ellipse9.png')}  />
                </View>                
                <View style={{marginRight:8}}>
                    <Image source={require('../assets/ellipse.png')}  />
                </View>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('thetab')} style={styles.submitButtonContainer}>
                <Text style={styles.submit}>Proceed</Text>
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
                        <Image source={require('../assets/fill1.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center'
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
    pinInputsContainer:{
        flexDirection:'row',
        marginBottom:10,
        flex:1.5/10,
        justifyContent:'space-between',
    },
    rowContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    weHaveSent:{
        fontSize:14,
        fontWeight:'500',
        textAlign:'center',
        paddingHorizontal:25,
        color:'#6B777F',
        marginBottom:20,
        flex:3/10,
        marginTop:30,
        
    },
    submitButtonContainer:{
        backgroundColor:'#22A37C',
        width:80/100 *Dimensions.get('window').width,
        paddingHorizontal:20,
        paddingVertical:15,
        borderRadius:20,
        flex:0.5/10,
        marginTop:20
    },
    submit:{
        color:'white',
        fontSize:16,
        textAlign:'center',
        fontWeight:'700'
    },
    buttonsContainer:{
        marginTop:30,
        flex:5/10
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

export default SetPin;