import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import HeaderTitle from '../components/ui/HeaderTitle'
import ScreenContainer from '../components/ui/ScreenContainer'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../utils/colors'

const notif = [
    {
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        isRead: false,
    },
    {
        message: "Task berhasil diubah.",
        isRead: false,
    },
    {
        message: "Task berhasil dihapus.",
        isRead: false,
    },
    {
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        isRead: false,
    },
    {
        message: "Task berhasil dihapus.",
        isRead: false,
    },
    {
        message: "Task berhasil diubah.",
        isRead: true,
    },
    {
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        isRead: true,
    },
    {
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        isRead: true,
    },
    {
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        isRead: true,
    },
    {
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        isRead: true,
    },
    {
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        isRead: true,
    },
    {
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        isRead: true,
    },
    {
        message: "Task berhasil diubah.",
        isRead: true,
    },
]

const NotifItem = ({ message, isRead }) => {
    return (
        <View style={styles.notifItemContainer}>
            <View style={styles.notifIconContainer}>
                <MaterialCommunityIcons 
                    name={isRead ? "bell-outline" : "bell-badge"} 
                    color={colors.primary} 
                    size={28} />
            </View>
            <View>
                <Text>{message}</Text>
            </View>
        </View>
    )
}

const NotificationInfoScreen = () => {
    
    return (
        <ScreenContainer>
            <HeaderTitle 
                title={"Notifications"}
                showBackBtn={true}
                showRightBtn={true}
                rightIcon="notification-clear-all"
                rightOnPress={() => console.log('clear notif')} />
            <View style={{ flex: 1 }}>
                <FlatList
                    data={notif}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(_, i) => i}
                    renderItem={({ item }) => <NotifItem {...item} />} />
            </View>
        </ScreenContainer>
    )
}

const styles = StyleSheet.create({
    notifItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 6,
        paddingVertical: 8,
        paddingHorizontal: 6,
        marginHorizontal: 4,
        marginVertical: 2,
        backgroundColor: colors.white,
        elevation: 1,
    },
    notifIconContainer: {
        margin: 4,
        marginRight: 6,
    }
})

export default NotificationInfoScreen