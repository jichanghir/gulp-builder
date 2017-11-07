'use strict';

module.exports = function() {
  $.gulp.task('css', function() {
    return $.gulp.src('./source/style/**/*.css')
      .pipe($.gp.autoprefixer({ browsers: $.config.autoprefixerConfig }))
      .pipe($.gulp.dest($.config.root + '/style'))
      .pipe($.browserSync.stream());
  })
};
