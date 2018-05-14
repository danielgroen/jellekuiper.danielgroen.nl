'use strict';

let gulp = require('gulp');
let ghPages = require('gulp-gh-pages');

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages(global.ghpagesOptions));
});
