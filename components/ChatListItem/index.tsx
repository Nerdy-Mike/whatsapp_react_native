import React from 'react'
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import { ChatRoom  } from '../../types'
import styles from "./style";
import  moment from 'moment'

import { useNavigation } from '@react-navigation/native';
//import { useNavigation } from '@react-navigation/core';     //What is the different?

 
export type ChatListItemProps = {
  chatRoom: ChatRoom;
}

const ChatListItem = ( props : ChatListItemProps) =>{

  const { chatRoom } = props

  const navigation = useNavigation();

  const onClick = () =>{
    // console.warn( "clicked" )
    navigation.navigate("ChatRoom", { id : chatRoom.id, name : chatRoom.users[1].name, })
  }

  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container} >
        <View style={styles.lefContainer}>
          <Image source={{ uri: chatRoom.users[1].imageUri }} style={styles.avatar}/>
          <View style={styles.midContainer}>
            <Text
              numberOfLines={2}
              style={styles.lastMessage}>
              {chatRoom.lastMessage
                ? `${chatRoom.users[1].name}: ${chatRoom.lastMessage.content}`
                : ""}
            </Text>
          </View>

          <Text style={styles.time}>
              {chatRoom.lastMessage && moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
            </Text>
        </View>

      </View>
    </TouchableWithoutFeedback>
  )
}

export default ChatListItem