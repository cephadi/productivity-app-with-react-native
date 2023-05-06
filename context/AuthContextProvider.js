import { createContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({
    isLogin: false,
    sessionUser: null,
    setIsLogin: (isLogin) => {},
    setSessionUser: (data) => {},
})

const AuthContextProvider = ({ children }) => {
    const [isSignin, setIsSignin] = useState(false)
    const [userSession, setUserSession] = useState(null)

    const setIsSigninHandler = (isLogin) => {
        setIsSignin(isLogin)
    }

    const setUserSessionHandler = async (data) => {
        try {
            const jsonValue = JSON.stringify(data)
            await AsyncStorage.setItem('@userData', jsonValue)
            setUserSession(data)
        } catch (e) {
            // saving error
            console.log(`Error save to storage: ${e.message}`)
        }
    }

    const checkSessionUser = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@userData')
            if (jsonValue != null) {
                setUserSession(JSON.parse(jsonValue))
                setIsSignin(true)
            }
        } catch(e) {
            // error reading value
            console.log(`Error read from storage: ${e.message}`)
        }
    }

    useEffect(() => {
        checkSessionUser()
    }, [])

    const value = {
        isLogin: isSignin,
        sessionUser: userSession,
        setIsLogin: setIsSigninHandler,
        setSessionUser: setUserSessionHandler
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContextProvider