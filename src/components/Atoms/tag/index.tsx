import { View } from "react-native";
import Styles from "./Tag-Styles";
import Label from "../label";

type TagProps = {
  title: string;
};
const Tag = ({ title }: TagProps) => {
  return (
    <View  style={Styles.container}>
      <Label styles={Styles.title} title={title}/>
    </View>
  );
};
export default Tag;
