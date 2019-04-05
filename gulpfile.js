var gulp = require('gulp'),
	gutil = require('gulp-util'),
	sass = require('gulp-sass'),
	clean = require('gulp-clean-css'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	autoprefixer = require('gulp-autoprefixer');


var sassSources = [
		'sass/*/*.scss',
		'sass/*.scss'
	],
	jsSources = [
		'js/src/*.js'
	]

gulp.task('log', function(){
	gutil.log('== My Log Task ==')
})

gulp.task('default', ['sass', 'js', 'watch']);

gulp.task('sass', function(){
	gulp.src(sassSources)
	.pipe(sass({
		outputStyle: 'expanded',
		comments:true
	}))
		.on('error', gutil.log)
	.pipe(autoprefixer({
		browsers: ['last 2 versions'],
		cascade: false
	}))
	// .pipe(clean({
	// 	compatability: 'ie8'
	// }))
	.pipe(gulp.dest('css'))
});

gulp.task('js', function(){
	gulp.src(jsSources)
	// .pipe(uglify())
	.pipe(concat('script.gen.js'))
	.pipe(gulp.dest('js/build'))
})

gulp.task('watch', function(){
	gulp.watch(sassSources, ['sass']);
	gulp.watch(jsSources, ['js'])
})