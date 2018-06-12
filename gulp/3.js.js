'use strict';

let gulp = require('gulp'),
	mainBowerFiles = require('main-bower-files'),
	concat = require('gulp-concat'),
	plumber = require('gulp-plumber'),
	notify = require('gulp-notify');

gulp.task('js', function() {
	return gulp.src(mainBowerFiles(['**/*.js']).concat(global.paths.app + global.paths.jsFiles))
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
		.pipe(concat('build.js'))
		.pipe(gulp.dest(global.paths.app + '/assets/js/'))
		.pipe(gulp.dest(global.paths.dist + '/assets/js/'))
		.pipe(global.browserSync.stream());
});