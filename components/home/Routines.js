import React from 'react'
import { StyleSheet, View } from 'react-native'
import ButtonText from '../ui/ButtonText'
import RoutineCard from '../ui/RoutineCard'
import TitleSection from '../ui/TitleSection'

const Routines = () => {
    return (
        <View style={styles.container}>
            <View style={styles.sectionContainer}>
                <TitleSection title={"Routines"} />
                <ButtonText label={"See All"} onPress={() => console.log('see all')} />
            </View>
            <View style={styles.cardItemContainer}>
                <RoutineCard 
                    iconName={"white-balance-sunny"}
                    label="Morning Routine"
                    totalProgress={60} />
                <RoutineCard 
                    iconName={"star-face"}
                    label="Dribble Shot"
                    totalProgress={24} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 6
    },
    sectionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 2
    },
    cardItemContainer: {
        paddingVertical: 6,
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default Routines