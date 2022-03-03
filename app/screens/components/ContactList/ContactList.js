import { Content } from 'native-base';
import React, { useState } from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import FastImage from 'react-native-fast-image';
import { withTheme } from 'react-native-paper';
import { AppButton, InputText, Text } from '../../../components';
import ContactItem from './ContactItem';
import styles from './ContactList.styles';
import Search from './Search';

const userList = [
    {
        id: 1234,
        name: "John Doe",
        tag: "johndoe",
        avatar: require('../../../assets/images/avatar.png'),
    },
    {
        id: 1235,
        name: "Mike Hansen",
        tag: "micheal",
        avatar: require('../../../assets/images/avatar.png'),
    },
    {
        id: 1236,
        name: "John Doe",
        tag: "johndoe",
        avatar: require('../../../assets/images/avatar.png'),
    },
    {
        id: 1237,
        name: "John Doe",
        tag: "johndoe",
        avatar: null,
    },
    {
        id: 1238,
        name: "John Doe",
        tag: "johndoe",
        avatar: require('../../../assets/images/avatar.png'),
    },
]

function ContactList(props) {

    const [users, setUsers] = useState(userList);
    const [selected, setSelected] = useState([]);

    const handleItemSelect = (select, item) => {
        let arr = [...selected];
        if (select) {
            arr.push(item.id);
        } else {
            let index = arr.indexOf(item.id);
            arr.splice(index, 1);
        }
        setSelected(arr);
    }

    const handleSelectAll = () => {
        if (users.length === selected.length) {
            setSelected([]);
        } else {
            let all = users.map((user) => { return user.id });
            setSelected(all)
        }
    }

    const handleFilter = (t) => {
        let filtered = userList.filter((user) => {
            return user.name.includes(t);
        });
        console.log(filtered);
        setUsers(filtered)
    }

    return (
        <View style={styles.root} >
            <Search onChangeText={handleFilter} />
            <View style={styles.action2}>
                <Text style={styles.actionText} onPress={handleSelectAll}>{users.length === selected.length ? "Deselect All" : "Select All"}</Text>
            </View>
            <ScrollView style={styles.contactList}>
                {
                    users.map((user, index) => {
                        return (
                            <ContactItem data={user} key={`contact_list_item_${index}`} onSelected={handleItemSelect} selected={selected} />
                        )
                    })
                }
            </ScrollView>
        </View>
    );
}

export default withTheme(ContactList);
