import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import postcss from 'gulp-postcss';
import tailwindcss from 'tailwindcss'; // Обычный плагин
import autoprefixer from 'autoprefixer';
import cleanCss from 'gulp-clean-css';
import rename from 'gulp-rename';

const scssCompiler = gulpSass(dartSass);

export const styles = () => {
  return gulp.src('./src/scss/main.scss')
    .pipe(plumber(notify.onError({
      title: 'SCSS',
      message: 'Error: <%= error.message %>',
    })))
    .pipe(scssCompiler({ outputStyle: 'expanded' }))
    .pipe(postcss([
      tailwindcss('./tailwind.config.js'), // Классический плагин
      autoprefixer(),
    ]))
    .pipe(gulp.dest('./app/css'))
    .pipe(cleanCss())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./app/css'));
};