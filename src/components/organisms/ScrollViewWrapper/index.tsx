import React, { ReactNode } from "react";
import { ScrollView } from "react-native";
import Styles from "./ScrollVIewMapperStyles";

type ScrollViewProps = {
  children: ReactNode;
};

const ScrollViewWrapper: React.FC<ScrollViewProps> = ({ children }) => {
  return (
    <ScrollView
      contentContainerStyle={Styles.container}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  );
};

export default ScrollViewWrapper;
