import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../../utils/colors'

const HeaderBtn = ({ icon, onPress }) => {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.headerBtnContainer,
                pressed ? { backgroundColor: colors.textGray } : null
            ]}>
            <MaterialCommunityIcons name={icon} size={26} />
        </Pressable>
    )
}

const HeaderTitle = ({ onGoBack, showLeftBtn, showRightBtn, title, rightIcon, rightOnPress }) => {
    return (
        <View style={styles.headerContainer}>
            <View style={{ width: '10%' }}>
                {(showLeftBtn && showLeftBtn === true) && <HeaderBtn icon={"arrow-left"} onPress={onGoBack} />}
            </View>
            <View style={styles.headerTitleContainer}>
                <Text style={styles.titleText}>{title}</Text>
            </View>
            <View style={{ width: '10%' }}>
                {(showRightBtn && showRightBtn === true) && <HeaderBtn icon={rightIcon} onPress={rightOnPress} />}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        padding: 6,
        marginHorizontal: 6,
        marginTop: 6,
        marginBottom: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headerTitleContainer: {
        flex: 1,
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    headerBtnContainer: {
        padding: 4,
        borderRadius: 6
    }
})

export default HeaderTitle