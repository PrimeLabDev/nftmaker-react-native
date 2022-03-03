import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { withTheme } from 'react-native-paper';
import { Text } from '../../../components';
import styles from './SectionHeader.styles';

function SectionHeader(props) {
    let style = styles.cardWrapper;
    let titleStyle = styles.header;
    let actionStyle = styles.action;
    if (props.style) {
        style = {...style, ...props.style};
    }
    if (props.titleStyle) {
        titleStyle = {...titleStyle, ...props.titleStyle};
    }
    if (props.actionStyle) {
        actionStyle = {...actionStyle, ...props.actionStyle};
    }

    return (
        <View style={style} onPress={props.onPress} >
            <Text style={titleStyle}>{props.title}</Text>
            {
                props.action && typeof props.action === 'string' && (
                    <TouchableOpacity onPress={props.onPress}>
                        <Text style={actionStyle}>{props.action}</Text>
                    </TouchableOpacity>
                )
            }
            {
                props.action && typeof props.action !== 'string' && (
                    <TouchableOpacity onPress={props.onPress}>
                        {props.action}
                    </TouchableOpacity>
                )
            }
        </View>
    );
}

export default withTheme(SectionHeader);
