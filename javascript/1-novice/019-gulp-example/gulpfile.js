const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');

gulp.task('default', () => {
    console.log('Entered default task');
    return gulp.src('app/*.jsx')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2017','react']
        }))
        .pipe(concat('all.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'))
});