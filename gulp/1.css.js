const gulp = require('gulp'),
			sass = require('gulp-sass'),
			cssImageDimensions = require("gulp-css-image-dimensions"),
			sassGlob = require('gulp-sass-glob'),
			gulpAutoprefixer = require('gulp-autoprefixer'),
			plumber = require('gulp-plumber'),
			notify = require('gulp-notify');

gulp.task('sass', () => {
	return gulp.src([`${global.paths.app}/assets/sass/**/*.scss`, `!${global.paths.app}/assets/sass/fonts/*.scss`])
						 .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
						 .pipe(sassGlob())
						 .pipe(sass())
						 .pipe(cssImageDimensions('../img/'))
						 .pipe(gulpAutoprefixer())
						 .pipe(gulp.dest(global.paths.app + '/assets/css/'))
						 .pipe(gulp.dest(global.paths.dist + '/assets/css/'))
						 .pipe(global.browserSync.stream());
});

gulp.task('fonts', () => {
	return gulp.src(`${global.paths.app}/assets/sass/fonts/*.scss`)
						 .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
						 .pipe(sassGlob())
						 .pipe(sass())
						 .pipe(gulpAutoprefixer())
						 .pipe(gulp.dest(global.paths.app + '/assets/css/'))
						 .pipe(gulp.dest(global.paths.dist + '/assets/css/'))
						 .pipe(global.browserSync.stream());
});