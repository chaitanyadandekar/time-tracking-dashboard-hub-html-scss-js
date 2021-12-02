const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const browserSync = require('browser-sync').create();

// Default file paths

const files = {
    scssPath: "./app/scss/**/*.scss",
    jsPath: "./app/js/**/*.js",
    htmlPath: "./app/html/*.html",
    distPath: "./app/html/dist"
}


// Sass Task

function scssTask() {
    return src(files.scssPath, { sourcemaps: true })
        .pipe(sass())
        .pipe(postcss([cssnano()]))
        .pipe(dest(files.distPath), { sourcemaps: '.' });
};

// js Task

function jsTask() {
    return src(files.jsPath, { sourcemaps: true })
        .pipe(terser())
        .pipe(dest(files.distPath, { sourcemaps: '.' }));
}

// Browser-Sync Tasks
function browsersync(cb) {
    browserSync.init({
        server: {
            baseDir: './app/html/'
        }
    });
    cb();
}

function reload(cb) {
    browserSync.reload();
    cb();
}


// Watch Task.
function watchTask() {
    watch(files.htmlPath, reload);
    watch([files.scssPath, files.jsPath], series(parallel(scssTask, jsTask), reload));
}

// Exporting Defaults.
exports.default = series(
    parallel(scssTask, jsTask),
    browsersync,
    watchTask
);