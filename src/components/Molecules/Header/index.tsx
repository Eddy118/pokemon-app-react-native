import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import style from "./header-style";
import PokeBall from "../../../assets/svg/pokeball";
import { useNavigation } from "@react-navigation/native";

type headerProps = {
  title: string;
  showBackButton?: boolean;
};

const Header = ({ title, showBackButton = false }: headerProps) => {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      {showBackButton ? (
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <Image
            style={style.backBtn}
            source={require("../../../assets/images/back.png")}
          />
        </TouchableWithoutFeedback>
      ) : (
        <PokeBall />
      )}
      <Text style={style.title}>{title}</Text>
    </View>
  );
};

export default Header;
