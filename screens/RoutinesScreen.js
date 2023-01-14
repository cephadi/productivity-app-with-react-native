import React from 'react'
import { Text, View } from 'react-native'
import RoutineTodos from '../components/routines/RoutineTodos'
import HeaderTitle from '../components/ui/HeaderTitle'
import ScreenContainer from '../components/ui/ScreenContainer'
import TaskCalendar from '../components/ui/TaskCalendar'

const RoutinesScreen = () => {
    return (
        <ScreenContainer>
            <HeaderTitle 
                title="Routines" />
            <TaskCalendar />
            <RoutineTodos />
        </ScreenContainer>
    )
}

export default RoutinesScreen