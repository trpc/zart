module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['@expo/next-adapter/babel'],
    plugins: ['react-native-reanimated/plugin']
  };
};
