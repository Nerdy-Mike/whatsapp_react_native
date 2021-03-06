import React from 'react'
import { Text, View } from 'react-native'
import { Message } from '../../types'
import moment from 'moment'
import styles from './style'

export type ChatMessageProps = {
    message : Message,
    myName : String,
}

const ChatMessage = ( props : ChatMessageProps) => {

    const { message, myName } = props;

    const isMyMessage = () => {
        return message.user.name === myName;
    }

    return (
        <View style={styles.container}>
            <View style={[
                styles.messageBox, {
                backgroundColor: isMyMessage() ? '#DCF8C5' : 'white',
                marginLeft: isMyMessage() ? 50 : 0,
                marginRight: isMyMessage() ? 0 : 50,
                }
            ]}>
            <Text style={styles.name}>{message.user.name === myName ? "me" : message.user.name } </Text>
            <Text style={styles.message}>{message.content}</Text>
            <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
            </View>
        </View>
    )
}

export default ChatMessage
