const path = require('path')
module.exports = {
  webpack: {
    alias: {
      'iflex-react-library': path.resolve(__dirname, 'src/library/'),
    },
  },
}
