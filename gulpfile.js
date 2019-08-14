/*eslint-env node*/

'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
sass.compiler = require('node-sass');
const eslint = require('gulp-eslint');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const cleanCSS = require('gulp-clean-css');

function scriptsLint() {
	return gulp
    .src(['js/**/*', 'gulpfile.js'])    
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}

function jsDev() {
	return gulp.src('js/**/*.js')
	.pipe(scriptsLint())
}

function jsDist() {
	return gulp.src('js/**/*.js')
	.pipe(scriptsLint())
	.pipe(babel())	
	.pipe(concat('main.js'))
	.pipe(sourcemaps.init())
	.pipe(terser())
        .pipe(sourcemaps.write('./'))
	.pipe(gulp.dest('dist/js'));
}

function scssDev() {
	return gulp.src('sass/**/*.scss', { sourcemaps: true })
	.pipe(sass())
	.on('error', sass.logError)
	.pipe(
		autoprefixer({        
		})
	)
	.pipe(gulp.dest('css'));
}

function scssDist() {
	return gulp.src('sass/**/*.scss')
	.pipe(sourcemaps.init())
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/css'));
}


const browserSync = require('browser-sync');
const server = browserSync.create();

function reload(done) {
	server.reload();
	done();
}

function serve(done) {
	server.init({
	server: {
		baseDir: './'
		}
	});
	done();
}


function watchTask(){
    gulp.watch(
        ['sass/**/*.scss', 'js/**/*.js', './index.html'],
        gulp.series(gulp.parallel(scssDev, jsDev),reload)
    );
}

const dev = gulp.series(scssDev, jsDev, serve, watchTask);
const toDist = gulp.series(scssDist,jsDist)

exports.toDist = toDist;
exports.dev = dev;



