import { getPokemonListing } from "../src/services/pokemonService";
import { render, screen } from "@testing-library/react-native";
import HomeScreen from "../src/screens/Home";
import { Provider } from "react-redux";
import { store } from "../src/store/store";
import { NavigationContainer } from "@react-navigation/native";

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
