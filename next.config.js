const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    mode: 'production'
  },
  future: { webpack5: true }
})