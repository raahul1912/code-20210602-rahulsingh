const gulp = require("gulp");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");
const mocha = require('gulp-mocha');
const { exec } = require('child_process');

gulp.task('test', () => {
    return gulp.src('src/components/public/tests/public.controller.test.ts', { base: '.' })
        .pipe(tsProject())
        .pipe(gulp.dest('.'))
        .pipe(mocha({
            reporter: 'list'
        }));
});

gulp.task("build", () => {
    return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest("build"));
});

// gulp.task("build", () => {
//     gulp.watch(['src/**/**/**/*.ts'], gulp.series('compile-ts'));
// });

gulp.task('server', (cb) => {
    exec('node build/server.js', (err, stdout, stderr) => {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('default', gulp.series('build', 'test', 'server'));
