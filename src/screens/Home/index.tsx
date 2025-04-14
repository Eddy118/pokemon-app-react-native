import React from "react";
import { View, Text } from "react-native";
import Fonts from "../../theme/fonts";
import AppContainer from "../../components/organisms/AppContainer";
import Header from "../../components/Molecules/Header";

const HomeScreen = () => {
  return (
    <AppContainer>
      <Header title="Gotta Catch 'Em All" />
      <View
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      ></View>
    </AppContainer>
  );
};

export default HomeScreen;
