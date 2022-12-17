import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import StackNav from './navigation/StackNav';
import colors from './utils/colors';

export default function App() {
    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
            <NavigationContainer>
                <StackNav />
            </NavigationContainer>
        </>
    );
}
