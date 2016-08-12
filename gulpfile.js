/**
 * Created by szhitenev on 12.08.2016.
 */

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var del = require('del');
var insert = require('gulp-insert');
var path = require('path');
var source = require('vinyl-source-stream');
var stream = require('event-stream');

var version = '/* fancy-logger v' + require('./package').version + ' */\n';

gulp.task('default', function(){

    var pathToJs = ['src/js/main.js'];

    gulp.src(pathToJs)
        .pipe(rename('fancy-logger.js'))
        .pipe(gulp.dest('dist/js'));

    return gulp.src(pathToJs)
        .pipe(uglify('dist/js'))
        .pipe(rename('fancy-logger.min.js'))
        .pipe(gulp.dest('dist/js'));

});

gulp.task('clean:js', function () {
    return del(['./dist/js/*.js']);
});

gulp.task('clean:js:min', function () {
    return del(['./dist/js/*.min.js']);
});

gulp.task('js', ['clean:js'], function () {

    var pathToJs = ['src/js/main.js'];

    var tasks = pathToJs.map(function (src) {
        return browserify([src]).bundle()
            .pipe(source(path.basename(src)))
            .pipe(buffer())
            .pipe(insert.prepend(version))
            .pipe(rename(function (path) {
                path.basename = 'fancy-logger';
            }))
            .pipe(gulp.dest('./dist/js'));
    });
    return stream.merge.apply(null, tasks);
});

gulp.task('js:min', ['clean:js:min'], function () {

    var pathToJs = ['src/js/main.js'];

    var tasks = pathToJs.map(function (src) {
        return browserify([src]).bundle()
            .pipe(source(path.basename(src)))
            .pipe(buffer())
            .pipe(uglify())
            .pipe(insert.prepend(version))
            .pipe(rename(function (path) {
                path.basename = 'fancy-logger.min';
            }))
            .pipe(gulp.dest('./dist/js'));
    });
    return stream.merge.apply(null, tasks);
});

gulp.task('default', ['js', 'js:min']);