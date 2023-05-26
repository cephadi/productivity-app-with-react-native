import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import colors from '../../utils/colors'

const InputText = ({ value, placeholder, onChange, inputStyles, isSecure, disabled }) => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder={placeholder}
                secureTextEntry={isSecure ? true : false}
                placeholderTextColor={colors.darkGray}
                value={value}
                editable={disabled && disabled === true ? false : true}
                selectTextOnFocus={disabled && disabled === true ? false : true}
                selectionColor={colors.primary}
                onChangeText={onChange}
                style={[styles.inputText, inputStyles ? inputStyles : null]} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 4,
        padding: 4,
        borderRadius: 6,
        backgroundColor: colors.white,
        elevation: 1
    },
    inputText: {
        flex: 1,
        padding: 8,
        fontSize: 16,
    }
})

export default InputText