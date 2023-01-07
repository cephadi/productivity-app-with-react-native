import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import colors from '../../utils/colors'

const ScreenContainer = ({ children }) => {
    return (
        <SafeAreaView style={styles.rootContainer}>
            <View style={styles.contentContainer}>
                {children}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: colors.background
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: 6
    }
})

export default ScreenContainer