'use strict';
const 			gulp 				= require('gulp'),
				browserSync 		= require('browser-sync').create(),
				mainBowerFiles		= require('main-bower-files'),
				filesystem			= require('fs'),
				async 				= require('async'),
				mozjpeg 			= require('imagemin-mozjpeg'),
				gulpAutoprefixer 	= require('gulp-autoprefixer'),
				concat 				= require('gulp-concat'),
				notify 				= require('gulp-notify'),
				plumber 			= require('gulp-plumber'),
				sass 				= require('gulp-sass'),
				sassGlob 			= require('gulp-sass-glob'),
				uglify 				= require('gulp-uglify'),
				cssImageDimensions 	= require("gulp-css-image-dimensions"),
				replace 			= require('gulp-replace'),
				cssnano 			= require('gulp-cssnano'),
				htmlmin				= require('gulp-htmlmin'),
				xmlsitemap 			= require('gulp-sitemap'),
				styleInject 		= require("gulp-style-inject"),
				imagemin 			= require('gulp-imagemin'),
				reload 				= browserSync.reload,
				ghPages 			= require('gulp-gh-pages'),
				
				// files
				app 				= './app',
				dist 				= 'dist',
				jsFiles 			= '/js/source/*.js',
				data	 			= '/data/*.json',
				images 				= '/img/**/*.{png,jpg,jpeg,ico}',
				sassFiles 			= '/sass/**/*.scss',
				fonts				= '/font/*.scss',
				htmlFiles 			= '/*.html',
				cssFiles 			= '/css/*.css',
				cname				= '/CNAME',

				options = {
					force: true,
					branch: 'gh-pages'
				},
				
				host = {
					sitename: "https://jellekuiper.nl"
				};

// Setup browsersync.
gulp.task('browsersync', function() {
    browserSync.init({
        server: {
            baseDir: app
        },
        ghostMode: false
    });
});

// set scss files to the css folder into a css file
gulp.task('css',function() {
	gulp.src(app + sassFiles)
    	.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(sassGlob())
	    .pipe(sass())
	    .pipe(cssImageDimensions('../img/'))
		.pipe(gulpAutoprefixer({
	        browsers: ['last 40 versions'],
        	cascade: false
		}))
		.pipe(gulp.dest(app + '/css/'))
		.pipe(browserSync.stream());

    gulp.src(app + fonts)
    	.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(sassGlob())
	    .pipe(sass())
		.pipe(gulpAutoprefixer({
	        browsers: ['last 40 versions'],
        	cascade: false
		}))
        .pipe(concat('fonts.css'))
        .pipe(gulp.dest(app + '/css/'))
		.pipe(browserSync.stream());
});

gulp.task('js', function() {
	return gulp.src(mainBowerFiles(['**/*.js']).concat(app + jsFiles))
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
		.pipe(concat('build.js'))
		.pipe(gulp.dest(app + '/js/'))
		.pipe(browserSync.stream());
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
gulp.task('serve', ['browsersync', 'css'], function() {
	gulp.watch([app + htmlFiles]).on("change", reload);
	gulp.watch([app + jsFiles], ['js']);
	gulp.watch([app + fonts], ['css']);
	gulp.watch([app + data]).on("change", reload);
	gulp.watch([app + sassFiles], ['css']);
});


gulp.task('default', ['serve']);

gulp.task('build', ['js', 'css'], function() {

	async.series([
	    function (next) {
			gulp.src(app + cssFiles)	
				.pipe(cssnano())
				.pipe(gulp.dest( dist + '/css/'))
				.on('end', next);
		},
	    function (next) {
			gulp.src(app + '/css/fonts.css')	
				.pipe(gulp.dest( dist + '/css/'))
				.on('end', next);
		},		
	    function (next) {
			gulp.src(app + htmlFiles)
				.pipe(styleInject({encapsulated: false}))
			    .pipe(replace('<link rel="stylesheet" type="text/css" href="css/stylesheet.css" async defer>', ' '))
			    .pipe(replace('<style><!-- inject-style src="./dist/css/stylesheet.css" --></style>', ' '))
			    .pipe(replace('../img/', 'img/'))
				.pipe(htmlmin({collapseWhitespace: true}))
				.pipe(gulp.dest(dist))
				.on('end', next);
	    },
	    function (next) {
			gulp.src(app + cname)
				.pipe(concat('CNAME'))
				.pipe(gulp.dest(dist));
		}
	]);

    gulp.src(app + htmlFiles , {read: false})
        .pipe(xmlsitemap( {siteUrl: host.sitename} ))
        .pipe(gulp.dest(dist));

	gulp.src(app + '/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest( dist + '/js/'));

	gulp.src(app + data)
		.pipe(gulp.dest( dist + '/data/'));

	gulp.src(app + images)
		.pipe(imagemin([mozjpeg()]))
		.pipe(gulp.dest(dist + '/img/'));

});

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages(options));
});
