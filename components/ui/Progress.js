import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../../utils/colors'

const ProgressLine = ({ percent }) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{
                height: 6,
                width: percent <= 0 ? `1%` : `${percent}%`,
                backgroundColor: colors.primary
            }} />
            <View style={{
                height: 6,
                backgroundColor: colors.textGray,
                flex: 1
            }} />
        </View>
    )
}

const Progress = ({ percentage }) => {
    return (
        <View>
            <View style={styles.infoContainer}>
                <Text style={styles.progressText}>Progress</Text>
                <Text style={styles.percentText}>{percentage}%</Text>
            </View>
            <ProgressLine percent={percentage} />
        </View>
    )
}

const styles = StyleSheet.create({
    infoContainer: {
        marginVertical: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    progressText: {
        fontSize: 14,
        color: colors.darkGray
    },
    percentText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.primary
    }
})

export default Progress