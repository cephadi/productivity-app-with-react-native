import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import colors from '../../utils/colors'

const TabItem = ({ name, onPress, isActive }) => {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.tabItemContainer,
                pressed ? { opacity: 0.75 } : null,
                isActive && isActive === true ? { borderBottomWidth: 1, borderBottomColor: colors.primary } : null
            ]}>
            <View>
                <Text style={[
                    styles.tabItemNameText,
                    isActive && isActive === true ? { color: colors.primary, fontWeight: 'bold' } : null
                ]}>{name}</Text>
            </View>
        </Pressable>
    )
}

const TabMenu = ({ menus, onSelectedMenu, selectedMenu }) => {
    return (
        <View style={styles.tabMenuContainer}>
            {menus.map((menu, i) => (
                <TabItem 
                    key={i}
                    name={menu}
                    isActive={menu === selectedMenu} 
                    onPress={() => onSelectedMenu(menu)} />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    tabMenuContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginHorizontal: 4,
        marginBottom: 8
    },
    tabItemContainer: {
        padding: 4,
        margin: 4,
    },
    tabItemNameText: {
        fontSize: 16,
        color: colors.darkGray
    }
})

export default TabMenu