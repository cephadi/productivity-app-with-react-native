import React from 'react'
import HeaderNav from '../components/home/HeaderNav'
import MyTask from '../components/home/MyTask'
import Routines from '../components/home/Routines'
import SearchInput from '../components/home/SearchInput'
import ScreenContainer from '../components/ui/ScreenContainer'

const HomeScreen = () => {
    return (
        <ScreenContainer>
            <HeaderNav />
            <SearchInput />
            <Routines />
            <MyTask />
        </ScreenContainer>
    )
}

export default HomeScreen