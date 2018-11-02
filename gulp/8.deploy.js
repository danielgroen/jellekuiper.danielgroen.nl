const gulp = require('gulp'),
      ghPages = require('gulp-gh-pages');

gulp.task('deployment', function() {
  return gulp.src('./dist/**/*')
             .pipe(ghPages({
                'force': true,
                'branch': 'gh-pages'
             }))
});

gulp.task('deploy', gulp.series('build', 'deployment'));