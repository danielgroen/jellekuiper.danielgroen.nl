const gulp = require('gulp'),
      compileHTML = require('gulp-htmlmin'),
      compileCSS = require('gulp-clean-css'),
      compileJS = require('gulp-uglify');


gulp.task('minify:html', () => {
  return gulp.src(`${global.paths.dist}/**/*.html`)
             .pipe(compileHTML({ collapseWhitespace: true }))
             .pipe(gulp.dest(`${global.paths.dist}`));
});

gulp.task('minify:css', () => {
  return gulp.src(`${global.paths.dist}/**/*.css`)
             .pipe(compileCSS())
             .pipe(gulp.dest(`${global.paths.dist}`));
});

gulp.task('minify:js', () => {
  return gulp.src(`${global.paths.dist}/**/*.js`)
             .pipe(compileJS())
             .pipe(gulp.dest(`${global.paths.dist}`));
});

gulp.task('minify', gulp.series('minify:html', 'minify:js', 'minify:css'));