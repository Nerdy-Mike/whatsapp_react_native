import React, { version } from 'react'
import { View, Text, FlatList } from 'react-native'

import { useRoute } from '@react-navigation/native'
import ChatMessage from '../components/ChatMessage/index'

import Chats from '../data/Chats'
import { FontAwesome5 } from '@expo/vector-icons'
import InputBox from '../components/InputBox'

const ChatRoomScreen = () => {

    const route  = useRoute()

    console.log(route.params)
    
    return (
        <View>
            <FlatList
                data={Chats.messages}
                renderItem={ ({ item }) => <ChatMessage myName={Chats.users[0].name} message={item} />}
            />

            <InputBox/>
        </View>
    )
}

export default ChatRoomScreen
