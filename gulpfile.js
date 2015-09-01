var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('reddit', function() {
  return gulp.src('reddit.html').pipe(gulp.dest('dist'));
});

gulp.task('scripts', function() {
  return gulp.src('*.js').pipe(concat('all.js')).pipe(gulp.dest('dist'));
});

gulp.task('styling', function() {
  return gulp.src('*.css').pipe(concat('app.css')).pipe(gulp.dest('dist'));
});

gulp.task('watchout', function() {
  gulp.watch('*.js', ['scripts']);
  gulp.watch("*.css", ['styling']);
  gulp.watch('*.html', ['reddit']);
});

gulp.task('default', ['reddit', 'scripts', 'styling', 'watchout']);
