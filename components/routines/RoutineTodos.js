import React, { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import colors from '../../utils/colors'
import ButtonText from '../ui/ButtonText'
import TitleSection from '../ui/TitleSection'
import TodoItem from '../ui/TodoItem'

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

const RoutineTodos = () => {
    const [listTodo, setListTodo] = useState(todos)

    const checkTodoHandler = (name) => {
        const currentTodos = [...listTodo]
        const index = currentTodos.findIndex(todo => todo.name === name)
        const newTodo = currentTodos[index]
        newTodo.isCompleted = !newTodo.isCompleted

        setListTodo(currentTodos)
    }

    return (
        <View style={styles.container}>
            <View style={styles.sectionContainer}>
                <TitleSection title={"Today Task"} />
                <ButtonText label={"See All"} onPress={() => console.log('see all')} />
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={listTodo}
                keyExtractor={(_,i) => i}
                renderItem={({ item }) => <TodoItem {...item} onCheck={checkTodoHandler} />}
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