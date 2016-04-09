var gulp = require('gulp'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    source = require('vinyl-source-stream'),
    sourceFile = './js/main.js',
    destFolder = './dist',
    destFile = 'findem.js',
    b = browserify({
      entries: [sourceFile],
      cache: {},
      packageCache: {}
    });

function bundle() {
  b.bundle()
   .pipe(source(destFile))
   .pipe(gulp.dest(destFolder));
}

gulp.task('browserify', function () {
  bundle();
});

gulp.task('watch', function () {
  var bundler = watchify(b);
  bundler.on('update', bundle);
  bundle();
});

gulp.task('default', ['browserify', 'watch']);
