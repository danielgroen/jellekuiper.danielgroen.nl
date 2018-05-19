'use strict';

var gulp = require('gulp');
var requireDir = require('require-dir');
var browserSync = require('browser-sync').create();
process.setMaxListeners(0);

global.paths = {
	'app': './app',
	'dist': 'dist',
	'jsFiles': '/js/source/*.js',
	'data': '/data/*.json',
	'images': '/img/**/*.{png,jpg,jpeg,ico}',
	'sassFiles': '/sass/**/*.scss',
	'fonts': '/font/*.scss',
	'htmlFiles': '/*.html',
	'cssFiles': '/css/*.css',
	'cname': '/CNAME',
};

global.ghpagesOptions = {
	'force': true,
	'branch': 'gh-pages'
}

global.options = {
	sitename: "https://jellekuiper.nl",
	production: false,
	staginPathPrefix: "jellekuiper.github.io/"
}

global.browserSync = browserSync;
requireDir('./gulp', { recurse: false });
gulp.task('default', gulp.series('serve'));