import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../../utils/colors'
import Progress from './Progress'

const Icon = ({ icon }) => {
    return (
        <View style={styles.iconContainer}>
            <MaterialCommunityIcons name={icon} size={24} color={colors.primary} />
        </View>
    )
}

const Line = () => (
    <View style={{
        marginVertical: 4,
        height: 2,
        backgroundColor: colors.background
    }} />
)

const RoutineCard = ({ iconName, label, totalProgress }) => {
    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'flex-start' }}>
                <Icon icon={iconName} />
            </View>
            <View style={styles.labelContainer}>
                <Text style={styles.labelText}>{label}</Text>
            </View>
            <Line />
            <Progress percentage={totalProgress} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 4,
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 16,
        backgroundColor: colors.white,
        elevation: 2
    },
    iconContainer: {
        backgroundColor: colors.background,
        padding: 8,
        borderRadius: 10,
        elevation: 1
    },
    labelContainer: {
        marginVertical: 4
    },
    labelText: {
        fontSize: 14,
        fontWeight: 'bold'
    }
})

export default RoutineCard