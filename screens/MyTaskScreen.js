import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import GroupTask from '../components/mytask/GroupTask'
import HeaderTitle from '../components/ui/HeaderTitle'
import ScreenContainer from '../components/ui/ScreenContainer'
import TabMenu from '../components/ui/TabMenu'
import TodoItem from '../components/ui/TodoItem'
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

const MyTaskScreen = () => {
    const navigation = useNavigation()
    const [selectedMenu, setSelectedMenu] = useState('Today')
    const [listTodo, setListTodo] = useState(todos)

    const checkTodoHandler = (name) => {
        const currentTodos = [...listTodo]
        const index = currentTodos.findIndex(todo => todo.name === name)
        const newTodo = currentTodos[index]
        newTodo.isCompleted = !newTodo.isCompleted

        setListTodo(currentTodos)
    }
    
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