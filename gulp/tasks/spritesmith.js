'use strict';

module.exports = function() {

  $.gulp.task('spritesmith', function () {
    var spriteData = $.gulp.src('./source/spriteicons/**/*.png')
    .pipe($.spritesmith({
      imgName: 'sprite.png',
      cssName: 'sprite.css'
    }));
    return spriteData.pipe($.gulp.dest($.config.root + '/assets/sprite/'));
  });

};

