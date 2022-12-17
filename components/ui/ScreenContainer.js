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
        backgroundColor: colors.white
    },
    contentContainer: {
        flex: 1,
    }
})

export default ScreenContainer