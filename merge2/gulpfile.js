var gulp = require("gulp");
var webpack = require("webpack-stream");
var path = require("path");
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var plist = require("./pList");
let comPlist = plist.COMP_LIST;
var del = require('del');
var sass = require("gulp-sass");
var concat = require("gulp-concat");
gulp.task("edit", () => {
  return gulp.src("./merge.js")
    .pipe(webpack({
      mode: "development",
      output: {
        path: path.join(__dirname, "./"),
        filename: "index.js"
      }
    }))
    .pipe(gulp.dest("./"));
});
gulp.task('images', function () {
  return gulp.src(comList(comPlist,"images","*.png"))
    .pipe(cache(imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest('./images'));
});
gulp.task('css', function () {
  return gulp.src(comList(comPlist,"","sdk.scss"))
  .pipe(sass())
  .pipe(concat("index.css"))
  .pipe(gulp.dest('./'))
});
gulp.task("clean", (done) =>{
  del([
    './images',
    "./index.js"
  ]);
  done();
});
gulp.task('default', gulp.series('clean',gulp.parallel('edit', 'images','css')));


function comList(list,type,suffix) {
  let arr  = [];
  arr = list.map((item) => {
    let value = `./component/${item}/${suffix}`;
    if (type) {
      value = `./component/${item}/${type}/${suffix}`;
    }
    return value;
  });
  return arr;
}