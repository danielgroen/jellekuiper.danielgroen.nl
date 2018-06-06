'use strict';

const	gulp 			= require('gulp'),
		child 			= require('child_process'),
		gutil 			= require('gulp-util'),
		mozjpeg 		= require('imagemin-mozjpeg'),
		imagemin 		= require('gulp-imagemin');

gulp.task('jekyll-build', () => {
  const jekyll = child.spawn('jekyll', ['build']);
});

gulp.task('build-img', () => {
	return gulp.src(global.paths.dist + global.paths.images)
		.pipe(imagemin([mozjpeg()]));
});


gulp.task('build',  gulp.series('build-img', 'jekyll-build'));
