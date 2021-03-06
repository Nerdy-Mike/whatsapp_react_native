import * as React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import { View, Text } from '../components/Themed';
import ChatListItem from '../components/ChatListItem';

import chatRooms from '../data/ChatRooms';
import NewMessageButton from "../components/NewMessageButton";
import {useEffect, useState} from "react";
import ChatRooms from '../data/ChatRooms';


export default function ChatsScreen() {

  const [chatRooms, setChatRooms] = useState([]);

  return (
    <View style={styles.container}>
      
      <FlatList
        style={{width: '100%'}}
        data={ChatRooms}
        renderItem={({ item }) => <ChatListItem chatRoom={item} />}
        keyExtractor={(item) => item.id}
      />
      
      <NewMessageButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});
