import { Platform } from "react-native";

import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen";

interface FlavorTextEntry {
  flavor_text: string;
  language: {
    name: string;
  };
}

interface PokemonSpecies {
  flavor_text_entries: FlavorTextEntry[];
}

const isIOS = () => {
  return Platform.OS === "ios";
};

const wp = (percent: number) => widthPercentageToDP(percent);
const hp = (percent: number) => heightPercentageToDP(percent);

const prepareHtmlToFormat = (desc: string) => {
  const source = {
    html: `
  <p style='text-align:center;'>
 ${desc}
  </p>`,
  };

  return source;
};

const extractPokemonDescription = (species: PokemonSpecies) => {
  const description =
    species?.flavor_text_entries?.[0]?.flavor_text +
    species?.flavor_text_entries?.[6]?.flavor_text;
  return description ?? "";
};
export { isIOS, wp, hp, prepareHtmlToFormat, extractPokemonDescription };
