import React, { useContext, useState } from 'react'
import { Image, StyleSheet, Text, View, Dimensions, Pressable, ScrollView, Alert, ToastAndroid } from 'react-native'
import InputText from '../components/ui/InputText'
import ScreenContainer from '../components/ui/ScreenContainer'
import { AuthContext } from '../context/AuthContextProvider'
import colors from '../utils/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import Users from '../data/Users'

const LoginScreen = () => {
    const authCtx = useContext(AuthContext)
    const navigation = useNavigation()
    const [userAccount, setUserAccount] = useState('')
    const [userPassword, setUserPassword] = useState('')

    const loginHandler = () => {
        if (userAccount.trim() === '') {
            Alert.alert("Failed", "Please fill your account!")
            return
        }

        getUser()
    }

    const getUser = () => {
        Users.fetchUserByEmailOrUsername(userAccount, (_, { rows: { _array: data } }) => {
            if (data.length > 0) {
                if (data[0].password === userPassword) {
                    ToastAndroid.show('Successfully login!', ToastAndroid.LONG)
                    authCtx.setSessionUser({
                        userId: data[0].id,
                        fullname: data[0].fullname,
                        email: data[0].email,
                        username: data[0].username
                    })
                    authCtx.setIsLogin(true)
                }else{
                    ToastAndroid.show('Failed login! Password is wrong.', ToastAndroid.LONG)
                    setUserPassword('')
                }
            }else{
                ToastAndroid.show('Account not found! Please input valid account.', ToastAndroid.LONG)
            }
        },
        (_, error) => {
            ToastAndroid.show('Error fetching user!', ToastAndroid.LONG)
            console.log(`Fetching getUser Error: ${error.message}`)
        })
    }

    return (
        <ScreenContainer containerStyle={{
            padding: 0,
        }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.imageBgContainaer}>
                    <View style={styles.imageContainer}>
                        <Image 
                            source={require('../assets/splash-2.png')} 
                            resizeMode="contain"
                            style={{ width: '100%', height: '100%' }} />
                    </View>
                </View>
                <View style={styles.greetingContainer}>
                    <Text style={{ 
                        fontSize: 20, 
                        fontWeight: 'bold', 
                        marginVertical: 6 }}>Hello Bro!</Text>
                    <Text style={{
                        fontSize: 16,
                        textAlign: 'center'
                    }}>Welcome to the Productivity App! I am glad that you are using this app. I will be happy to help you grow your productivity.</Text>
                </View>
                <View style={styles.inputContainer}>
                    <InputText 
                        placeholder={"Your Username or Email"}
                        value={userAccount}
                        onChange={setUserAccount}
                        inputStyles={{ flex: 0 }} />
                </View>
                <View style={styles.inputContainer}>
                    <InputText 
                        placeholder={"Your Password"}
                        value={userPassword}
                        onChange={setUserPassword}
                        isSecure={true}
                        inputStyles={{ flex: 0 }} />
                </View>
                <View 
                    style={{ 
                        flexDirection: 'row', 
                        alignItems: 'center', 
                        justifyContent: 'space-evenly', 
                        marginBottom: 8 }}>
                    <Pressable
                        onPress={loginHandler}
                        style={({ pressed }) => [
                            styles.btnContainer,
                            pressed ? { opacity: 0.7 } : null
                        ]}>
                        <MaterialCommunityIcons name='login' color={colors.white} size={24} />
                        <Text 
                            style={{ 
                                marginLeft: 4,
                                fontSize: 18, 
                                fontWeight: 'bold', 
                                color: colors.white }}>
                            Login
                        </Text>
                    </Pressable>
                    <Pressable
                        onPress={() => navigation.navigate('Register')}
                        style={({ pressed }) => [
                            styles.btnContainer,
                            { backgroundColor: colors.textGray },
                            pressed ? { opacity: 0.7 } : null
                        ]}>
                        <MaterialCommunityIcons name='account-plus' color={colors.white} size={24} />
                        <Text 
                            style={{ 
                                marginLeft: 4,
                                fontSize: 18, 
                                fontWeight: 'bold', 
                                color: colors.white }}>
                            Register
                        </Text>
                    </Pressable>
                </View>
            </ScrollView>
        </ScreenContainer>
    )
}

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    imageBgContainaer: {
        marginVertical: 6,
        backgroundColor: colors.primary,
        height: height / 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        elevation: 2,
    },
    inputContainer: {
        marginVertical: 2,
    },
    imageContainer: {
        width: width,
        height: height / 3
    },
    greetingContainer: {
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnContainer: {
        flex: 1,
        margin: 4,
        height: 50,
        backgroundColor: colors.primary,
        borderRadius: 6,
        padding: 6,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2
    }
})

export default LoginScreen