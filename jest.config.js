module.exports = {
  preset: '@react-native/jest-preset',
    transformIgnorePatterns: [
      'node_modules/(?!(react-native' +
        '|@react-native' +
        '|@react-navigation' +
        '|react-native-toast-message' +
        '|react-native-responsive-screen' +
        '|react-native-responsive-fontsize' +
        '|react-native-iphone-x-helper' +  
        '|react-native-shadow-2' +
        '|react-native-skeleton-placeholder' +
        '|@react-native-masked-view/masked-view' + 
        '|react-native-linear-gradient' + 
        '|react-redux' +
        '|react-native-chart-kit' +
        ')/)',
    ],
};
