"use strict";
var gulp = require("gulp");
var del = require("del");
var sourcemaps = require('gulp-sourcemaps');

/**
 * Remove build directory.
 */
gulp.task('clean', function (cb) {
    return del(["build"], cb);
});

gulp.task("resources", ["server"], function () {
 return gulp.src(["src/**/*", "!**/*.ts", "!src/server", "!src/server/**"])
        .pipe(gulp.dest("build"));
});

gulp.task("server", function () {
    return gulp.src(["server.js", "package.json"], { cwd: "src/server/**" })
        .pipe(gulp.dest("build"));
});

gulp.task("libs", function () {});

/**
 * Build the project.
 */
gulp.task("default", ['resources', 'libs'], function () {
    console.log("Building the project ...");
});