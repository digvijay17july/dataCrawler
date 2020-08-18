const gulp = require("gulp");
const gap = require("gulp-append-prepend");

gulp.task("licenses", async function () {

  gulp
    .src("build/static/js/*chunk.js", { base: "./" })
    .pipe(
      gap.prependText(`/*!

=========================================================
* Now UI Kit React - v1.4.0
=========================================================

* Product Page: 

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));


  gulp
    .src("build/static/js/runtime*.js", { base: "./" })
    .pipe(
      gap.prependText(`/*!

  =========================================================
  * Now UI Kit React - v1.4.0
  =========================================================


  =========================================================

  * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

  */`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));

  gulp
    .src("build/index.html", { base: "./" })
    .pipe(
      gap.prependText(`<!--

=========================================================
* Now UI Kit React - v1.4.0
=========================================================


=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

-->`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));


  gulp
    .src("build/static/css/*chunk.css", { base: "./" })
    .pipe(
      gap.prependText(`/*!

=========================================================
* Now UI Kit React - v1.4.0
=========================================================


=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));
  return;
});
