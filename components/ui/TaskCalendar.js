import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Calendar } from 'react-native-calendars'
import colors from '../../utils/colors'

const calendarTheme = {
    todayTextColor: colors.primary,
    arrowColor: colors.primary
}

const today = () => {
    const date = new Date()
    const month = ['01', '02', '03', '04', '05', '06', '07', '08','09', '10', '11', '12']
    return `${date.getFullYear()}-${month[date.getMonth()]}-${date.getDate() < 10 ? '0'+date.getDate() : date.getDate()}`
}

const TaskCalendar = ({ onDayPress, selectedDate }) => {

    return (
        <View>
            <Calendar
                style={styles.calendar}
                markedDates={{
                    [today()]: {marked: true, dotColor: colors.primary},
                    [selectedDate]: { selected: true, selectedColor: colors.primary }
                }}
                theme={calendarTheme}
                onDayPress={onDayPress} />
        </View>
    )
}

const styles = StyleSheet.create({
    calendar: {
        borderWidth: 1,
        borderRadius: 6,
        borderColor: colors.primary,
        backgroundColor: colors.white,
        elevation: 1,
    }
})

export default TaskCalendar