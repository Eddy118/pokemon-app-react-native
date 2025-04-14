import { Text, View, StyleProp } from "react-native";
import LabelStyle from "./LableStyle";

type LabeProps = {
  title: string;
  styles?: StyleProp<any>;
};

const Label = ({ title, styles }: LabeProps) => {
  return (
    <View>
      <Text style={[styles, LabelStyle.label]}>{title}</Text>
    </View>
  );
};

export default Label;
