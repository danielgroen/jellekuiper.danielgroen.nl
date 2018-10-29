const gulp = require('gulp'),
			mainBowerFiles = require('main-bower-files'),
			concat = require('gulp-concat');

// NOTE:: if the bower task exits without generating any bower module while it should. please check if you installed the component with the parameter --save
// NOTE:: be sure to not give the parameter: --save-dev.
gulp.task('bower', function (done) {
	const bowerFiles = mainBowerFiles({
		filter: (fileName) => {
			return fileName.endsWith('js');
		}
	});

	if (bowerFiles.length) {
		return gulp.src(bowerFiles)
					.pipe(concat('bower-components.js'))
					.pipe(gulp.dest(`${global.paths.app}/assets/modules/`));
	}

	else {
		console.log('No bower_components javascript files to concat');
		done();
	}
});

gulp.task('concatJs', function() {
	return gulp.src(`${global.paths.app}/assets/modules/*.js`)
				.pipe(concat('build.js'))
				.pipe(gulp.dest(`${global.paths.app}/assets/js/`))
				.pipe(global.browserSync.stream());
});

gulp.task('js', gulp.series('bower', 'concatJs'));