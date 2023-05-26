import { useIsFocused, useNavigation } from '@react-navigation/native'
import React, { useContext, useEffect, useState } from 'react'
import { FlatList, Text, ToastAndroid, View } from 'react-native'
import GroupTask from '../components/mytask/GroupTask'
import HeaderTitle from '../components/ui/HeaderTitle'
import ScreenContainer from '../components/ui/ScreenContainer'
import TabMenu from '../components/ui/TabMenu'
import TodoItem from '../components/ui/TodoItem'
import Tasks from '../data/Tasks'
import colors from '../utils/colors'
import { AuthContext } from '../context/AuthContextProvider'

const tabMenus = [
    'Today',
    'Week',
    'Month'
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
    const authCtx = useContext(AuthContext)
    const navigation = useNavigation()
    const focused = useIsFocused()
    const [selectedMenu, setSelectedMenu] = useState('Today')
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
            console.log(`MyTaskScreen.setCompletedTask Error: ${error.message}`)
        })
    }

    const fetchTasks = () => {
        Tasks.fetchAll(authCtx.sessionUser?.userId, (_, { rows: { _array: data } }) => {
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
                    renderItem={({ item }) => (
                        <TodoItem
                            {...item} 
                            onCheck={title => setCompletedTask(item.id, item.isCompleted)} />
                    )} />
            </View>
        </ScreenContainer>
    )
}

export default MyTaskScreen