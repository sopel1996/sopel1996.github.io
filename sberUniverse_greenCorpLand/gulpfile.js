//Подключаем галп
const gulp = require('gulp');
//Добапвление префиксов
const autoprefixer = require('gulp-autoprefixer');
//Оптисизация стилей
const cleanCSS = require('gulp-clean-css');
//Оптимизация скриптов
const uglify = require('gulp-uglify');
//Удаление файлов
const del = require('del');
//Синхронизация с браузером
const browserSync = require('browser-sync').create();
//Для препроцессоров стилей
const sourcemaps = require('gulp-sourcemaps');
//Sass препроцессор
const sass = require('gulp-sass')(require('sass'));
//Минификация изображений
const imagemin = require('gulp-imagemin');

const ttf2woff = require('gulp-ttf2woff');
const ttf2woff2 = require('gulp-ttf2woff2');




//Порядок подключения файлов со стилями
const styleFiles = [
   './src/scss/style.scss',
   './src/scss/styleMob.scss'
]
//Порядок подключения js файлов
const scriptFiles = [
   // './src/js/lib.js',
   // './src/js/index.js'
]
gulp.task('html', () => {
   return gulp.src('./src/*.html')
      .pipe(gulp.dest('./build/'))
})
gulp.task('copy', () => {
   return gulp.src('./src/scss/**/*.css')
      .pipe(gulp.dest('./build/media/css/'))
      .pipe(gulp.src('./src/js/**/*.js'))
      .pipe(gulp.dest('./build/media/js'))
})
gulp.task('copy2site', () => {
   return gulp.src('**/*.*')
      .pipe(gulp.dest('../sopel1996.github.io/sberUniverse_greenCorpLand'))
})


gulp.task('fontsConverter', () => {
   return gulp.src(['./src/fonts/*.ttf'])
      .pipe(ttf2woff())
      .pipe(gulp.dest('./build/media/fonts'))
      .pipe(gulp.src(['./src/fonts/*.ttf']))
      .pipe(ttf2woff2())
      .pipe(gulp.dest('./build/media/fonts'))
      .pipe(gulp.src(['./src/fonts/*.ttf']))
      .pipe(gulp.dest('./build/media/fonts/'));
})

//Таск для обработки стилей
gulp.task('styles', () => {
   //Шаблон для поиска файлов CSS
   return gulp.src(styleFiles)
      // .pipe(sourcemaps.init())
      //Указать stylus() , sass() или less()
      .pipe(sass())
      //Добавить префиксы
      // .pipe(autoprefixer({
      //    cascade: false
      // }))
      //Минификация CSS
      .pipe(cleanCSS({
         level: 0
      }))
      // .pipe(sourcemaps.write('./'))
      //Выходная папка для стилей
      .pipe(gulp.dest('./build/media/css'))
      .pipe(browserSync.stream());
});

//Таск для обработки скриптов
gulp.task('scripts', () => {
   //Шаблон для поиска файлов JS
   return gulp.src('./src/js/**.js')
      //Минификация JS
      // .pipe(uglify({
      //    toplevel: true
      // }))
      //Выходная папка для скриптов
      .pipe(gulp.dest('./build/media/js'))
      .pipe(browserSync.stream());
});

//Таск для очистки папки build
gulp.task('del', () => {
   return del(['build/*'])
});

gulp.task('image_min', () => {
   return gulp.src('./src/img/**')
      
      .pipe(gulp.dest('./build/media/img/'))
})
//Таск для отслеживания изменений в файлах
gulp.task('watch', () => {
   browserSync.init({
      server: {
         baseDir: "./build/"
      }
   });
   gulp.watch('./src/img/**', gulp.series('image_min'))
   //Следить за файлами со стилями с нужным расширением
   gulp.watch('./src/scss/**/*.scss', gulp.series('styles'))
   //Следить за JS файлами
   gulp.watch('./src/js/**/*.js', gulp.series('scripts'))

   gulp.watch('./src/*.html', gulp.series('html'))
   //При изменении HTML запустить синхронизацию
   gulp.watch("./src/*.html").on('change', browserSync.reload);
});


//Таск по умолчанию, Запускает del, styles, scripts и watch
// gulp.task('default', gulp.series('del', 'html', gulp.parallel('styles', 'scripts', 'image_min', 'copy'), 'watch'));
gulp.task('default', gulp.series('del', 'fontsConverter' ,'html', gulp.parallel('styles', 'scripts', 'image_min', 'copy'), 'watch'));