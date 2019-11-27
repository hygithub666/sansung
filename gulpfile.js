const gulp =require("gulp");
const sass =require("gulp-sass");

const uglify =require("gulp-uglify");

//自动生成sass编译后文件
// gulp.task("sass",function(){
//     return gulp.src("sass/**/*.scss")
//     .pipe(sass())
//     .pipe(gulp.dest("D:\\phpStudy\\WWW\\DickiesBig"));
// });


//监听任务
gulp.task("watchall",async()=>{
    //监听html,进行复制
    gulp.watch("*.html",async()=>{
        gulp.src("*.html")
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\sansungBig"))
    })

    // gulp.watch("css/*.css",async ()=>{
    //     gulp.src("css/*.css")
    //     .pipe(gulp.dest("D:\\phpStudy\\WWW\\sansungBig\\css"));
    // });
    // //监听sass文件
    gulp.watch("sass/**/*",async()=>{
        gulp.src("sass/**/*")
        .pipe(sass())
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\sansungBig\\css"));
    })
	gulp.watch("sass/**/*",async()=>{
        gulp.src("sass/**/*")
        .pipe(sass())
        .pipe(gulp.dest("D:\\sansung\\css"));
    })
    //监听js文件
    gulp.watch("js/*.js",async()=>{
        gulp.src("js/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\sansungBig\\js"));
    });
	gulp.watch("img/**/*",async()=>{
	    gulp.src("img/**/*")
	    .pipe(gulp.dest("D:\\phpStudy\\WWW\\sansungBig\\img"));
	});
    
	
})