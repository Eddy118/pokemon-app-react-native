import { Text, View, StyleProp } from "react-native";

type LabeProps = {
  title: string;
  styles?: StyleProp<any>;
};

const Label = ({ title, styles }: LabeProps) => {
  return (
    <View>
      <Text style={[styles]}>{title}</Text>
    </View>
  );
};

export default Label;
