const withImages = require('next-images');
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA(withImages({
  esModule: true,
  pwa: {
    dest: 'public',
  },
}));
