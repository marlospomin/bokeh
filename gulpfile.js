const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');

// Live reload task
gulp.task('sync', function () {
  browserSync.init({
    server: "./"
  });

  // Watch for file changes
  gulp.watch(['./scss/**/**'], ['sass']);
  gulp.watch(["./*.html", "./js/*.js"], browserSync.reload);
});

// Compile sass files
gulp.task('sass', function () {
  return gulp.src('./scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
});

// Set the default task as 'sync'
gulp.task('default', ['sync']);
