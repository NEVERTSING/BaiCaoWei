var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    del = require('del');

    gulp.task('minifycss', function() {
    return gulp.src('css/*.css')
    .pipe(minifycss())      //压缩的文件
    .pipe(gulp.dest('minified/css'));  //输出文件夹
});

gulp.task('minifyjs', function() {
    return gulp.src('js/*.js')
        .pipe(gulp.dest('minified/js'))    //输出main.js到文件夹
        .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
        .pipe(uglify())    //压缩
        .pipe(gulp.dest('minified/js'));  //输出
});
gulp.task('default',['minifycss','minifyjs']);
