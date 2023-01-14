import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../../utils/colors'

const SettingItem = ({ label, icon, onPress }) => {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.container,
                pressed ? { opacity: 0.75 } : null
            ]}>
            <View style={styles.labelContainer}>
                <MaterialCommunityIcons name={icon} size={24} color={colors.primary} />
                <Text style={styles.labelText}>{label}</Text>
            </View>
            <MaterialCommunityIcons name="chevron-right" size={24} color={colors.darkGray} />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
        paddingHorizontal: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.white,
        borderBottomWidth: 1,
        borderBottomColor: colors.textGray
    },
    labelContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    labelText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.darkGray,
        marginLeft: 8
    }
})

export default SettingItem