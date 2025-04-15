
# 🧬 Pokemon App

A cross-platform mobile app built using **React Native** that provides a beautiful and responsive interface to explore Pokemon data. This project integrates smooth navigation, animations, chart visualizations, and modern UI design practices.

---

## Screenshots

### Andoird Screenshots: 

- https://drive.google.com/file/d/14NJafvC2UYKk9d4X2hVusFZChH6mEy5N/view?usp=sharing

- https://drive.google.com/file/d/1m9XlEglo1Al8wsVnnwyC8efTNi-YqQ8N/view?usp=sharing

### IOS Screenshots: 

- https://drive.google.com/file/d/1YfGb1MHOIVZfJRWTywS9xZ_hkE7kNBAa/view?usp=sharing

- https://drive.google.com/file/d/12edEPlcUCseP76mO-VdwuNdoplUm6adQ/view?usp=sharing


### Demo

- https://drive.google.com/file/d/1xAQk0sQDI4ackQ4I1Ue0d8XRaNKMRnZ9/view?usp=sharing

- https://drive.google.com/file/d/1vNKkLD6N51_XkWwzXxkIPnAC-qs46N-Z/view?usp=sharing


## Documentation

[Poke API Documentation](https://pokeapi.co/)

[React Native Documentation](https://reactnative.dev/docs/getting-started)


## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- Yarn or NPM
- Android Studio or Xcode (depending on platform)

### Installation

```bash
git clone https://github.com/your-username/pokemon-app.git
cd pokemon-app
npm install
```

### Running the App

For Android:

```bash
npm run android
```

For iOS:

```bash
npm run ios
```

To start the Metro bundler:

```bash
npm run start
```

### Linting

```bash
npm run lint
```

### Running Tests

```bash
npm test
```

---

## 🧩 Third-Party Packages Used

### 📱 Core Libraries

- [React](https://reactjs.org/)
- [React Native](https://reactnative.dev/)
- [React Redux](https://react-redux.js.org/)
- [@reduxjs/toolkit](https://redux-toolkit.js.org/)

### 🔀 Navigation

- [@react-navigation/native](https://reactnavigation.org/)
- [@react-navigation/native-stack](https://reactnavigation.org/docs/native-stack-navigator/)
- [@react-navigation/elements](https://reactnavigation.org/docs/elements/)
- [@react-native-masked-view/masked-view](https://github.com/react-native-masked-view/masked-view)

### 📊 UI & Animations

- [Lottie React Native](https://github.com/lottie-react-native/lottie-react-native)
- [React Native Linear Gradient](https://github.com/react-native-linear-gradient/react-native-linear-gradient)
- [React Native Shadow 2](https://github.com/SrBrahma/react-native-shadow-2)
- [React Native Skeleton Placeholder](https://github.com/chramos/react-native-skeleton-placeholder)
- [React Native Chart Kit](https://github.com/indiespirit/react-native-chart-kit)
- [React Native Render HTML](https://github.com/meliorence/react-native-render-html)
- [React Native SVG](https://github.com/software-mansion/react-native-svg)

### 📐 Responsiveness

- [React Native Responsive Fontsize](https://github.com/heyman333/react-native-responsive-fontSize)
- [React Native Responsive Screen](https://github.com/marudy/react-native-responsive-screen)
- [React Native Safe Area Context](https://github.com/th3rdwave/react-native-safe-area-context)
- [React Native Screens](https://github.com/software-mansion/react-native-screens)

### 📦 Lists & Performance

- [@shopify/flash-list](https://github.com/Shopify/flash-list)

### 🌐 Networking

- [Axios](https://axios-http.com/)

### 🧪 Development & Tooling

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://typicode.github.io/husky/)
- [Jest](https://jestjs.io/)
- [TypeScript](https://www.typescriptlang.org/)

---

## 🛠 Project Structure

The project follows a modular, scalable folder structure with clear separation of concerns:

```bash
src/
├── api/                         # API call setups
├── assets/                      # Static assets
│   ├── animations/
│   ├── fonts/
│   ├── images/
│   └── svg/
├── components/                  # Reusable UI components (Atomic Design)
│   ├── Atoms/
│   ├── Molecules/
│   └── Organisms/
├── constants/                   # Constant values and enums
│   ├── environment.tsx
│   ├── index.tsx
│   └── screens.tsx
├── navigation/                  # App navigation stack
│   └── index.tsx
├── screens/                     # App screens (feature-based)
│   ├── Home/
│   ├── Pokemon-Details/
│   └── Splash/
├── services/                    # Network and business logic
│   └── pokemonService.tsx
├── shared/types/               # Global TypeScript types
│   └── types.ts
├── store/                       # Redux store, slices, and related logic
├── theme/                       # App-wide themes
│   ├── colors/
│   └── fonts/
└── utils/helper/                # Utility functions and helpers
```

---

## 🧪 Testing & Quality

- Code is linted with ESLint and formatted with Prettier.
- Pre-commit hooks are enforced via Husky.
- Tests are written using Jest.

---


## 👨‍💻 Author

GitHub: [@Eddy118](https://github.com/Eddy118)
