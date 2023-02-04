import React from 'react'
import { StyleSheet } from 'react-native'
import { Portal, Modal } from 'react-native-paper'
import colors from '../../utils/colors'

const ModalScreen = ({ children, visible, hideModal, containerStyle }) => {
    return (
        <Portal>
            <Modal
               visible={visible}
               onDismiss={hideModal}
               contentContainerStyle={[styles.modalContainer, containerStyle]}>
                {children}
            </Modal>
        </Portal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: colors.white,
        maxHeight: '80%',
        margin: 8,
        padding: 6,
        borderRadius: 6
    }
})

export default ModalScreen