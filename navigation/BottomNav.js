import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import HomeScreen from '../screens/HomeScreen';
import MyTaskScreen from '../screens/MyTaskScreen';
import RoutinesScreen from '../screens/RoutinesScreen';
import SettingScreen from '../screens/SettingScreen';
import colors from '../utils/colors';

const Tab = createBottomTabNavigator();

export default function BottomNav() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
            }}>
            <Tab.Screen 
                name="Home" 
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused, size }) => (
                        <View style={styles.iconContainer}>
                            <MaterialCommunityIcons 
                                name={focused ? "home" : "home-outline"}
                                size={focused ? size + 8 : size + 4}
                                color={focused ? colors.primary : colors.textGray} />
                        </View>
                    )
                }} />
            <Tab.Screen 
                name="MyTask" 
                component={MyTaskScreen}
                options={{
                    tabBarIcon: ({ focused, size }) => (
                        <View style={styles.iconContainer}>
                            <MaterialCommunityIcons 
                                name={focused ? "view-list" : "view-list-outline"}
                                size={focused ? size + 8 : size + 4}
                                color={focused ? colors.primary : colors.textGray} />
                        </View>
                    )
                }} />
            <Tab.Screen 
                name="Routines" 
                component={RoutinesScreen}
                options={{
                    tabBarIcon: ({ focused, size }) => (
                        <View style={styles.iconContainer}>
                            <MaterialCommunityIcons 
                                name={focused ? "account-check" : "account-check-outline"}
                                size={focused ? size + 8 : size + 4}
                                color={focused ? colors.primary : colors.textGray} />
                        </View>
                    )
                }} />
            <Tab.Screen 
                name="Setting" 
                component={SettingScreen}
                options={{
                    tabBarIcon: ({ focused, size }) => (
                        <View style={styles.iconContainer}>
                            <MaterialCommunityIcons 
                                name={focused ? "cog" : "cog-outline"}
                                size={focused ? size + 8 : size + 4}
                                color={focused ? colors.primary : colors.textGray} />
                        </View>
                    )
                }} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    iconContainer: {
        marginVertical: 2
    }
})