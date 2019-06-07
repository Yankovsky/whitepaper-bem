module.exports = {
  plugins: [
    require('postcss-import')({ glob: true }),
    require('postcss-simple-vars'),
    require('postcss-color-function'),
    require('postcss-calc'),
    require('postcss-nested'),
    require('autoprefixer'),
  ]
}
