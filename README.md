# Expo Router Template with React Native Skia

An Expo Router template with React Native Skia (for performant graphic rendering & animations).

## Includes

- [Expo v50](https://docs.expo.dev/): Best DUX for React Native
- [Expo Router v3](https://docs.expo.dev/router/introduction/): Best framework to build universal apps (routing with deep linking, API server...). _Based on their `tabs@50` template_
- [React Native Skia](https://shopify.github.io/react-native-skia/): Most performant way to create universal graphics & animations for Web and Native
- [Reanimated v3](https://docs.swmansion.com/react-native-reanimated/): Smooth animations ran on the UI thread

## Get Started

Simply create a new expo app using this template:

```
npx create-expo-app@latest --template expo-router-nativewind-template MyUniversallyStyledApp
```

Run `yarn start` to start the server. Works out-of-the-box for web. For iOS, run `npx expo run:ios` and for Android run `npx expo run:android`.

## Using Skia on the Web

By default in this template, Skia is loaded using [defered component registration](https://shopify.github.io/react-native-skia/docs/getting-started/web#using-defered-component-registration) via `index.web.js`, so that **Skia works on Web out-of-the-box in any part of the app**.

### Code-Splitting for Web

If you ever wish to use [code splitting](https://shopify.github.io/react-native-skia/docs/getting-started/web#using-code-splitting) instead:

- Remove the `index.js` and `index.web.js` files and change your `package.json` entry point by updating this line: 

```json
{
  (...)
  "main": "expo-router/entry",
  (...)
}
```

- Create a loading file, like `SkiaUI.web.tsx`:

```tsx
import Constants from 'expo-constants';
import { Text, View, StyleSheet } from 'react-native';
import { WithSkiaWeb } from '@shopify/react-native-skia/lib/module/web';

const SkiaUI = () => <View style={styles.container}>
    <WithSkiaWeb
      opts={{ locateFile: () => '/static/js/canvaskit.wasm' }}
      getComponent={() => require('./HelloSkia')}
      fallback={<Text style={{ color: 'white', textAlign: 'center' }}>Loading Skia...</Text>}
    />
  </View>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
  },
});

export default SkiaUI;
```

_Note:_ for the native `SkiaUI.tsx`, you can simply load the `<HelloSkia />` component directly.