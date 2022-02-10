const { src, dest, parallel, series, watch } = require('gulp');

var cssnano       = require('gulp-cssnano');
var sass          = require('gulp-sass')(require('sass'));
const fileinclude = require('gulp-file-include');
const changed     = require('gulp-changed');
const browsersync = require('browser-sync').create();
const clean       = require('gulp-clean');

// Clear
function clear(){
  return src('./build/*', {
    read: false
  })
    .pipe(clean());
}

// CSCC to CSS
function sasscss(){
	return src('./src/scss/*.scss')
		.pipe(sass())
		.pipe(dest('./build/css'));
}

// Fonts
function copyfonts(){
  return src('./src/fonts/*.{ttf,woff,eof,svg}')
    .pipe(dest('./build/fonts'));
}

// CSS
/*function css() {
  const source = './src/css/style.css';

  return src(source)
    .pipe(changed(source))
    .pipe(cssnano())
    .pipe(dest('./build/css/'))
    .pipe(browsersync.stream());
}*/

// JS
function jsdr() {
  return src('./src/js/*')
    .pipe(dest('./build/js'))
    .pipe(browsersync.stream());
}

// Images
function imghome() {
  return src('./src/images/home/*')
    .pipe(dest('./build/images/home'));
}
function imgstart() {
  return src('./src/images/start/*')
    .pipe(dest('./build/images/start'));
}
function imgpages() {
  return src('./src/images/pages/*')
    .pipe(dest('./build/images/pages'));
}

// Html
/*function html() {
  return src('./src/*.html')
    .pipe(dest('./build/'))
    .pipe(browsersync.stream());
}*/

// Watch files
/*function watchFiles() {
  watch('./src/css/*', css);
  watch('./src/*.html', html);
  watch('./src/images/*', img);
}*/

// BrowserSync
function browserSync(){
  browsersync.init({
    server: {
      baseDir: './build'
    },
    port: 3000
  });
}

// Include _block.html to main file
function fileinc(){
  return src('./src/[^_]*.html')
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(dest('./build/'))
    .pipe(browsersync.stream());
}

//exports.watch = parallel(watchFiles, browserSync);
exports.default = series(clear, sasscss, copyfonts, jsdr, imghome, imgstart, imgpages, fileinc, browserSync);