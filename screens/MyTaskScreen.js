import { useIsFocused, useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import GroupTask from '../components/mytask/GroupTask'
import HeaderTitle from '../components/ui/HeaderTitle'
import ScreenContainer from '../components/ui/ScreenContainer'
import TabMenu from '../components/ui/TabMenu'
import TodoItem from '../components/ui/TodoItem'
import Tasks from '../data/Tasks'
import colors from '../utils/colors'

const tabMenus = [
    'Today',
    'Week',
    'Month'
]

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

const MyTaskScreen = () => {
    const navigation = useNavigation()
    const focused = useIsFocused()
    const [selectedMenu, setSelectedMenu] = useState('Today')
    const [listTodo, setListTodo] = useState([])

    const checkTodoHandler = (name) => {
        const currentTodos = [...listTodo]
        const index = currentTodos.findIndex(todo => todo.name === name)
        const newTodo = currentTodos[index]
        newTodo.isCompleted = !newTodo.isCompleted

        // setListTodo(currentTodos)
    }

    const fetchTasks = () => {
        Tasks.fetchAll((_, { rows: { _array: data } }) => {
            setListTodo(data.map(obj => ({
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
        if (focused) {
            fetchTasks()
        }
    }, [focused])
    
    return (
        <ScreenContainer>
            <HeaderTitle 
                rightIcon={"plus"}
                rightOnPress={() => navigation.navigate('FormTask')}
                showRightBtn={true}
                title="My Task" />
            <TabMenu 
                menus={tabMenus}
                selectedMenu={selectedMenu}
                onSelectedMenu={menu => setSelectedMenu(menu)} />
            <GroupTask />
            <View style={{ flex: 1, marginTop: 12 }}>
                <FlatList
                    data={listTodo}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(_,i) => i}
                    renderItem={({ item }) => <TodoItem {...item} onCheck={checkTodoHandler} />} />
            </View>
        </ScreenContainer>
    )
}

export default MyTaskScreen