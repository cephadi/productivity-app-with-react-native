import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import colors from '../../utils/colors'
import GroupTaskItem from '../ui/GroupTaskItem'

const data = [
    {
        icon: "file-plus",
        iconColor: colors.green,
        label: "To Do",
        totalTask: 5
    },
    {
        icon: "file-document",
        iconColor: colors.purple,
        label: "In Progress",
        totalTask: 10
    },
    {
        icon: "file-check",
        iconColor: colors.primary,
        label: "Done",
        totalTask: 21
    },
    {
        icon: "file-cancel",
        iconColor: colors.darkGray,
        label: "Skipped",
        totalTask: 7
    },
]

const GroupTask = () => {
    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
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