import {Text, View, StyleProp, TextStyle} from "react-native";

type LabelProps = {
  title: string;
  styles?: StyleProp<TextStyle>;
};

const Label = ({ title, styles }: LabelProps) => {
  return (
    <View>
      <Text style={[styles]}>{title}</Text>
    </View>
  );
};

export default Label;
