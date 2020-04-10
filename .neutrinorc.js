const airbnb = require('@neutrinojs/airbnb');
const react = require('@neutrinojs/react');
const jest = require('@neutrinojs/jest');

module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    airbnb({
      eslint: {
        baseConfig: {
          rules: {
            'import/prefer-default-export': 'off',
          },
        },
      },
    }),
    react({
      html: {
        title: 'yelp-react'
      }
    }),
    jest({
      setupTestFrameworkScriptFile: '<rootDir>/test-setup.js',
      snapshotSerializers: ['enzyme-to-json/serializer'],
    }),
  ],
};
