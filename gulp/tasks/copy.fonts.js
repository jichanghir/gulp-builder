'use strict';

module.exports = function() {
  $.gulp.task('copy:fonts', function() {
    return $.gulp.src([
            './source/fonts/**/*.*',
            './node_modules/font-awesome/fonts/*.*'
        ], { since: $.gulp.lastRun('copy:fonts') })
        .pipe($.gulp.dest($.config.root + '/fonts/'));
    });
};
