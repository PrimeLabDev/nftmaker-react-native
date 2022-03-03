import React, { useState } from 'react';
import { Icon } from 'native-base';
import { TextInput, View, Text } from 'react-native';
import { withTheme } from 'react-native-paper';
import styles from './input-text.styles';
import { theme } from '../../theme';

const { colors } = theme;

const InputText = ({ label, hasInfoIcon, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View>
      {label && (
        <View style={styles.iconRow}>
          <Text style={styles.label}>{label}</Text>
          {hasInfoIcon && <Icon name="info-circle" type="FontAwesome5" style={styles.icon} />}
        </View>
      )}
      <TextInput
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={[styles.input, isFocused && { borderColor: colors.primary }]}
        placeholderTextColor={colors.gray5}
        {...props}
      />
    </View>
  );
};

export default withTheme(InputText);
