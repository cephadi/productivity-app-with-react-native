import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const TitleSection = ({ title }) => {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        marginVertical: 8
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default TitleSection