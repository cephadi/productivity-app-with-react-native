import React, { useState } from 'react'
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import colors from '../../utils/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import ModalScreen from './ModalScreen'
import { RadioButton } from 'react-native-paper'

const ModalSelect = ({ visible, hideModal, items, title, selectedValue, onSelected }) => {
    return (
        <ModalScreen visible={visible} hideModal={hideModal}>
            <View>
                <Text style={styles.titleModal}>{title}</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <RadioButton.Group value={selectedValue} onValueChange={onSelected}>
                    <View>
                        {items?.map((item, i) => (
                            <View style={styles.radioItemContainer} key={i}>
                                <RadioButton
                                    value={item.value}
                                    color={colors.primary}
                                />
                                <Text>{item.label}</Text>
                            </View>
                        ))}
                    </View>
                </RadioButton.Group>
            </ScrollView>
        </ModalScreen>
    )
}

const SelectText = ({ value, placeholder, onChange, data, title }) => {
    const [showModal, setShowModal] = useState(false)

    const selectedHandler = (selectedItem) => {
        setShowModal(false)
        const indexItem = data.findIndex(obj => obj.value === selectedItem)
        onChange(data[indexItem])
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={colors.darkGray}
                value={value?.label}
                editable={false}
                selectTextOnFocus={false}
                selectionColor={colors.primary}
                style={styles.inputText} />
            <Pressable
                onPress={() => setShowModal(true)}
                style={({ pressed }) => [
                    styles.btnContainer,
                    pressed ? { opacity: 0.75 } : null
                ]}>
                <MaterialCommunityIcons name="format-list-bulleted" size={26} color={colors.white} />
            </Pressable>
            <ModalSelect 
                title={title}
                visible={showModal} 
                hideModal={() => setShowModal(false)}
                selectedValue={value?.value}
                onSelected={selectedHandler}
                items={data} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 4,
        padding: 4,
        borderRadius: 6,
        backgroundColor: colors.white,
        elevation: 1
    },
    inputText: {
        flex: 1,
        padding: 8,
        fontSize: 16,
        color: colors.darkGray
    },
    btnContainer: {
        padding: 8,
        borderRadius: 6,
        backgroundColor: colors.primary
    },
    radioItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 6
    },
    titleModal: {
        marginVertical: 8,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default SelectText