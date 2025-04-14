import { View, Text } from "react-native";
import style from "./header-style";
import PokeBall from "../../../assets/svg/pokeball";

type headerProps = {
  title: string;
  showBackButton?: boolean;
};

const Header = ({ title, showBackButton = false }: headerProps) => {
  return (
    <View style={style.container}>
      {showBackButton ? "" : <PokeBall />}
      <Text style={style.title}>{title}</Text>
    </View>
  );
};

export default Header;
