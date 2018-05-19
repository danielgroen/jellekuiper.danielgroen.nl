'use strict';

let gulp 				= require('gulp'),
	xmlsitemap 			= require('gulp-sitemap'),
	cssnano 			= require('gulp-cssnano'),
	styleInject 		= require("gulp-style-inject"),
	replace 			= require('gulp-replace'),
	htmlmin				= require('gulp-htmlmin'),
	concat 				= require('gulp-concat'),
	uglify 				= require('gulp-uglify'),
	remove				= require('gulp-clean'),
	mozjpeg 			= require('imagemin-mozjpeg'),
	imagemin 			= require('gulp-imagemin');

gulp.task('build-css', () => {
	return gulp.src(global.paths.app + global.paths.cssFiles)	
		.pipe(cssnano())
		.pipe(gulp.dest( global.paths.dist + '/css/'));
});

gulp.task('build-fonts', () => {
	return gulp.src(global.paths.app + '/css/fonts.css')	
		.pipe(gulp.dest( global.paths.dist + '/css/'));
});

gulp.task('build-inlinecss', () => {

	if (global.options.production === true) {
		var newLinks = '<a href="/';
	}
	else {
		var newLinks = '<a href="/' + global.options.staginPathPrefix;
	}

	return gulp.src(global.paths.app + global.paths.htmlFiles)
		.pipe(styleInject({encapsulated: false}))
	    .pipe(replace('<link rel="stylesheet" type="text/css" href="css/stylesheet.css" async defer>', ' '))
	    .pipe(replace('<style><!-- inject-style src="./dist/css/stylesheet.css" --></style>', ' '))
	    .pipe(replace('<a href="/', newLinks))
	    .pipe(replace('../img/', 'img/'))
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest(global.paths.dist));
});

gulp.task('build-cname', () => {

	if (global.options.production === true) {
		return gulp.src(global.paths.app + global.paths.cname)
			.pipe(concat('CNAME'))
			.pipe(gulp.dest(global.paths.dist));
	}
	else {
		return gulp.src(global.paths.dist)
		// return gulp.src(global.paths.dist + global.paths.cname, {read: false})
			// .pipe(remove(global.paths.dist + global.paths.cname));
	}

});

gulp.task('build-html', () => {
    return gulp.src(global.paths.app + global.paths.htmlFiles , {read: false})
        .pipe(xmlsitemap( {siteUrl: global.options.sitename} ))
        .pipe(gulp.dest(global.paths.dist));
});

gulp.task('build-js', () => {
	return gulp.src(global.paths.app + '/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest(global.paths.dist + '/js/'));
});

gulp.task('build-data', () => {
	return gulp.src(global.paths.app + global.paths.data)
		.pipe(gulp.dest(global.paths.dist + '/data/'));
});

gulp.task('build-img', () => {
	return gulp.src(global.paths.app + global.paths.images)
		.pipe(imagemin([mozjpeg()]))
		.pipe(gulp.dest(global.paths.dist + '/img/'));
});




gulp.task('build',  gulp.series('build-css', 'build-fonts', 'build-inlinecss', 'build-cname', 'build-html', 'build-js', 'build-data', 'build-img'));
