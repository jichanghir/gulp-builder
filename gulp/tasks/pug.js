'use strict';

module.exports = function() {
  $.gulp.task('pug', function() {
    return $.gulp.src([
        './source/templates/pug/**/*.pug',
        '!./source/templates/pug/helpers{,/**}'
      ])
      .pipe($.gp.pug({ pretty: true }))
      .on('error', $.gp.notify.onError(function(error) {
        return {
          title: 'Pug',
          message:  error.message
        }
       }))
      .pipe($.gulp.dest($.config.root))
      .pipe($.browserSync.stream());
  });
};
