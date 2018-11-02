const   gulp = require('gulp'),
        reload = global.browserSync.reload;

// Setup browsersync.
gulp.task('browsersync', () => {
    global.browserSync.init({
        proxy: "localhost:4000",
        ghostMode: false
    });

    gulp.watch(`${global.paths.app}/**/*.{html, md}`).on('change', reload);
    gulp.watch(`${global.paths.app}/**/*.{yml, json}`, gulp.series('jekyll-build', reload));
    gulp.watch(`${global.paths.app}/assets/modules/**/*.js`, gulp.series('js'));
    gulp.watch([`!${global.paths.app}/assets/sass/fonts/*.scss`, `${global.paths.app}/assets/**/*.scss`], gulp.series('sass'));
    gulp.watch([`${global.paths.app}/assets/sass/fonts/*.scss`], gulp.series('fonts'));
});

gulp.task('serve', gulp.series('sass','fonts', 'js', 'jekyll-serve', 'browsersync'));