const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const version = require('./package.json').version;

// 命令行执行参数
const args = process.argv.slice(2);
const isProd = process.env.NODE_ENV === 'production';
// 是否是打预发环境的包
const isPre = args[1] && args[1] === '--pre' ? true : false;

// 当前项目目录
const starDir = `example`;
const assetsDir = isPre ? `${starDir}/dist-pre` : `${starDir}/dist`;
const mockData = require(`./${starDir}/mock/index`);

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  pages: {
    app: {
      // page 的入口
      entry: `${starDir}/src/main.ts`,
      // 模板来源
      template: `${starDir}/public/index.html`,
      // 在 dist/index.html 的输出
      filename: 'index.html',
      minify: false
    }
  },

  // 打包后静态资源cdn地址
  publicPath: './',

  outputDir: `./${assetsDir}/${version}`,

  //   lintOnSave：{ type:Boolean default:true } 问你是否使用eslint
  lintOnSave: true,

  // productionSourceMap：{ type:Bollean,default:true } 生产源映射
  // 如果您不需要生产时的源映射，那么将此设置为false可以加速生产构建
  productionSourceMap: false,

  filenameHashing: false,

  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __ISPRE__: isPre,
        __ISPROD__: isProd
      })
    ]
  },

  chainWebpack: function (config) {
    // config.resolve.alias.set('@common', resolve('stars/common'));
  },

  // 对依赖的插件手动指定打包，兼容低版本浏览器
  transpileDependencies: ['swiper', 'dom7', 'ssr-window', 'growth-jsonp'],

  devServer: {
    port: 8008,
    host: 'localhost',
    // 禁止host检查
    disableHostCheck: true,
    // publicPath: '/',
    https: false,
    // 配置自动启动浏览器
    open: true,
    before(app) {
      // 配置mock数据
      for (var path in mockData) {
        (function (p, f) {
          app.get(p, (req, res, next) => {
            res.json(JSON.parse(fs.readFileSync(f)));
          });
        })(path, mockData[path]);
      }
    }
  }
};
