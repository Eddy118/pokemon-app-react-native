import {
  getPokemonDetails,
  getPokemonListing,
} from "../src/services/pokemonService";
import {
  render,
  screen,
  waitFor,
  fireEvent,
} from "@testing-library/react-native";
import HomeScreen from "../src/screens/Home";
import { Provider } from "react-redux";
import { store } from "../src/store/store";
import { NavigationContainer } from "@react-navigation/native";
import PokemonDetails from "../src/screens/Pokemon-Details";
import { mockPokemonName } from "../mock/data";

describe("Home Screen rendering", () => {
  it("Home Screen Rendering", async () => {
    render(
      <Provider store={store}>
        <NavigationContainer>
          <HomeScreen />
        </NavigationContainer>
      </Provider>
    );
    expect(screen.toJSON()).not.toBeNull();
  });
});

describe("Pokemon Details Screen rendering", () => {
  const route = {
    params: {
      namae: "charmander",
    },
  };
  it("Pokemon details Rendering", async () => {
    render(
      <Provider store={store}>
        <NavigationContainer>
          <PokemonDetails route={route} />
        </NavigationContainer>
      </Provider>
    );
    expect(screen.toJSON()).not.toBeNull();
  });
});

describe("Pokemon Details API", () => {
  it("fetche Pokemon details Api", async () => {
    const { name, abilities, moves, sprites, stats } = await getPokemonDetails(
      mockPokemonName
    );

    expect(name).toBe(mockPokemonName);
    expect(abilities).toBeTruthy();
    expect(moves).toBeTruthy();
    expect(sprites).toBeTruthy();
    expect(stats.length).toBeTruthy();
  });
});

describe("Pokemon Listing API", () => {
  it("fetche listing Api", async () => {
    const response = await getPokemonListing({ page: 1, pageSize: 10 });
    expect(Array.isArray(response)).toBe(true);
    expect(response.length).toBeGreaterThan(0);
    expect(response[0]).toHaveProperty("name");
    expect(response[0]).toHaveProperty("url");
    expect(response[0]).toHaveProperty("abilities");
  });
});

describe("Pokemon Listing  Rendering", () => {
  it("Home Screen Pokemon Listing Rendering", async () => {
    const { getByTestId, getByText, queryAllByTestId } = render(
      <Provider store={store}>
        <NavigationContainer>
          <HomeScreen />
        </NavigationContainer>
      </Provider>
    );

    await waitFor(() => {
      expect(getByText("Gotta Catch 'Em All")).toBeTruthy();
    });

    await waitFor(() => {
      const list = getByTestId("Pokemon-list");

      fireEvent.scroll(list, {
        nativeEvent: {
          contentOffset: { y: 1000 },
          contentSize: { height: 2000, width: 100 },
          layoutMeasurement: { height: 1000, width: 100 },
        },
      });

      const renderedItems = queryAllByTestId("pokemon-item");
      expect(renderedItems).toBeTruthy();
    });
  });
});
