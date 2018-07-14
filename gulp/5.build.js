'use strict';
const	gulp 			= require('gulp'),
		  child 			= require('child_process');

gulp.task('jekyll-build', () => {
  return child.spawn('jekyll', ['build']);
});

gulp.task('build',  gulp.series('jekyll-build'));