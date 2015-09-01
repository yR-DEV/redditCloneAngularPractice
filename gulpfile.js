var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('reddit', function() {
  return gulp.src('reddit.html').pipe(gulp.dest('dist'));
});

gulp.task('scripts', function() {
  return gulp.src('*.js').pipe(concat('all.js')).pipe(gulp.dest('dist'));
});
