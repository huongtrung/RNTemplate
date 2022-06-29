const path = require('path')

const moduleResolverConfig = {
  root: path.resolve('.'),
  alias: {
    '@': './app'
  }
}

module.exports = api => {
  api.cache(true)

  const presets = ['module:metro-react-native-babel-preset']

  const plugins = [
    ['module-resolver', moduleResolverConfig]
    // ['@babel/plugin-proposal-optional-chaining'],
  ]

  return {
    presets,
    plugins
  }
}
