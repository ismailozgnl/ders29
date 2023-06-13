const path = require('path');

module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set('@components', path.resolve(__dirname, 'src/components'));

    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        options.compilerOptions = {
          ...(options.compilerOptions || {}),
          isCustomElement: tag => tag === 'button'
        };
        return options;
      });
  },
  transpileDependencies: true
};
