import { View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { PokemonType } from "../../../shared/types/types";
import { useCallback } from "react";
import PokemonListingCard from "../PokemonCard";
import Styles from "./ListingStyles";

interface CustomListingWrapperProps {
  data: PokemonType[];
}

interface RednerListingProps {
  name: string;
  url: string;
  imageUrl: string;
  abilities: string[];
}

const CustomListingWrapper = ({ data }: CustomListingWrapperProps) => {
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
      />
    </View>
  );
};
export default CustomListingWrapper;
