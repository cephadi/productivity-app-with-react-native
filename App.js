import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import StackNav from './navigation/StackNav';
import colors from './utils/colors';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper'
import AuthContextProvider from './context/AuthContextProvider';

const themePaper = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: colors.primary,
    }
}

export default function App() {
    return (
        <AuthContextProvider>
            <PaperProvider theme={themePaper}>
                <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
                    <NavigationContainer>
                        <StackNav />
                    </NavigationContainer>
            </PaperProvider>
        </AuthContextProvider>
    );
}
