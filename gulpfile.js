'use strict';

// ./source -> ./build
// gulp конфиг, все пути и gulp задачи находятся в папке gulp
// обязательно подключите в <HEAD> foundation.js для нормализации js и корректной работы jquery
// обратите внимание, что в package.json уже подключен jquery

global.$ = {
  package: require('./package.json'),
  config: require('./gulp/config'),
  path: {
    task: require('./gulp/paths/tasks.js'),
    jsFoundation: require('./gulp/paths/js.foundation.js'),
    cssFoundation: require('./gulp/paths/css.foundation.js'),
    //app: require('./gulp/paths/app.js')
  },
  gulp: require('gulp'),
  del: require('del'),
  // browserSync: require('browser-sync').create(),
  spritesmith: require('gulp.spritesmith'),
  gp: require('gulp-load-plugins')()
};

$.path.task.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'sass',
    'css',
    'js:foundation',
    'js:process',
    //'copy:image',
    //'copy:fonts',
    //'copy:html',
    'css:foundation'
    //'spritesmith',
    //'sprite:svg'
  ),
  $.gulp.parallel(
    'watch'
    //'serve'
  )
));
