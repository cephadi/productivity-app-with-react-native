import React, { useContext, useEffect, useState } from 'react'
import { ScrollView, StyleSheet, ToastAndroid, View } from 'react-native'
import ScreenContainer from '../components/ui/ScreenContainer'
import HeaderTitle from '../components/ui/HeaderTitle'
import InputText from '../components/ui/InputText'
import { AuthContext } from '../context/AuthContextProvider'
import Users from '../data/Users'
import { useNavigation } from '@react-navigation/native'

const AccountSettingScreen = () => {
    const authCtx = useContext(AuthContext)
    const navigation = useNavigation()
    const [fullname, setFullname] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {
        populateData()
    }, [])

    const populateData = () => {
        setFullname(authCtx.sessionUser?.fullname)
        setUsername(authCtx.sessionUser?.username)
        setEmail(authCtx.sessionUser?.email)
    }

    const updateProfileHandler = () => {
        const payload = [
            { column: 'fullname', value: `'${fullname}'` },
        ]

        Users.update(authCtx.sessionUser?.userId, payload, (_, resultSet) => {
            if (resultSet.rowsAffected >= 1) {
                ToastAndroid.show('Successfully updated account!', ToastAndroid.LONG)
                authCtx.setSessionUser({
                    userId: authCtx.sessionUser?.userId,
                    fullname: fullname,
                    email: email,
                    username: username
                })
                navigation.goBack()
            }else{
                ToastAndroid.show('Failed update account!', ToastAndroid.LONG)
            }
        },
        (_, error) => {
            ToastAndroid.show(error.message, ToastAndroid.LONG)
            console.log(`AccountSettingScreen.updateProfile Error: ${error.message}`)
        })
    }

    return (
        <ScreenContainer>
            <HeaderTitle 
                title={"Account Setting"}
                showBackBtn={true}
                showRightBtn={true}
                rightIcon="check"
                rightOnPress={updateProfileHandler} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.inputContainer}>
                    <InputText 
                        placeholder={"Your Fullname"}
                        value={fullname}
                        onChange={setFullname}
                        inputStyles={{ flex: 0 }} />
                </View>
                <View style={styles.inputContainer}>
                    <InputText 
                        placeholder={"Your Email"}
                        value={email}
                        onChange={setEmail}
                        disabled={true}
                        inputStyles={{ flex: 0 }} />
                </View>
                <View style={styles.inputContainer}>
                    <InputText 
                        placeholder={"Your Username"}
                        value={username}
                        onChange={setUsername}
                        disabled={true}
                        inputStyles={{ flex: 0 }} />
                </View>
            </ScrollView>
        </ScreenContainer>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        marginVertical: 2
    },
})

export default AccountSettingScreen