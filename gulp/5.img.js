const gulp        = require('gulp'),
      image       = require("gulp-image"),
      imageResize = require('gulp-image-resize');

// 1
gulp.task('images:resize', function () {
  return gulp.src(`${global.paths.app}/assets/original-img/**/*.{png,jpg,jpeg}`)
             .pipe(imageResize({
                width : 1920,
                height : 1920,
                upscale : false,
                imageMagick: true
              }))
             .pipe(gulp.dest(`${global.paths.app}/assets/img`));
});

// 2
gulp.task("images:compress", function () {
    return gulp.src(`${global.paths.app}/assets/img/**/*.{png,jpg,jpeg}`)
               .pipe(image({
                  jpegRecompress: true,
                  imageMagick: true,
                  concurrent: 10
               }))
               .pipe(gulp.dest(`${global.paths.dist}/assets/img`));
})

// 3
gulp.task("images:thumb", function () {
    return gulp.src(`${global.paths.app}/assets/original-img/**/*.{png,jpg,jpeg}`)
               .pipe(image({
                  jpegRecompress: true,
                  mozjpeg: true,
                  concurrent: 10
                })
               .pipe(imageResize({
                  width : 720,
                  height : 720,
                  upscale : false,
                  imageMagick: true
                })))
               .pipe(gulp.dest(`${global.paths.app}/assets/thumb`))
               .pipe(gulp.dest(`${global.paths.dist}/assets/thumb`));
})

gulp.task('img',  gulp.series('images:resize', 'images:compress', 'images:thumb'));
