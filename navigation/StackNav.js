import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNav from './BottomNav';

const Stack = createNativeStackNavigator();

export default function StackNav() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="BottomNav" component={BottomNav} />
        </Stack.Navigator>
    );
}