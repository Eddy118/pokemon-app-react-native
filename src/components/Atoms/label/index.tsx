import { Text, View, StyleProp } from "react-native";

type LabelProps = {
  title: string;
  styles?: StyleProp<any>;
};

const Label = ({ title, styles }: LabelProps) => {
  return (
    <View>
      <Text style={[styles]}>{title}</Text>
    </View>
  );
};

export default Label;
