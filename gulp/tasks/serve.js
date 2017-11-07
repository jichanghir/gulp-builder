'use strict';

module.exports = function() {
  $.gulp.task('serve', function() {
    $.browserSync.init({
      open: false,
      server: $.config.root
    });

    $.browserSync.watch([$.config.root + '/*.html', '!/style/*.css', '!/js/*.js'], $.browserSync.reload);
  });
};
