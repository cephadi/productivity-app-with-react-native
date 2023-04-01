import React, { useState } from 'react'
import { Text, View } from 'react-native'
import RoutineTodos from '../components/routines/RoutineTodos'
import HeaderTitle from '../components/ui/HeaderTitle'
import ScreenContainer from '../components/ui/ScreenContainer'
import TaskCalendar from '../components/ui/TaskCalendar'

const today = () => {
    const date = new Date()
    const month = ['01', '02', '03', '04', '05', '06', '07', '08','09', '10', '11', '12']
    return `${date.getFullYear()}-${month[date.getMonth()]}-${date.getDate() < 10 ? '0'+date.getDate() : date.getDate()}`
}

const RoutinesScreen = () => {
    const [currentDate, setCurrentDate] = useState(today())

    const onDayChangeHandler = day => {
        setCurrentDate(day.dateString)
    }

    return (
        <ScreenContainer>
            <HeaderTitle 
                title="Routines" />
            <TaskCalendar
                selectedDate={currentDate}
                onDayPress={onDayChangeHandler} />
            <RoutineTodos 
                currentDate={currentDate} />
        </ScreenContainer>
    )
}

export default RoutinesScreen