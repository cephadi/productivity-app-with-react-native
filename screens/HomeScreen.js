import React from 'react'
import { Text, View } from 'react-native'
import HeaderNav from '../components/home/HeaderNav'
import SearchInput from '../components/home/SearchInput'
import ScreenContainer from '../components/ui/ScreenContainer'

const HomeScreen = () => {
    return (
        <ScreenContainer>
            <HeaderNav />
            <SearchInput />
            <View>
                <Text>HomeScreen</Text>
            </View>
        </ScreenContainer>
    )
}

export default HomeScreen