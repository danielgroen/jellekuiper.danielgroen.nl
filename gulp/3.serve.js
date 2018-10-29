const   gulp = require('gulp'),
        reload = global.browserSync.reload;

// Setup browsersync.
gulp.task('browsersync', () => {
    global.browserSync.init({
        proxy: "localhost:4000",
        ghostMode: false
    });

    gulp.watch(global.paths.app + global.paths.htmlFiles).on('change', reload);
    gulp.watch(global.paths.app + global.paths.jsFiles, gulp.series('js'));
    gulp.watch(global.paths.app + global.paths.sassFiles, gulp.series('sass'));
    gulp.watch(global.paths.app + global.paths.fonts, gulp.series('fonts'));
});

gulp.task('serve', gulp.series('sass','fonts', 'js', 'jekyll-serve', 'browsersync'));