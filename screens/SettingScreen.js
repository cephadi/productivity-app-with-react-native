import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import SettingItem from '../components/setting/SettingItem'
import HeaderTitle from '../components/ui/HeaderTitle'
import ScreenContainer from '../components/ui/ScreenContainer'

const settingItems = [
    {
        label: 'Account',
        icon: 'account-cog'
    },
    {
        label: 'Security',
        icon: 'account-details'
    },
    {
        label: 'Privacy Policy',
        icon: 'file-cog'
    },
    {
        label: 'Rate App',
        icon: 'star'
    },
]

const SettingScreen = () => {
    return (
        <ScreenContainer>
            <HeaderTitle 
                title="Settings" />
            <ScrollView showsVerticalScrollIndicator={false}>
                {settingItems.map((setting, i) => (
                    <SettingItem key={i} {...setting} onPress={() => console.log('setting', setting.label)} />
                ))}
            </ScrollView>
        </ScreenContainer>
    )
}

export default SettingScreen