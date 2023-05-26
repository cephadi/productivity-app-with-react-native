import { useIsFocused } from '@react-navigation/native'
import React, { useContext, useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import Tasks from '../../data/Tasks'
import colors from '../../utils/colors'
import ButtonText from '../ui/ButtonText'
import TitleSection from '../ui/TitleSection'
import TodoItem from '../ui/TodoItem'
import { AuthContext } from '../../context/AuthContextProvider'

const todos = [
    {
        icon: 'account-question',
        iconColor: colors.green,
        name: 'Drink Water',
        isCompleted: true
    },
    {
        icon: 'account-question',
        iconColor: colors.purple,
        name: 'Workout',
        isCompleted: false
    },
    {
        icon: 'account-question',
        iconColor: colors.darkGray,
        name: 'Working',
        isCompleted: false
    },
    {
        icon: 'account-question',
        iconColor: colors.primary,
        name: 'Walk the Dog',
        isCompleted: true
    },
    {
        icon: 'account-question',
        iconColor: colors.primary,
        name: 'Walk the Dog 2',
        isCompleted: true
    },
    {
        icon: 'account-question',
        iconColor: colors.primary,
        name: 'Walk the Dog 3',
        isCompleted: true
    },
]

const getIconColor = {
    todo: {
        icon: 'file-plus',
        color: colors.green
    },
    in_progress: {
        icon: 'file-document',
        color: colors.purple
    },
    done: {
        icon: 'file-check',
        color: colors.primary
    },
    skipped: {
        icon: 'file-cancel',
        color: colors.darkGray
    }
}

const today = () => {
    const date = new Date()
    const month = ['01', '02', '03', '04', '05', '06', '07', '08','09', '10', '11', '12']
    return `${date.getFullYear()}-${month[date.getMonth()]}-${date.getDate() < 10 ? '0'+date.getDate() : date.getDate()}`
}

const RoutineTodos = ({ currentDate }) => {
    const isFocused = useIsFocused()
    const authCtx = useContext(AuthContext)
    const [listTodo, setListTodo] = useState([])

    const setCompletedTask = (taskId, isChecked) => {
        if (isChecked) {
            ToastAndroid.show('Task already completed!', ToastAndroid.LONG)
            return
        }

        const payload = [
            { column: 'task_status', value: 1 },
            { column: 'task_group', value: "'done'" },
        ]
        Tasks.update(taskId, payload, (_, resultSet) => {
            if (resultSet.rowsAffected >= 1) {
                ToastAndroid.show('Successfully updated task!', ToastAndroid.LONG)
                fetchTasks()
            }else{
                ToastAndroid.show('Failed update task!', ToastAndroid.LONG)
            }
        },
        (_, error) => {
            ToastAndroid.show(error.message, ToastAndroid.LONG)
            console.log(`RoutineTodos.setCompletedTask Error: ${error.message}`)
        })
    }

    const fetchTasks = () => {
        Tasks.fetchByDate(currentDate, authCtx.sessionUser?.userId, (_, { rows: { _array: data } }) => {
            setListTodo(data.map(obj => ({
                id: obj.id,
                icon: getIconColor[obj.task_group].icon,
                iconColor: getIconColor[obj.task_group].color,
                name: obj.task_title,
                isCompleted: obj.task_status === 1 ? true : false
            })))
        },
        (_, error) => {
            console.log(`Fetching Error: ${error.message}`)
        })
    }

    useEffect(() => {
        if (isFocused) {
            fetchTasks()
        }
    }, [currentDate, isFocused])

    return (
        <View style={styles.container}>
            <View style={styles.sectionContainer}>
                <TitleSection title={`${currentDate === today() ? 'Today' : currentDate} Task`} />
                <ButtonText label={"See All"} onPress={() => console.log('see all')} />
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={listTodo}
                ListEmptyComponent={() => (
                    <View style={{ marginLeft: 8 }}>
                        <Text style={{ fontSize: 16 }}>Task is empty.</Text>
                    </View>
                )}
                keyExtractor={(_,i) => i}
                renderItem={({ item }) => (
                    <TodoItem 
                        {...item} 
                        onCheck={() => setCompletedTask(item.id, item.isCompleted)} />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sectionContainer: {
        margin: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 2
    },
})

export default RoutineTodos