import { Text, View } from "react-native";
import Styles from "./Tag-Styles";

type TagProps = {
  title: string;
};
const Tag = ({ title }: TagProps) => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>{title}</Text>
    </View>
  );
};
export default Tag;
