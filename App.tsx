import { LogBox, StatusBar, useColorScheme } from 'react-native';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Sentry from '@sentry/react-native';

import MainNavigation from './src/navigation';
import { store } from './src/store/store';
import ErrorBoundary from './src/components/Molecules/ErrorBoundary';

Sentry.init({
    dsn: process.env.Sentry_Key,
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1,
    integrations: [Sentry.mobileReplayIntegration()],
});

LogBox.ignoreAllLogs();

const App = () => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <ErrorBoundary>
            <Provider store={store}>
                <SafeAreaProvider>
                    <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
                    <MainNavigation />
                </SafeAreaProvider>
            </Provider>
        </ErrorBoundary>
    );
};

export default Sentry.wrap(App);