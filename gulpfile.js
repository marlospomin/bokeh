const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');

gulp.task('sync', function () {
  browserSync.init({
    server: "./"
  });

  gulp.watch(['./scss/**/**'], ['sass']);
  gulp.watch(["./*.html", "./js/*.js"], browserSync.reload);
});

gulp.task('sass', function () {
  return gulp.src('./scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
});

gulp.task('default', ['sync']);
