var gulp = require('gulp'),
    gutil = require('gulp-util'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    source = require('vinyl-source-stream'),
    server = require('gulp-webserver'),
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

function log(message) {
  gutil.log(message);
}

gulp.task('browserify', function () {
  bundle();
});

gulp.task('watch', function () {
  var bundler = watchify(b);
  bundler.on('update', bundle);
  bundler.on('log', log);
  bundle();
});

gulp.task('serve', function () {
  gulp.src('.')
    .pipe(server({
      livereload: true,
      open: "/index.html",
      directoryListing: true,
     }));
});

gulp.task('default', ['browserify', 'watch', 'serve']);
