import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import Tasks from '../../data/Tasks'
import colors from '../../utils/colors'
import GroupTaskItem from '../ui/GroupTaskItem'

const data = [
    {
        icon: "file-plus",
        iconColor: colors.green,
        label: "To Do",
        keyGroup: 'todo',
        totalTask: 0
    },
    {
        icon: "file-document",
        iconColor: colors.purple,
        label: "In Progress",
        keyGroup: 'in_progress',
        totalTask: 0
    },
    {
        icon: "file-check",
        iconColor: colors.primary,
        label: "Done",
        keyGroup: 'done',
        totalTask: 0
    },
    {
        icon: "file-cancel",
        iconColor: colors.darkGray,
        label: "Skipped",
        keyGroup: 'skipped',
        totalTask: 0
    },
]

const GroupTask = () => {
    const [listGroups, setListGroups] = useState(data)

    const countGroup = (group) => {
        Tasks.countTasksByGroup(group, (_, { rows: { _array } }) => {
            if (_array.length > 0) {
                const total = _array[0].total
                const indexGroup = listGroups.findIndex(obj => obj.keyGroup === group)
                const newGroups = [...listGroups]
                newGroups[indexGroup].totalTask = total
                setListGroups(newGroups)
            }
        },
        (_, error) => {
            console.log(`GroupTask.countGroup ${group} Error: ${error.message}`)
        })
    }

    useEffect(() => {
        countGroup('todo')
        countGroup('in_progress')
        countGroup('done')
        countGroup('skipped')
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={listGroups}
                keyExtractor={(_,i) => i}
                renderItem={({ item }) => <GroupTaskItem {...item} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default GroupTask