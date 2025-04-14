import { View } from "react-native";
import Label from "../../Atoms/label";
import Styles from "./listItemStyle";
import Tag from "../../Atoms/tag";

type ListItemProps = {
  types: string[];
  label: string;
};

const ListItem = ({ types, label }: ListItemProps) => {
  return (
    <View style={Styles.container}>
      <Label title={`${label}`} styles={Styles.label} />

      <View style={Styles.tagContainer}>
        {types?.map((type: string) => {
          return <Tag title={type} />;
        })}
      </View>
    </View>
  );
};
export default ListItem;
