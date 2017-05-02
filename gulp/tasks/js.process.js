'use strict';

module.exports = function() {
  $.gulp.task('js:process', function() {
    return $.gulp.src('./source/js/**/*.js')
      .pipe($.gp.sourcemaps.init())
      //.pipe($.gp.concat('script.js'))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest($.config.root + '/js'))
  })
};
