'use strict';

var gulp = require('gulp'),
		requireDir = require('require-dir'),
		browserSync = require('browser-sync').create();

process.setMaxListeners(0);
requireDir('./gulp', { recurse: false });

global.browserSync = browserSync;
global.paths = {
	'app': './app',
	'dist': './dist',
};

gulp.task('default', gulp.series('serve'));