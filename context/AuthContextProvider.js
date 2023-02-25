import { createContext, useState } from 'react'

export const AuthContext = createContext({
    isLogin: false,
    sessionUser: null,
    setIsLogin: (isLogin) => {},
    setSessionUser: (name) => {},
})

const AuthContextProvider = ({ children }) => {
    const [isSignin, setIsSignin] = useState(false)
    const [userSession, setUserSession] = useState(null)

    const setIsSigninHandler = (isLogin) => {
        setIsSignin(isLogin)
    }

    const setUserSessionHandler = (name) => {
        // TODO: save to sqlite/db/session
        setUserSession(name)
    }

    const value = {
        isLogin: isSignin,
        sessionUser: userSession,
        setIsLogin: setIsSigninHandler,
        setSessionUser: setUserSessionHandler
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContextProvider