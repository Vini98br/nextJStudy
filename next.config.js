const withImages = require('next-images');
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
});

module.exports = withImages({
  esModule: true
});