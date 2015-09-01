var gulp = require('gulp');

gulp.task('reddit', function() {
  return gulp.src('reddit.html').pipe(gulp.dest('dist'));
});
