'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
sass.compiler = require('node-sass');
gulp.task('sass', function(){
    return gulp.src('web/sass/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('web/css'))
});

gulp.task('html', function(){
    return gulp.src('**/*.html')
});

gulp.task('watch', function(){
    gulp.watch('web/sass/*.sass', gulp.parallel('sass'))
    gulp.watch('**/*.html', gulp.parallel('html'))
});