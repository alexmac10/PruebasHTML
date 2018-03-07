const gulp = require('gulp');
const pug = require('gulp-pug');
const rename = require('gulp-rename');
const browserSync = require('browser-sync');
const server = browserSync.create();

gulp.task('pug', () => {
    gulp.src('./dev/pug/*.pug')
            .pipe(pug({
                pretty: true
            }))
            .pipe(rename({
                extname: '.php'
            }))
            .pipe(gulp.dest('./public/'));
});

gulp.task('default', () => {
    server.init({
        proxy: 'http://localhost/PruebasHtml/public/index.php'
    });
    gulp.watch('./dev/pug/**/*.pug', ['pug', server.reload]);
});



