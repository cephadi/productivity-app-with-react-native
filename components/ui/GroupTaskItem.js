import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../../utils/colors'

const GroupIcon = ({ icon, backgroundIcon }) => (
    <View style={[
        styles.iconContainer, 
        { backgroundColor: backgroundIcon ? backgroundIcon : colors.darkGray }
    ]}>
        <MaterialCommunityIcons name={icon} size={24} color={colors.white} />
    </View>
)

const GroupTaskItem = ({ icon, iconColor, label, totalTask, onPress }) => {
    return (
        <Pressable 
            onPress={onPress}
            style={({ pressed }) => [
                styles.rowContainer, 
                styles.container,
                pressed ? { backgroundColor: colors.textGray } : null
            ]}>
            <View style={styles.rowContainer}>
                <GroupIcon icon={icon} backgroundIcon={iconColor} />
                <Text style={styles.labelText}>{label}</Text>
            </View>
            <View>
                <Text style={styles.totalTaskText}>{totalTask} task</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        backgroundColor: colors.white,
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 6,
        marginVertical: 2,
        elevation: 1,
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconContainer: {
        padding: 6,
        marginRight: 8,
        borderRadius: 8
    },
    labelText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    totalTaskText: {
        fontSize: 14,
        color: colors.darkGray
    }
})

export default GroupTaskItem