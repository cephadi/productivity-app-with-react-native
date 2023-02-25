import React, { useContext, useState } from 'react'
import { Image, StyleSheet, Text, View, Dimensions, Pressable, ScrollView, Alert } from 'react-native'
import InputText from '../components/ui/InputText'
import ScreenContainer from '../components/ui/ScreenContainer'
import { AuthContext } from '../context/AuthContextProvider'
import colors from '../utils/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const LoginScreen = () => {
    const authCtx = useContext(AuthContext)
    const [fullname, setFullname] = useState('')

    const loginHandler = () => {
        if (fullname.trim() === '') {
            Alert.alert("Failed", "Please fill your fullname!")
            return
        }

        authCtx.setSessionUser(fullname)
        authCtx.setIsLogin(true)
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
                <View style={{ justifyContent: 'flex-end', marginBottom: 8 }}>
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
        height: 100
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