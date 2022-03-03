import React, { useState, useEffect} from 'react';
import { View, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import { withTheme } from 'react-native-paper';
import { Text, Touchable } from '../../../components';
import { images } from '../../../constants';
import Avatar from './Avatar';
import styles from './ContactList.styles';

function ContactItem(props) {
    let user = props.data;
    const [isSelected, setIsSelected] = useState(false);

    const handleSelect = () => {
        setIsSelected(!isSelected);
        if (props.onSelected) {
            props.onSelected(!isSelected, user);
        }
    }

    useEffect(() => {
        if (props.selected.includes(user.id)) {
            setIsSelected(true);
        } else {
            setIsSelected(false);
        }
    }, [props.selected])

    return (
        <Touchable style={styles.listItem} onPress={handleSelect} >
            <View style={styles.detailWrapper}>
                <Avatar data={user} />
                <View style={styles.detailTextWrapper}>
                    <Text style={styles.userName}>{user.name}</Text>
                    <Text style={styles.assetId}>@{user.tag}</Text>
                </View>
            </View>
            <FastImage source={isSelected ? images.check_mark : images.no_mark} style={styles.checkIcon} />
        </Touchable>
    );
}

export default withTheme(ContactItem);
