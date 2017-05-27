var gulp = require('gulp');

var connect = require('gulp-connect');
gulp.task('connect', function() {

	connect.server({

		root: '',
		liverload: true

	});

});
gulp.task('check', function(){
	return gulp.src('./tabela/*.*')
		.pipe(connect.reload());
});
gulp.task('checkImg', function(){
	return gulp.src('./obrazki/*.*')
		.pipe(connect.reload());
});
gulp.task('watch', function(){
	gulp.watch(['./tabela/*.*'], ['check']);
	gulp.watch(['./obrazki/*.*'], ['checkImg']);

});

gulp.task('default', ['connect', 'watch', 'check', 'checkImg']);
