'use strict';

var gulp = require('gulp');
var requireDir = require('require-dir');
var browserSync = require('browser-sync').create();
process.setMaxListeners(0);

global.paths = {
	'app': './app',
	'dist': 'dist',
	'jsFiles': '/assets/js/source/*.js',
	'data': '/assets/data/*.json',
	'images': '/assets/img/**/*.{png,jpg,jpeg,ico}',
	'sassFiles': '/_sass/**/*.scss',
	'fonts': 'assets/font/*.scss',
	'htmlFiles': '/*.{html, md}',
	'cssFiles': '/css/*.css',
	'cname': '/CNAME',
};

global.ghpagesOptions = {
	'force': true,
	'branch': 'gh-pages'
}

global.browserSync = browserSync;
requireDir('./gulp', { recurse: false });
gulp.task('default', gulp.series('serve'));