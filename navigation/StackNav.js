import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FormTaskScreen from '../screens/FormTaskScreen';
import NotificationInfoScreen from '../screens/NotificationInfoScreen';
import BottomNav from './BottomNav';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContextProvider';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import AccountSettingScreen from '../screens/AccountSettingScreen';

const Stack = createNativeStackNavigator();

export default function StackNav() {
    const authCtx = useContext(AuthContext)
    
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            {authCtx.isLogin
                ?   <>
                        <Stack.Screen name="BottomNav" component={BottomNav} />
                        <Stack.Screen name="Notification" component={NotificationInfoScreen} />
                        <Stack.Screen name="FormTask" component={FormTaskScreen} />
                        <Stack.Screen name="AccountSetting" component={AccountSettingScreen} />
                    </>
                :
                    <>
                        <Stack.Screen name="Login" component={LoginScreen} />
                        <Stack.Screen name="Register" component={RegisterScreen} />
                    </>
            }
        </Stack.Navigator>
    );
}