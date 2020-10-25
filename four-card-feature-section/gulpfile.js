var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');

var autoprefixer = require('autoprefixer');


function defaultTask(cb) {
	// place code for your default task here
	var processors = [
		autoprefixer
	];
	return gulp.src('./src/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(postcss(processors))
		.pipe(gulp.dest('./public/css'));
}

exports.default = function(){
	gulp.watch('./src/*.scss', gulp.series(defaultTask));
}
