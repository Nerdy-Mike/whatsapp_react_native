import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform,} from "react-native";
import styles from './styles';

import {
    MaterialCommunityIcons,
    MaterialIcons,
    FontAwesome5,
    Entypo,
    Fontisto,
  } from '@expo/vector-icons';

  
const InputBox = () => {

    const [message, setMessage] = useState('');

    const onPress = () =>{
        console.warn('Enter')
    }
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <FontAwesome5 name="laugh-beam" size={24} color="grey"/>
                <TextInput 
                    style={styles.textInput}
                    multiline
                    numberOfLines={2}
                    value={message}
                    onChangeText={setMessage}
                />
                <Entypo name="attachment" size={24} color="grey" style={styles.icon} />
                <Fontisto name="camera" size={24} color="grey" style={styles.icon} />
            </View>

            <View style={styles.buttonContainer}>
                {message ? 
                <MaterialIcons name="send" size={28} color="white"/> :
                <MaterialCommunityIcons name="microphone" size={28} color="white" />}
            </View>
        </View>
    )
}
  
export default InputBox
  