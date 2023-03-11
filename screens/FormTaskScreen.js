import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import { Checkbox } from 'react-native-paper'
import HeaderTitle from '../components/ui/HeaderTitle'
import InputText from '../components/ui/InputText'
import ScreenContainer from '../components/ui/ScreenContainer'
import SelectText from '../components/ui/SelectText'
import Tasks from '../data/Tasks'
import colors from '../utils/colors'

const FormTaskScreen = () => {
    const navigation = useNavigation()
    const [taskName, setTaskName] = useState('')
    const [taskGroup, setTaskGroup] = useState(null)
    const [isCompleted, setIsCompleted] = useState(false)

    const resetField = () => {
        setTaskName('')
        setTaskGroup(null)
        setIsCompleted(false)
    }

    const saveTaskHandler = () => {
        if (!taskName || !taskGroup) {
            ToastAndroid.show('All field is required!', ToastAndroid.LONG)
            return
        }

        const payload = [
            { column: 'task_title', value: taskName }, 
            { column: 'task_group', value: taskGroup?.value },
            { column: 'task_status', value: isCompleted ? 1 : 0 },
        ]
        Tasks.save(payload, (_, resultSet) => {
            if (resultSet.rowsAffected >= 1) {
                ToastAndroid.show('Successfully saved task!', ToastAndroid.LONG)
                resetField()
                navigation.goBack()
            }else{
                ToastAndroid.show('Failed save task!', ToastAndroid.LONG)
            }
        },
        (_, error) => {
            ToastAndroid.show(error.message, ToastAndroid.LONG)
            console.log(`FormTaskScreen.saveTaskHandler Error: ${error.message}`)
        })
    }

    return (
        <ScreenContainer>
            <HeaderTitle 
                title={"Create a New Task"}
                showBackBtn={true}
                showRightBtn={true}
                rightIcon="check"
                rightOnPress={saveTaskHandler} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <InputText 
                        placeholder={"Task Name"}
                        value={taskName}
                        onChange={setTaskName} />
                </View>
                <View>
                    <SelectText
                        title={"Choose a Task Group"}
                        placeholder={"Task Group"}
                        value={taskGroup}
                        onChange={setTaskGroup}
                        data={[
                            { label: 'To Do', value: 'todo' },
                            { label: 'In Progress', value: 'in_progress' },
                            { label: 'Done', value: 'done' },
                            { label: 'Skipped', value: 'skipped' },
                        ]} />
                </View>
                <View style={styles.checkboxContainer}>
                    <Checkbox
                        status={isCompleted ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setIsCompleted(!isCompleted);
                        }}
                        color={colors.primary} />
                    <Text>Complete Task?</Text>
                </View>
            </ScrollView>
        </ScreenContainer>
    )
}

const styles = StyleSheet.create({
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 6,
        margin: 6,
        backgroundColor: colors.white,
        borderRadius: 6,
        elevation: 1
    }
})

export default FormTaskScreen