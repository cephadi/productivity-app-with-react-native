import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Checkbox } from 'react-native-paper'
import HeaderTitle from '../components/ui/HeaderTitle'
import InputText from '../components/ui/InputText'
import ScreenContainer from '../components/ui/ScreenContainer'
import SelectText from '../components/ui/SelectText'
import colors from '../utils/colors'

const FormTaskScreen = () => {
    const [taskName, setTaskName] = useState('')
    const [taskGroup, setTaskGroup] = useState('')
    const [isCompleted, setIsCompleted] = useState(false)

    return (
        <ScreenContainer>
            <HeaderTitle 
                title={"Create a New Task"}
                showBackBtn={true}
                showRightBtn={true}
                rightIcon="check"
                rightOnPress={() => console.log('submit task')} />
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