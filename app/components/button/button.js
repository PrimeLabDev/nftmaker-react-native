import React from 'react';
import { Icon } from 'native-base';
import { Button, withTheme } from 'react-native-paper';
import { theme } from '../../theme';
import styles from './button.styles';

const { colors } = theme;

function AppButton(props) {
  return (
    <Button
      labelStyle={[styles.label, { ...props.labelStyles }]}
      mode="contained"
      uppercase={false}
      onPress={props.onSubmit}
      loading={props.isLoadingVisible}
      style={[styles.container, { ...props.style }, props.disabled && { backgroundColor: colors.gray6 }]}>
      {props.title} {props.hasNavigate && <Icon name="chevron-right" type="Entypo" style={styles.icon} />}
    </Button>
  );
}

export default withTheme(AppButton);
