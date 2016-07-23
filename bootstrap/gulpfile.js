var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});

	//gulp.watch("app/scss/*.scss", ['sass']);
	gulp.watch("app//**/*.html").on('change', browserSync.reload);
	gulp.watch("app/**/*.js").on('change', browserSync.reload);
	gulp.watch("app/**/*.less").on('change', browserSync.reload);

	gulp.watch("components/**/*.html").on('change', browserSync.reload);
	gulp.watch("components/**/*.js").on('change', browserSync.reload);
	gulp.watch("components/**/*.less").on('change', browserSync.reload);
});

gulp.task('default', ['browser-sync']);