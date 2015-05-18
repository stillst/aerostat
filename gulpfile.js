var gulp = require('gulp'),
	connect = require('gulp-connect'),
	opn = require('opn'),
	wiredep = require('wiredep').stream,
	useref = require('gulp-useref'),
	gulpif = require('gulp-if'),
	uglify = require('gulp-uglify'),
	clean = require('gulp-clean'),
	less = require('gulp-less'),
	notify = require('gulp-notify'),
	minifyCss = require('gulp-minify-css');

// Очистка папки DIST
gulp.task('clean', function () {
    return gulp.src('dist/', {read: false})
        .pipe(clean())
        .pipe(notify('dist cleaned'));
});

// Копирование статики
gulp.task('copy', function () {
    return gulp.src('src/images/**/*')
     .pipe(gulp.dest('dist/images/'));   
});

gulp.task('copy_fonts', function () {
    return gulp.src('src/bower/font-awesome/fonts/*')
     .pipe(gulp.dest('dist/fonts/'));   
});


// Склейка, минификация для js и css. А также изменение путей до css* и js* и копирирование их в dist 
gulp.task('dist', function () {
    var assets = useref.assets();
    return gulp.src('src/*.html')
        .pipe(assets)
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(assets.restore())
        .pipe(useref())
        .pipe(gulp.dest('dist'));
});

// Bower
gulp.task('bower', function () { 
	gulp.src('src/*.html')
		.pipe(wiredep({
			directory: 'src/bower'
		}))
		.pipe(gulp.dest('src'));
});

// Запуск сервера
gulp.task('connect', function() {
	connect.server({
		root: 'src',
		livereload: true
	});
	opn('http://localhost:8080')
});

// Запуск сервера
gulp.task('connect-dist', function() {
	connect.server({
		root: 'dist'
	});
	opn('http://localhost:8080');
});

// Работа с html
gulp.task('html', function () {
	gulp.src('./src/*.html')
	.pipe(connect.reload());
});

// Работа с CSS
gulp.task('css', function () {
	gulp.src('./src/css/*.css')
	.pipe(connect.reload());
});

// Работа с JS
gulp.task('js', function () {
	gulp.src('./src/js/*.js')
	.pipe(connect.reload());
});

//Компиляция LESS 
gulp.task('less', function () {
    return  gulp.src('src/less/style.less')
    .pipe(less())
    .pipe(gulp.dest('src/css'));
});

// Слежка
gulp.task('watch', function () {
	gulp.watch(['./src/*.html'], ['html']);
	gulp.watch(['./src/css/*.css'], ['css']);
	gulp.watch(['./src/js/*.js'], ['js']);
	gulp.watch(['./src/less/**/*.less'], ['less']);
});

// Задача по-умолчанию 
gulp.task('default', ['connect', 'watch']);

// Сборка проекта
gulp.task('compile', ['dist', 'copy' , 'copy_fonts']);