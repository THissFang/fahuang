var $ = require('./common/libs/zepto-modules/zepto');
require('./common/libs/zepto-modules/event');
require('./common/libs/zepto-modules/touch');
require('./common/libs/zepto-modules/ajax');

var Swiper = require('./common/libs/swiper/swiper.min.js');
var swiperAni = require('./common/libs/swiper/swiper.animate1.0.2.min.js');
var IScroll = require('./common/libs/iscroll/iscroll.js');

// edit index
$(".swiper-container").show();

$("#mainContainer").hide();

var swiper = new Swiper('.swiper-container',{
  onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
    swiperAni.swiperAnimateCache(swiper); //隐藏动画元素 
    swiperAni.swiperAnimate(swiper); //初始化完成开始动画
  }, 
  onSlideChangeEnd: function(swiper){ 
    swiperAni.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
  } 
});
	var myScroll;
$(".enter").click(function(){
	$(".swiper-container").hide();
	$("#mainContainer").show();
	

	$.post('http://localhost:8000/skill',function(data){
		var html ="";
		for(var i =0;i<data.length;i++){
			
html+='<li><div class="category_box"><span class="title">技术类别:</span><span class="category">'+data[i].category+'</span></div><div class="name_box"><span class="title">技术名称:</span> <span class="sname">'+data[i].name+'</span></div><div class="level_box"><span class="title">掌握程度:</span><span class="level">'+data[i].level+'</span></div><div class="time_box"><span class="title">年 &nbsp;  &nbsp;&nbsp;限:</span> <span class="time">'+data[i].time+'</span></div></li>';

		}
		$('#scroller ul').html(html);
	
		myScroll = new IScroll('#wrapper', { mouseWheel: true });
		document.addEventListener('touchmove', function (e) { e.preventDefault();}, false);
	})

	
})
$('#work').tap(function(){
		$('#header').html($(this).html());
	$('#scroller ul').html();
		$.post('http://localhost:8000/work',function(data){
			var html='';
				for(var i =0;i<data.length;i++){
			
html+='<li><div class="category_box"><span class="title">企业性质:</span><span class="category">'+data[i].category+'</span></div><div class="name_box"><span class="title">企业名称:</span> <span class="sname">'+data[i].name+'</span></div><div class="level_box"><span class="title">参与项目:</span><span class="level">'+data[i].projects+'</span></div><div class="time_box"><span class="title">年 &nbsp;  &nbsp;&nbsp;限:</span> <span class="time">'+data[i].time+'</span></div></li>';

		}
   	$('#scroller ul').html(html);
   	myScroll = new IScroll('#wrapper', { mouseWheel: true });
		document.addEventListener('touchmove', function (e) { 
			e.preventDefault(); }, false);
		myScroll.scrollTo(0,0);
		myScroll.refresh();	
			
		})
});
$('#project').tap(function(){
		$('#header').html($(this).html());
	$('#scroller ul').html();
		$.post('http://localhost:8000/project',function(data){
			var html='';
				for(var i =0;i<data.length;i++){
			
html+='<li><div class="img"></div><div class="category_box"><span class="title">项目类别:</span><span class="category">'+data[i].category+'</span></div><div class="name_box"><span class="title">企业名称:</span> <span class="sname">'+data[i].name+'</span></div><div class="level_box"><span class="title">项目内容:</span><span class="level">'+data[i].description+'</span></div><div class="time_box"><span class="title">项目细节:</span> <span class="time">'+data[i].detail+'</span></div><div class="time_box"><span class="title">技术要点:</span> <span class="time">'+data[i].tech+'</span></div></li>';

		}
   	$('#scroller ul').html(html);
   	myScroll = new IScroll('#wrapper', { mouseWheel: true });
		document.addEventListener('touchmove', function (e) { 
			e.preventDefault(); }, false);
		myScroll.scrollTo(0,0);
		myScroll.refresh();	
			
		})
});
$('#skill').tap(function(){
		$('#header').html($(this).html());
	$('#scroller ul').html();
		$.post('http://localhost:8000/skill',function(data){
			var html='';
				for(var i =0;i<data.length;i++){
			
html+='<li><div class="category_box"><span class="title">技术类别:</span><span class="category">'+data[i].category+'</span></div><div class="name_box"><span class="title">技术名称:</span> <span class="sname">'+data[i].name+'</span></div><div class="level_box"><span class="title">掌握程度:</span><span class="level">'+data[i].level+'</span></div><div class="time_box"><span class="title">年 &nbsp;  &nbsp;&nbsp;限:</span> <span class="time">'+data[i].time+'</span></div></li>';


		}
   	$('#scroller ul').html(html);
   	myScroll = new IScroll('#wrapper', { mouseWheel: true });
		document.addEventListener('touchmove', function (e) { 
			e.preventDefault(); }, false);
		myScroll.scrollTo(0,0);
		myScroll.refresh();	
			
		})
	})

