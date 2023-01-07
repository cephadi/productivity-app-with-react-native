import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import colors from '../../utils/colors'
import ButtonText from '../ui/ButtonText'
import GroupTaskItem from '../ui/GroupTaskItem'
import TitleSection from '../ui/TitleSection'

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

const MyTask = () => {
    return (
        <View style={styles.container}>
            <View style={styles.sectionContainer}>
                <TitleSection title={"My Task"} />
                <ButtonText label={"See All"} onPress={() => console.log('see all')} />
            </View>
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
    sectionContainer: {
        margin: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 2
    },
})

export default MyTask