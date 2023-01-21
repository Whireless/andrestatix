const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sourcemap = require('gulp-sourcemaps');
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const csso = require('postcss-csso');
const rename = require('gulp-rename');
const terser = require('gulp-terser');
const squoosh = require('gulp-libsquoosh');
const svgSprite = require('gulp-svg-sprite');
const del = require('del');
const sync = require('browser-sync').create();

// HTML

const html = () => {
  return gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('build'));
}
exports.html = html;

// Styles

const styles = () => {
  return gulp.src('src/sass/style.scss')
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer(),
      csso()
    ]))
    .pipe(rename('style.min.css'))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest('build/css'))
    .pipe(sync.stream());
}
exports.styles = styles;

// Scripts

const scripts = () => {
  return gulp.src('src/js/scripts.js')
    .pipe(terser())
    .pipe(rename('scripts.min.js'))
    .pipe(gulp.dest('build/js'))
}
exports.scripts = scripts;

// Images

const optimizeImages = () => {
  return gulp.src('src/img/**/*.{png,svg,jpeg,jpg}')
    .pipe(squoosh())
    .pipe(gulp.dest('build/img'))
}
exports.optimizeImages = optimizeImages;

const copyImages = () => {
  return gulp.src('src/img/**/*.{png,svg,jpeg,jpg}')
    .pipe(gulp.dest('build/img'))
}
exports.copyImages = copyImages;

// Copy

const copy = (done) => {
  gulp.src([
    'src/fonts/*.woff2',
    'src/*.ico',
  ], {
    base: 'src'
  })
    .pipe(gulp.dest('build'))
  done();
}
exports.copy = copy;

// Clean

const clean = () => {
  return del('build');
}
exports.clean = clean;

// Server

const server = (done) => {
  sync.init({
    server: {
      baseDir: 'build'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}
exports.server = server;

// Reload

const reload = (done) => {
  sync.reload();
  done();
}

// Watcher

const watcher = () => {
  gulp.watch('src/sass/**/*.scss', gulp.series('styles'));
  gulp.watch('src/js/*.js', gulp.series(scripts, reload));
  gulp.watch('src/*.html', gulp.series(html, reload));
}

// Build

const build = gulp.series(
  clean,
  copy,
  optimizeImages,
  gulp.parallel(
    styles,
    html,
    scripts
  )
);
exports.build = build;

// Default

exports.default = gulp.series(
  clean,
  copy,
  copyImages,
  gulp.parallel(
    styles,
    html,
    scripts
  ),
  gulp.series (
    server,
    watcher
  )
);
