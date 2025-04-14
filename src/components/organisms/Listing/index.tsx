import { Text, View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { wp } from "../../../utils/helper";
import { PokemonType } from "../../../shared/types/types";
import { useCallback } from "react";

interface CustomListingWrapperProps {
  data: PokemonType[];
}

interface RednerListingProps {
  name: string;
  url: string;
}

const CustomListingWrapper = ({ data }: CustomListingWrapperProps) => {
  const renderLisitng = useCallback(({ ...props }: RednerListingProps) => {
    return (
      <View>
        <Text>{props.name}</Text>
      </View>
    );
  }, []);
  return (
    <View style={{ flex: 1, width: wp(100) }}>
      <FlashList
        data={data}
        renderItem={({ item }) => renderLisitng(item)}
        estimatedItemSize={200}
      />
    </View>
  );
};
export default CustomListingWrapper;
