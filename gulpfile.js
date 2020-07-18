const gulp = require('gulp');
const color = require('ansi-colors');
const gulpsass = require('gulp-sass');
const gulpimage = require('gulp-image');
const minify = require('gulp-minify');
const liveReload = require('gulp-livereload');
const concat = require('gulp-concat');
const watch = require ('gulp-watch');


compileScss = () => {
  console.log(color.green('CSS Compile Started'));
  return gulp.src(['./assets/scss/style.scss'])
  .pipe(gulpsass().on('error', gulpsass.logError))
  .pipe(gulp.dest('./public/css'))
}

prepareImages = () => {
  console.log(color.green('Image Compile Started'))
  return gulp.src(['./assets/img/*','./assets/img/*.*'])
    .pipe(gulpimage())
    .pipe(gulp.dest('./public/img'))
}

minifyJs = () => {
  console.log(color.green('JS Compile Started'))
  return gulp.src(['./assets/js/*.js'])
    .pipe(concat('system.js'))
    .pipe(minify())

    .pipe(gulp.dest('./public/js'))
}

watchChanges = () => {
  liveReload.listen();
  console.log(color.green('Started watching changes'))
  watch(['./assets/js/*.js','./assets/scss/*.scss'], gulp.series(compileScss, minifyJs));
}

updateVendors = () => {
  console.log(color.green('Started copying vendor files'))
  return gulp.src('./assets/vendor/**/*').pipe(gulp.dest('./public/vendor'));
}

exports.watch = watchChanges;
exports.default = gulp.series(compileScss,prepareImages,minifyJs, updateVendors);
