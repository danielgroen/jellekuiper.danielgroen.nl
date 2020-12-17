const gulp = require("gulp"),
  exec = require("child_process").exec;

gulp.task("jekyll-build", (done) => {
  exec("jekyll build", function (err, stdout, stderr) {
    console.log(stdout);
  });
  done();
});

gulp.task("jekyll-serve", (done) => {
  let taskFinalized = false;

  const jekyll = exec("jekyll serve --watch --incremental --drafts");

  const jekyllLogger = (buffer) => {
    buffer
      .toString()
      .split(/\n/)
      .forEach((message) => {
        console.log("Jekyll: " + message);

        // Finalize gulp task
        if (message.includes("Server running") && taskFinalized === false) {
          taskFinalized = true;
          done();
        }
      });
  };

  jekyll.stdout.on("data", jekyllLogger);
  jekyll.stderr.on("data", jekyllLogger);
  done();
});
