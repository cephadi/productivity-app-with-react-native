import React, { useContext } from 'react'
import { ScrollView, Text, View } from 'react-native'
import SettingItem from '../components/setting/SettingItem'
import HeaderTitle from '../components/ui/HeaderTitle'
import ScreenContainer from '../components/ui/ScreenContainer'
import { AuthContext } from '../context/AuthContextProvider'
import { useNavigation } from '@react-navigation/native'

const SettingScreen = () => {
    const authCtx = useContext(AuthContext)
    const navigation = useNavigation()
    const settingItems = [
        {
            label: 'Account',
            icon: 'account-cog',
            onPress: () => navigation.navigate('AccountSetting')
        },
        {
            label: 'Security',
            icon: 'account-details',
            onPress: () => console.log('security')
        },
        {
            label: 'Privacy Policy',
            icon: 'file-cog',
            onPress: () => console.log('privacy policy')
        },
        {
            label: 'Rate App',
            icon: 'star',
            onPress: () => console.log('rate app')
        },
        {
            label: 'Logout',
            icon: 'logout',
            onPress: () => {
                authCtx.setSessionUser(null)
                authCtx.setIsLogin(false)
            }
        },
    ]

    return (
        <ScreenContainer>
            <HeaderTitle 
                title="Settings" />
            <ScrollView showsVerticalScrollIndicator={false}>
                {settingItems.map((setting, i) => (
                    <SettingItem key={i} {...setting} />
                ))}
            </ScrollView>
        </ScreenContainer>
    )
}

export default SettingScreen