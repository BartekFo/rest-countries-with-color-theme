const withPlugins = require('next-compose-plugins');
const withSvgr = require('next-svgr');

module.exports = withPlugins([withSvgr], {
  images: {
    domains: ['flagcdn.com', 'upload.wikimedia.org'],
  },
});
