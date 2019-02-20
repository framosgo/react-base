
{
  modules: true,
  plugins: [
    require('postcss-import')(),
    require('postcss-url')(),
    require('postcss-modules-extract-imports'),
    require('postcss-nested')(),
    require('postcss-reporter')(),
    require('precss')(),
    require('postcss-mixins')()
  ]
}