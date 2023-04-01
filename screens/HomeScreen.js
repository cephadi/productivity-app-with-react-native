import React from 'react'
import { StyleSheet, View } from 'react-native'
import HeaderNav from '../components/home/HeaderNav'
import Routines from '../components/home/Routines'
import SearchInput from '../components/home/SearchInput'
import GroupTask from '../components/mytask/GroupTask'
import ButtonText from '../components/ui/ButtonText'
import ScreenContainer from '../components/ui/ScreenContainer'
import TitleSection from '../components/ui/TitleSection'

const HomeScreen = () => {
    return (
        <ScreenContainer>
            <HeaderNav />
            <SearchInput />
            <Routines />
            <GroupTask 
                header={(
                    <View style={styles.sectionContainer}>
                        <TitleSection title={"My Task"} />
                        <ButtonText label={"See All"} onPress={() => console.log('see all')} />
                    </View>
                )} />
        </ScreenContainer>
    )
}

const styles = StyleSheet.create({
    sectionContainer: {
        margin: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 2
    },
})

export default HomeScreen