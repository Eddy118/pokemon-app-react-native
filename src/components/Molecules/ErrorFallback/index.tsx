import { View, Text } from "react-native";
import Styles from "./ErrorFallBackstyles";
import Label from "../../Atoms/label";

const ErrorFallback = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.emoji}>😓</Text>
      <Label title={"Something went wrong"} styles={Styles.title} />
      <Label
        title={" We’re working to fix the issue. Please try again later."}
        styles={Styles.message}
      />
    </View>
  );
};

export default ErrorFallback;
