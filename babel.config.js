module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
        '@babel/plugin-proposal-export-namespace-from',
        // Make sure that this plugin is loaded last
        'react-native-reanimated/plugin',
    ],
  };
};
