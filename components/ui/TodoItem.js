import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Checkbox } from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../../utils/colors'

const TodoIcon = ({ icon, iconColor, containerStyle }) => (
    <View style={[styles.iconContainer, containerStyle ? containerStyle : null]}>
        <MaterialCommunityIcons name={icon} size={24} color={iconColor ? iconColor : colors.darkGray} />
    </View>
)

const TodoItem = ({ icon, iconColor, name, isCompleted, onCheck }) => {
    return (
        <View style={[
            styles.todoContainer,
            isCompleted && isCompleted === true ? { backgroundColor: colors.textGray } : null
        ]}>
            <View style={styles.labelContainer}>
                <TodoIcon 
                    icon={icon}
                    iconColor={iconColor}
                    containerStyle={isCompleted && isCompleted === true ? { backgroundColor: colors.white } : null} />
                <Text style={styles.labelText}>{name}</Text>
            </View>
            <View>
                <Checkbox 
                    status={isCompleted && isCompleted === true ? 'checked' : 'unchecked'}
                    color={colors.primary}
                    onPress={() => onCheck(name)} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    todoContainer: {
        backgroundColor: colors.white,
        borderRadius: 8,
        elevation: 1,
        marginVertical: 4,
        marginHorizontal: 8,
        paddingVertical: 8,
        paddingHorizontal: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    labelContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    labelText: {
        fontSize: 16,
        color: colors.darkGray,
        marginLeft: 8
    },
    iconContainer: {
        padding: 4,
        borderRadius: 6,
        backgroundColor: colors.textGray
    }
})

export default TodoItem