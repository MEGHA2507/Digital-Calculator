const {src, dest} = require('gulp');
const less = require('gulp-less');

exports.default = function(){
    return src('./less/**//*.less')
    .pipe(less())
    .pipe(dest('./css'));
}