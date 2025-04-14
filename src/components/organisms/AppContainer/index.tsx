import { ReactNode } from "react";

import { KeyboardAvoidingView, Platform } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import Styles from "./AppContainerStyles";

type AppContainerProps = {
  children: ReactNode;
};

const AppContainer = ({ children }: AppContainerProps) => {
  return (
    <SafeAreaView style={Styles.constainer}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AppContainer;
