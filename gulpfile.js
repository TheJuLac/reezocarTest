// Initialize packages / modules / plugins
const { src, dest, watch, series, parallel } = require ('gulp');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();

// Paths
const files = {
    scssPath: 'src/assets/scss/**/*.scss',
    imgPath: 'src/assets/img/*.*',
    templatePath: '*.html'
}

// SCSS
function scssTask(){
    return src(files.scssPath)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([ autoprefixer(), cssnano() ]))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('dist/css'));
}

//Images
function imgTask() {
    return src([
        files.imgPath
    ])
    .pipe(imagemin())
    .pipe(dest('./dist/img'))
}

//Watcher
function watchTask() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
    watch([
        files.scssPath,
        files.imgPath,
        files.templatePath
    ],
        series(
            parallel(scssTask, imgTask)
        )
    ).on('change', browserSync.reload);
}

// Default
exports.default = series(
    parallel(scssTask, imgTask),
    watchTask
);