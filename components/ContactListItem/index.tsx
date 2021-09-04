import React from "react";
import { View, Text, Image, TouchableNativeFeedback, FlatList} from'react-native'
import { User } from "../../types";
import styles from "./styles";
import moment from "moment";
import { useNavigation} from "@react-navigation/core";
import Users from "../../data/Users";

export type ContactListItemsProps ={
    user: User;
}

const ContactListItem = (props : ContactListItemsProps) => {


    const navigation = useNavigation()

    const onClick = () => {

    }

    return (
        <FlatList 
            style={{width: '100%'}}
            data={Users}
            renderItem={({ item }) => 
            <TouchableNativeFeedback onPress={onClick}  >
            <View style={styles.container}>
                <View style={styles.midContainer}>
                    <Image source={{ uri: item.imageUri }} style={styles.avatar}/>
                    <Text style={styles.username}> { item.name } </Text>
                </View>
            </View>
            </TouchableNativeFeedback>

            }
            keyExtractor={(item) => item.id}
        />


    )
}




export default ContactListItem