import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons'
import colors from '../../utils/colors'

const IconSearch = () => (
    <View style={styles.iconContainer}>
        <Feather name="search" size={28} color={colors.darkGray} />
    </View>
)

const SearchInput = () => {
    return (
        <View style={styles.searchContainer}>
            <IconSearch />
            <TextInput 
                placeholder="Search"
                selectionColor={'#000'}
                placeholderTextColor={colors.darkGray}
                style={styles.inputStyle} />
        </View>
    )
}

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 8,
        padding: 8,
        backgroundColor: colors.textGray,
        borderRadius: 6
    },
    iconContainer: {
        marginHorizontal: 6
    },
    inputStyle: {
        padding: 8,
        fontSize: 18,
        marginVertical: 4,
        marginHorizontal: 6
    }
})

export default SearchInput