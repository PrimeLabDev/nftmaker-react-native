import { StyleSheet } from 'react-native';
import { theme } from '../../theme';
const { colors } = theme;

const styles = StyleSheet.create({
  label: {
    color: colors.gray7,
    fontSize: 12,
    marginBottom: 11,
  },
  input: {
    backgroundColor: colors.gray8,
    color: colors.gray7,
    fontSize: 16,
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderColor: colors.gray9,
    borderRadius: 8,
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 20,
    marginLeft: 10,
    color: colors.gray7,
    top: -5,
  },
});

export default styles;
