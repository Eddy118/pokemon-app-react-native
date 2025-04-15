import { Image, View } from "react-native";
import Styles from "./backgroundCardStyles";
import { hp } from "../../../utils/helper";

interface BackgroundCardProps {
  background: string;
  profile: string;
}
const BackgroundCard = ({background, profile }: BackgroundCardProps) => {
  return (
    <View style={{ width: "100%", height: hp(30) }}>
      <Image source={{ uri: background }} style={Styles.mainBackground} />
      <View style={Styles.backgroundImageContainer}>
        <Image
          source={{ uri: profile }}
          style={Styles.backgroundImage}
        />
      </View>
    </View>
  );
};
export default BackgroundCard;
