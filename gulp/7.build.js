const gulp = require('gulp'),
      replace = require('gulp-replace'),
      token = `?v=${(+new Date).toString(36)}`;

gulp.task('build', gulp.series('sass','fonts', 'bower', 'js', 'jekyll-build', 'minify'));