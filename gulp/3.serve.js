'use strict';

let gulp = require('gulp'),
    reload = global.browserSync.reload;

// Setup browsersync.
gulp.task('browsersync', () => {
    global.browserSync.init({
        server: {
            baseDir: global.paths.app
        },
        ghostMode: false
    });

    gulp.watch(global.paths.app + global.paths.htmlFiles).on('change', reload);
    gulp.watch(global.paths.app + global.paths.data).on('change', reload);
    gulp.watch(global.paths.app + global.paths.jsFiles, gulp.series('js'));
    gulp.watch(global.paths.app + global.paths.sassFiles, gulp.series('sass'));
    gulp.watch(global.paths.app + global.paths.fonts, gulp.series('fonts'));
});

gulp.task('serve', gulp.series('browsersync', 'sass'));