'use strict';
const gulp = require('gulp'),
      child = require('child_process'),
      replace = require('gulp-replace'),
      token = `?v=${(+new Date).toString(36)}`;


gulp.task('jekyll-build', () => {
  return child.spawn('jekyll', ['build']);
});

gulp.task('tokenizeHtml', function (done) {

  return gulp.src(global.paths.dist + '**/*.html')
             .pipe(replace('build.js', `build.js${token}`))
             .pipe(gulp.dest(global.paths.dist));
});

gulp.task('tokenizeJs', function (done) {

  // return gulp.src(global.paths.dist + 'assets/js/build.js')
  //            .pipe(rename('build.js' + token))
  //            .pipe(gulp.dest(global.paths.dist + 'assets/js/'))
  //            .pipe(removeFiles(global.paths.dist + 'assets/js/build.js'));
});


gulp.task('build', gulp.series('jekyll-build', 'tokenizeHtml'));