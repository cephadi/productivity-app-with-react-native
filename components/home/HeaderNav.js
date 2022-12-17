import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../../utils/colors'

const Avatar = () => (
    <View style={styles.avatarContainer}>
        <Image source={require('../../assets/profile-avatar/profile-2.png')} style={{ width: '100%', height: '100%' }} />
    </View>
)

const NotificationBtn = ({ onPress }) => (
    <Pressable
        onPress={onPress}
        style={({ pressed }) => [
            styles.btnNotifContainer,
            pressed ? { backgroundColor: colors.textGray } : null
        ]}>
        <MaterialCommunityIcons name="bell-outline" size={28} />
    </Pressable>
)

const HeaderNav = () => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.greetingContainer}>
                <Avatar />
                <View style={styles.infoContainer}>
                    <Text style={styles.greetingText}>Welcome,</Text>
                    <Text style={styles.profileText}>Hadi Purnomo</Text>
                </View>
            </View>
            <View>
                <NotificationBtn />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 8,
        margin: 8
    },
    greetingContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatarContainer: {
        width: 50,
        height: 50
    },
    infoContainer: {
        marginLeft: 8
    },
    btnNotifContainer: {
        padding: 4,
        borderRadius: 6,
    },
    greetingText: {
        fontSize: 16,
        color: colors.darkGray,
        fontWeight: 'bold'
    },
    profileText: {
        fontSize: 16,
        fontWeight: 'bold'
    }
})

export default HeaderNav