import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import colors from '../../utils/colors'

const ButtonText = ({ label, onPress }) => {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.container,
                pressed ? { opacity: 0.7 } : null
            ]}>
            <Text style={styles.labelText}>{label}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
    },
    labelText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.primary
    }
})

export default ButtonText