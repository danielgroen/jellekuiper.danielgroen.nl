'use strict';

let gulp = require('gulp'),
	autoprefixer = require('gulp-autoprefixer'),
	sass = require('gulp-sass'),
	sassGlob = require('gulp-sass-glob'),
	gulpAutoprefixer = require('gulp-autoprefixer'),
	cssImageDimensions = require("gulp-css-image-dimensions"),
	plumber = require('gulp-plumber'),
	concat = require('gulp-concat'),
	notify = require('gulp-notify'),
	mainBowerFiles = require('main-bower-files');

gulp.task('sass', () => {
	return gulp.src(global.paths.app + global.paths.sassFiles)
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
		.pipe(sassGlob())
		.pipe(sass())
		.pipe(cssImageDimensions('../img/'))
		.pipe(gulpAutoprefixer({
			browsers: ['last 40 versions'],
			cascade: false
		}))
		.pipe(gulp.dest(global.paths.app + '/assets/css/'))
		.pipe(gulp.dest(global.paths.dist + '/assets/css/'))
		.pipe(global.browserSync.stream());
});

gulp.task('fonts', () => {
	return gulp.src(global.paths.app + global.paths.fonts)
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
		.pipe(sassGlob())
		.pipe(sass())
		.pipe(gulpAutoprefixer({
			browsers: ['last 40 versions'],
			cascade: false
		}))
		.pipe(concat('fonts.css'))
		.pipe(gulp.dest(global.paths.app + '/assets/css/'))
		.pipe(global.browserSync.stream());
});