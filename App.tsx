import MainNavigation from "./src/navigation";
import { Provider } from "react-redux";
import { store } from "./src/store/store";

import { LogBox } from "react-native";
import * as Sentry from "@sentry/react-native";
import ErrorBoundary from "./src/components/Molecules/ErrorBoundary";

Sentry.init({
  dsn: process.env.Sentry_Key,

  // Configure Session Replay
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1,
  integrations: [Sentry.mobileReplayIntegration()],
});
LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs();

const App = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <MainNavigation />
      </Provider>
    </ErrorBoundary>
  );
};
export default Sentry.wrap(App);
