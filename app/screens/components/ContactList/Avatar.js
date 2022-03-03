import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import { withTheme } from 'react-native-paper';
import { Text, Touchable } from '../../../components';
import { images } from '../../../constants';
import { avatarText } from '../../../helpers';
import styles from './ContactList.styles';

function Avatar(props) {
    let user = props.data;
    return (
        <View style={styles.avatarWrapper}>
            {
                user.avatar ? (
                    <FastImage source={user.avatar} style={styles.avatar} />
                ) : (
                    <View style={styles.textAvatarWrapper}>
                        <Text style={styles.avatarText}>{avatarText(user.name)}</Text>
                    </View>
                )
            }
        </View>
    );
}

export default withTheme(Avatar);
