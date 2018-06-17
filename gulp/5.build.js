'use strict';
const	gulp 			= require('gulp'),
		child 			= require('child_process'),
		image 			= require("gulp-image"),
		jpegRecompress 	= require("imagemin-jpeg-recompress"),
		mozjpeg 		= require("imagemin-mozjpeg"),
		jpegoptim 		= require('jpegoptim-bin'),
		gm 				= require('gulp-gm'),
		imageResize = require('gulp-image-resize');



gulp.task('jekyll-build', () => {
  return child.spawn('jekyll', ['build']);
});

gulp.task('images:resize', function () {
  return gulp.src(global.paths.app + 'assets/original-img/**/*.{png,jpg,jpeg}')
    .pipe(imageResize({
      width : 1920,
      height : 1920,
      upscale : false,
      imageMagick: true
    }))
    .pipe(gulp.dest(global.paths.app + global.paths.imagespath));
});

gulp.task("images:compress", function () {
    return gulp.src(global.paths.app + global.paths.imagespath + '**/*')
	    .pipe(image({
	        jpegRecompress: true,
	        jpegoptim: false,
	        mozjpeg: true,
	        concurrent: 10
	    }))
	    .pipe(gulp.dest(global.paths.dist + global.paths.imagespath));
})

gulp.task('build',  gulp.series('jekyll-build', 'images:resize', 'images:compress'));