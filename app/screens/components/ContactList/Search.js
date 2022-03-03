import React from 'react';
import { View, TouchableOpacity, TextInput } from 'react-native';
import FastImage from 'react-native-fast-image';
import { withTheme } from 'react-native-paper';
import { Text } from '../../../components';
import { images } from '../../../constants';
import styles from './ContactList.styles';
import { theme } from '../../../theme';

function Search(props) {
    const { colors } = theme;
    return (
        <View style={styles.searchContainer} >
            <FastImage source={images.search} style={styles.searchIcon} resizeMode="contain" />
            <View style={styles.searchInputWrapper}>
                <TextInput onChangeText={props.onChangeText} style={styles.searchInput} placeholderTextColor={colors.gray7} placeholder="Search People" />
            </View>
            <Text style={styles.importText}>Import</Text>
        </View>
    );
}

export default withTheme(Search);
