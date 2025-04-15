import { View, ActivityIndicator } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { PokemonType } from "../../../shared/types/types";
import { useCallback } from "react";
import PokemonListingCard from "../PokemonCard";
import Styles from "./ListingStyles";

interface CustomListingWrapperProps {
  data: PokemonType[];
  onReachEnd: () => void;
}
interface RednerListingProps {
  name: string;
  url: string;
  imageUrl: string;
  abilities: string[];
}

const CustomListingWrapper = ({
  data,
  onReachEnd,
}: CustomListingWrapperProps) => {
  const renderLisitng = useCallback(({ ...props }: RednerListingProps) => {
    return (
      <View style={Styles.listContentStyles}>
        <PokemonListingCard {...props} />
      </View>
    );
  }, []);
  return (
    <View style={Styles.container}>
      <FlashList
        keyExtractor={(item) => item.name}
        data={data}
        renderItem={({ item }) => renderLisitng(item)}
        estimatedItemSize={200}
        style={Styles.listStyles}
        ItemSeparatorComponent={() => <View style={Styles.itemSeperator} />}
        showsVerticalScrollIndicator={false}
        onEndReached={() => onReachEnd()}
        onEndReachedThreshold={0.7}
        ListFooterComponent={() => <ActivityIndicator />}
        ListFooterComponentStyle={Styles.listFooter}
      />
    </View>
  );
};
export default CustomListingWrapper;
