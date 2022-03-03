import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

const { colors } = theme;

export default StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginTop: 5,
        marginBottom: 8,
        paddingHorizontal: 20
    },
    contactList: {
        flex: 1,
        width: '100%',
    },
    searchContainer: {
        width: '80%',
        height: 36,
        backgroundColor: colors.gray10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 7
    },
    action: {
        color: colors.primary,
        fontSize: 16,
        lineHeight: 30,
    },
    searchIcon: {
        width: 18,
        height: 18,
        marginHorizontal: 5,
    },
    searchInput: {
        width: '90%',
        height: 26,
        color: colors.black,
        fontSize: 17,
        lineHeight: 22,
    },
    searchInputWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    importText: {
        textAlign: 'right',
        color: colors.primary,
        fontSize: 17,
        lineHeight: 22,
        letterSpacing: -0.408
    },
    listItem: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 10,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    avatarWrapper: {
        width: 45,
        height: 45,
        borderRadius: 25,
        resizeMode: 'contain',
    },
    textAvatarWrapper: {
        width: 45,
        height: 45,
        borderRadius: 25,
        backgroundColor: colors.gray10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        width: 45,
        height: 45,
        resizeMode: 'contain',
    },
    avatarText: {
        fontSize: 14,
        lineHeight: 17,
        color: colors.gray4,
        fontWeight: '500',
    },
    checkIcon: {
        width: 22,
        height: 22,
        resizeMode: 'contain',
    },
    detailWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    detailTextWrapper: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginLeft: 10
    },
    assetId: {
        fontSize: 12,
        lineHeight: 15,
        color: colors.gray7
    },
    userName: {
        fontSize: 14,
        lineHeight: 17,
        color: colors.black
    },
    action2: {
        height: 45,
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    actionText: {
        fontSize: 17,
        lineHeight: 22,
        color: colors.primary
    }
});
