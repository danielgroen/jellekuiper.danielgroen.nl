'use strict';

const	gulp 			= require('gulp'),
		child 			= require('child_process'),
		image 			= require("gulp-image"),
		jpegRecompress 	= require("imagemin-jpeg-recompress"),
		mozjpeg 		= require("imagemin-mozjpeg"),
		jpegoptim 		= require('jpegoptim-bin'),
		gm 				= require('gulp-gm');

gulp.task('jekyll-build', () => {
  return child.spawn('jekyll', ['build']);
});

gulp.task("images:compress", function () {
    return gulp.src(global.paths.dist + global.paths.imagespath + '**/*')
	    .pipe(image({
	        jpegRecompress: true,
	        jpegoptim: false,
	        mozjpeg: true,
	        concurrent: 10
	    }))
	    .pipe(gulp.dest(global.paths.dist + global.paths.imagespath));
})


gulp.task('images:resize', function () {
  gulp.src(global.paths.dist + global.paths.imagespath + '**/*')
    .pipe(gm(function (gmfile) {
      return gmfile.resize(1920, 1920);
	  }))
    .pipe(gulp.dest(global.paths.dist + global.paths.imagespath));
});

gulp.task('build',  gulp.series('jekyll-build', 'images:resize','images:compress'));
