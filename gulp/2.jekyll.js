const	gulp = require('gulp'),
      child = require('child_process');

gulp.task('jekyll-build', () => {
  return child.spawn('jekyll', ['build']);
});

gulp.task('jekyll-serve', done => {
  let taskFinalized = false;

  const jekyll = child.exec('jekyll serve --watch --incremental --drafts');

  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => {
        console.log('Jekyll: ' + message);

        // Finalize gulp task
        if (message.includes('Server running') && taskFinalized === false) {
          taskFinalized = true;
          done();
        }
      });
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});