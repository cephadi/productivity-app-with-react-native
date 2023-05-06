import React, { useContext, useState } from 'react'
import { Image, StyleSheet, Text, View, Dimensions, Pressable, ScrollView, Alert, ToastAndroid } from 'react-native'
import InputText from '../components/ui/InputText'
import ScreenContainer from '../components/ui/ScreenContainer'
import { AuthContext } from '../context/AuthContextProvider'
import colors from '../utils/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import Users from '../data/Users'

const RegisterScreen = () => {
    const authCtx = useContext(AuthContext)
    const navigation = useNavigation()
    const [fullname, setFullname] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const validateForm = () => {
        let isValid = true
        switch (true) {
            case (fullname.trim() === ''):
                Alert.alert("Failed", "Please fill your fullname!")
                isValid = false
                break;
            case (email.trim() === ''):
                Alert.alert("Failed", "Please fill your email!")
                isValid = false
                break;
            case (!String(email).toLowerCase().match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)):
                Alert.alert("Failed", "Please input valid email!")
                isValid = false
                break;
            case (username.trim() === ''):
                Alert.alert("Failed", "Please fill your username!")
                isValid = false
                break;
            case (password.trim() === ''):
                Alert.alert("Failed", "Please fill your email!")
                isValid = false
                break;
            case (password !== confirmPassword):
                Alert.alert("Failed", "Please input valid password!")
                isValid = false
                break;
        }
        return isValid
    }

    const registerHandler = () => {
        if (!validateForm()) 
            return

        saveUser()
    }

    const saveUser = () => {
        const payload = [
            { column: 'fullname', value: fullname }, 
            { column: 'email', value: email },
            { column: 'username', value: username },
            { column: 'password', value: password },
        ]
        Users.save(payload, (_, resultSet) => {
            if (resultSet.rowsAffected >= 1) {
                ToastAndroid.show('Successfully register user!', ToastAndroid.LONG)
                authCtx.setSessionUser({
                    userId: resultSet.insertId,
                    fullname,
                    email,
                    username
                })
                authCtx.setIsLogin(true)
            }else{
                ToastAndroid.show('Failed register user!', ToastAndroid.LONG)
                navigation.navigate('Register')
            }
        },
        (_, error) => {
            ToastAndroid.show(error.message, ToastAndroid.LONG)
            console.log(`RegisterScreen.saveUser Error: ${error.message}`)
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
                        inputStyles={{ flex: 0 }} />
                </View>
                <View style={styles.inputContainer}>
                    <InputText 
                        placeholder={"Your Username"}
                        value={username}
                        onChange={setUsername}
                        inputStyles={{ flex: 0 }} />
                </View>
                <View style={styles.inputContainer}>
                    <InputText 
                        placeholder={"Your Password"}
                        value={password}
                        onChange={setPassword}
                        isSecure={true}
                        inputStyles={{ flex: 0 }} />
                </View>
                <View style={styles.inputContainer}>
                    <InputText 
                        placeholder={"Your Confirm Password"}
                        value={confirmPassword}
                        onChange={setConfirmPassword}
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
                        onPress={registerHandler}
                        style={({ pressed }) => [
                            styles.btnContainer,
                            pressed ? { opacity: 0.7 } : null
                        ]}>
                        <MaterialCommunityIcons name='account-check' color={colors.white} size={24} />
                        <Text 
                            style={{ 
                                marginLeft: 4,
                                fontSize: 18, 
                                fontWeight: 'bold', 
                                color: colors.white }}>
                            Register
                        </Text>
                    </Pressable>
                    <Pressable
                        onPress={() => navigation.navigate('Login')}
                        style={({ pressed }) => [
                            styles.btnContainer,
                            { backgroundColor: colors.textGray },
                            pressed ? { opacity: 0.7 } : null
                        ]}>
                        <MaterialCommunityIcons name='login' color={colors.white} size={24} />
                        <Text 
                            style={{ 
                                marginLeft: 4,
                                fontSize: 18, 
                                fontWeight: 'bold', 
                                color: colors.white }}>
                            Back to Login
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
        height: height / 3,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        elevation: 2,
    },
    inputContainer: {
        marginVertical: 2
    },
    imageContainer: {
        width: width,
        height: height / 4
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

export default RegisterScreen