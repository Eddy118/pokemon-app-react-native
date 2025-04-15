import { View, Image, TouchableWithoutFeedback } from "react-native";
import style from "./header-style";
import PokeBall from "../../../assets/svg/pokeball";
import { useNavigation } from "@react-navigation/native";
import Label from "../../Atoms/label";

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
      <Label styles={style.title} title={title} />
    </View>
  );
};

export default Header;
