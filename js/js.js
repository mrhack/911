//DD_belatedPNG.fix('div, ul, img, li, input , a');
var formOpened = 0;
var whereIam = null;
var isInitFlash = false;
var isie6 = $.browser.msie && $.browser.version == 6;
$(function() {

	var $loadLeft = $('.loading_left');
	var $loadRight = $('.loading_right');
	var $win 	= $(window);
	var height 	= $win.height();
	var width  = $win.width();
	var winSrollHeight = $win.scrollTop();

	var $t1 	= $('#text1_1');
	var $t2 	= $('#text1_2');
	var $t3 	= $('#text1_3');
	var $t4 	= $('#text1_4');
	var $t5 	= $('#text1_5');

	var $bm     = $('#baoming1').hover(function(){$bm.css('opacity',1);},function(){$bm.css('opacity',0.7);});

	var $s1 	= $('#section1').css({'top':0});
	var $s2 	= $('#section2').css({'top':height});
	var $s3 	= $('#section3').css({'top':height*2});
	var $s4 	= $('#section4').css({'top':height*3});


	var $slider1 = $('#slider1_t');
	var $slider2 = $('#slider2_t');
	var $slider3 = $('#slider3_t');

		if($('html').hasClass('touch')){
		window.location.href="m";
	}
	$('.page-wrapper').css({'display':'block','opacity':0});


	$('#section_home').anystretch("images/car1.jpg");
	$loadLeft.anystretch("images/loading_left.jpg",{'positionX':'right','elPosition': isie6 ? 'absolute' : 'fixed'});
	$loadRight.anystretch("images/loading_right.jpg",{'positionX':'left','elPosition': isie6 ? 'absolute' : 'fixed'});
	$("#FlashContent").anystretch("images/video.jpg",{'positionX':'left','elPosition': isie6 ? 'absolute' : 'fixed'});

	if ( isie6 ){
		$('.page-wrapper').css({'opacity':1 , 'overflow': 'hidden'});
		$loadLeft.add($loadRight)
		.css({
			top 	: winSrollHeight
		});
		$('html').css({
			overflowX:'hidden'
		})
		$('.page-wrapper').css({
			width : width
		});

		$loadLeft.hide();
		$loadRight.hide();
		setTimeout(function(){
				$t1
			.add($t2)
			.add($t3)
			.add($t4)
			.add($t5)
			.add($bm)
			.css('left' , '10px');
		} , 1000);

		$s4.css('position' , 'relative');
		// fix ie6
		$('.forrm_submit input').css({
			'text-indent': -42,
			'opacity': 0
		});
		// hide scroll
		$('.control_button_wrap').hide();

		$('.menu_inner').css('top' , 0);
	}

	if ( !isie6 ){

		function loadComplete(){
			$('#qLoverlay').fadeOut(function(){
				$(this).remove();
			});
			$('.page-wrapper').css({'opacity':1});

			$loadLeft.animate({'left':'-50%'},1000,'easeInCubic');
			$loadRight.animate({'right':'-50%'},1000,'easeInCubic');
			$t1.delay(200).animate({'left':'10'},1000,'easeInOutBack');
			$t2.delay(300).animate({'left':'10'},1000,'easeInOutBack');
			$t3.delay(400).animate({'left':'10'},1000,'easeInOutBack');
			$t4.delay(500).animate({'left':'10'},1000,'easeInOutBack');
			$t5.delay(600).animate({'left':'10'},1000,'easeInOutBack');
			$bm.delay(700).animate({'left':'10'},1000,'easeInOutBack');
		}
		$("body").queryLoader2({
			barColor: "#fff",
			percentage: true,
			barHeight: 1,
			completeAnimation: "fade",
			minimumTime: 100,
			onLoadComplete: loadComplete
		});
	}


	$win.bind('scroll', changeBookmarkOnScroll)
		.resize(windowResize)
		.scroll(function(){
	   		var scrollTop = $win.scrollTop();

			var height = $win.height() ;

			$s2.css({'top': height - scrollTop });
			$s3.css({'top': height * 2 - scrollTop });
			$s4.css({'top': height * 3 - scrollTop });

			$s1.css({'top': - scrollTop * 0.1 });
			if( height - scrollTop < 0 ){
				$s2.css({'top': ( height - scrollTop ) * 0.1 });
			}
			if( height * 2 - scrollTop +110 < 0 ){
				$s3.css({'top': ( height - scrollTop ) * 0.1} );
				$slider1.css({'margin-top':(height*2-scrollTop)*0.1});
				$slider2.css({'margin-top':(height*2-scrollTop)*0.1});
				$slider3.css({'margin-top':(height*2-scrollTop)*0.1});
			}

			if( height * 2 - scrollTop < 0 ){
				var offset = (height*3-scrollTop)*0.2;
				$s4.find('.content_wrap').css({'background-position':'50% '+ offset + 'px'});
			}

			if( height * 3 - scrollTop  < 300){
				if(!formOpened){
					$s4.find('.text2_1').animate({'left':310},2000,'easeInOutBack');
					$s4.find('.text2').delay(200).animate({'left':181},2000,'easeInOutBack');
					$s4.find('.baoming2').delay(400).animate({'left':384},2000,'easeInOutBack');
					formOpened = 1;
				}
			}
			//scrolling section1
			$t1.css({'margin-left':- scrollTop*0.5 , opacity : 1 - 1.3 * scrollTop / height });
			$t2.css({'margin-left':- scrollTop*0.4 , opacity : 1 - 1.3 * scrollTop / height });
			$t3.css({'margin-left':- scrollTop*0.3 , opacity : 1 - 1.3 * scrollTop / height });
			$t4.css({'margin-left':- scrollTop*0.1 , opacity : 1 - 1.3 * scrollTop / height });
			$t5.css({'margin-left':- scrollTop*0.4 , opacity : 1 - 1.3 * scrollTop / height });
			$bm.css({'margin-left':- scrollTop*0.1 , opacity : 1 - 1.3 * scrollTop / height - 0.3 });
		});

	$s4.find('.text2_1 , .text2 , .baoming2')
		.add($('.form2 h2,.form2 .form_field'))
		.css({'position':'absolute','left':2000});

	$t1.add($t2).add($t3)
		.add($t4).add($t5)
		.add($bm)
		.css({'position':'absolute','left':2000});

	$('.baoming2 a').click(function(e){
		e.preventDefault();
        var time = 2000;
        $s4.find('.form2').show();
		$s4.find('.text2_1').animate({'left':-2000},time,'easeInOutBack');
		$s4.find('.text2').delay(200).animate({'left':-2000},time,'easeInOutBack');
		$s4.find('.baoming2').delay(300).animate({'left':-2000},time,'easeInOutBack');

		$s4.find('h2').delay(400).animate({'left':330},time,'easeInOutBack');
		$s4.find('.form_field1').delay(500).animate({'left':330},time,'easeInOutBack');
		$s4.find('.form_field2').delay(600).animate({'left':330},time,'easeInOutBack');
		$s4.find('.form_field3').delay(700).animate({'left':330},time,'easeInOutBack');
		$s4.find('.form_field4').delay(800).animate({'left':330},time,'easeInOutBack');
		$s4.find('.form_field5').delay(900).animate({'left':330},time,'easeInOutBack');
		$s4.find('.form_field6').delay(1000).animate({'left':339},time,'easeInOutBack');
		$s4.find('.form_field7').delay(1100).animate({'left':330},time,'easeInOutBack');
	});

	$("select").uniform();


   $(".top img, .bottom img, .car1 img").css('width', width - 40)


 /* $(window).resize(function () {
		$('#browserInfo').text('Browser (Width : ' + $(window).width()
                                 + ' , Height :' + $(window).height() + ' )');
    })
  */


  	if( ! isie6 ){
        var $menuInner = $(".menu_inner");
		$(".menu_wrap").hover(function(){
			$menuInner.stop(true,false)
				.animate({top:"-8px"},700, 'easeInOutBack');
		},function(){
			$menuInner.stop(true,false)
				.animate({top:"-89px"},700, 'easeInOutBack');
		});
	}

	//navigation
	$('.menu_wrap a, #bullet a,.baoming1').click(function(e){
		e.preventDefault();
		$.scrollTo( $(this).attr('href'), 1500, {easing:'easeOutQuart'} );
	});

	// Keyshort
	$('body').keydown(function(event) {
		if(event.which == 38)
		{
			$.scrollTo( "#"+$('#'+whereIam).prev().attr('id'), 1000, {easing:'easeOutQuart'} );
		}
		if(event.which == 40)
		{
			$.scrollTo( "#"+$('#'+whereIam).next().attr('id'), 500, {easing:'easeOutQuart'} );
		}
	});

    var $share_li1  = $(".share_li1");
    var $share1     = $(".share1");
    var share1Class = "share1_active";
    if( isie6 ){

        $share1.hover(function( ev ){
                $share_li1.show();
                //$share1.addClass( share1Class );
        } , function(){
                $share_li1.hide();
                //$share1.removeClass(share1Class);
        });
    } else {
        $share1.hover(function( ev ){
            $share_li1.stop(true,true).fadeIn();
            $(this).addClass(share1Class);

            //$(".share_li1", this).stop().animate({top:"-365px"},{queue:false,duration:300});
        },function(){
           $share_li1.stop(true,true).fadeOut();
           $share1.removeClass(share1Class);
            //$(".share_li1", this).stop().animate({top:"0"},{queue:false,duration:300});
        });
    }

    var $share_li2  = $(".share_li2");
    var $share2     = $(".share2");
    var share2Class = "share2_active";
	if( isie6 ){
         $share2.hover(function(){
                $share_li2[0].style.display="block";
               // $share2.addClass(share2Class);
          },function(){
                $share_li2[0].style.display="none";
                //$share2.removeClass(share2Class);
        });

    } else {
        $share2.hover(function(){
            $share_li2.stop(true,true).show();
            $share2.addClass(share2Class);
          },function(){
            $share_li2.stop(true,true).hide();
            $share2.removeClass(share2Class);
        });
    }


	// Accordion Slider 1
	$('#slider1').hoverIntent(function(){
		var sliderImgWidth = parseInt($('#accordion_slider').width()*0.64);
		var sliderWidth = parseInt($('#accordion_slider').width()*(1/3))+1;
		var sliderWidthOffset = parseInt(sliderWidth * (1/2));
		var sliderWidthOffset2 = parseInt(($('#accordion_slider').width() - sliderImgWidth)*0.5);
		$('#slider1').css('z-index',3);
		$('#slider2').css('z-index',1);
		$('#slider3').css('z-index',3);
		$('#slider2').animate({'left':sliderWidthOffset*2});
		$('#slider1').animate({'left':0,'width':sliderImgWidth});
		$('#slider3').animate({'right':-sliderWidthOffset});
		$('#slider2 img').animate({'opacity':0.5});
		$('#slider3 img').animate({'opacity':0.5});

	},function(){
		var sliderWidth = parseInt($('#accordion_slider').width()*(1/3))+1;
		var sliderImgWidth = parseInt($('#accordion_slider').width()*0.64);
		var sliderImgHeight = parseInt(sliderImgWidth * 0.617);
		var sliderWidthOffset2 = parseInt(($('#accordion_slider').width() - sliderImgWidth)*0.5);
		var imageLeft = (sliderImgWidth - sliderWidth)/2;
		$("#slider1").animate({left:0,opacity:1,width:sliderWidth});
		$("#slider2").animate({left:sliderWidthOffset2});
		$("#slider3").animate({right:0,width:sliderWidth});
		$('#slider2 img').animate({'opacity':1});
		$('#slider3 img').animate({'opacity':1});
		$('#slider1').css('z-index',3);
		$('#slider2').css('z-index',1);
		$('#slider3').css('z-index',3);
	});

	// Accordion Slider 2
	$('#slider2').hoverIntent(function(){
		var sliderImgWidth = parseInt($('#accordion_slider').width()*0.64);
		var sliderWidth = parseInt($('#accordion_slider').width()*(1/3))+1;
		var sliderWidthOffset = parseInt(sliderWidth * (2/5));
		var sliderWidthOffset2 = parseInt(($('#accordion_slider').width() - sliderImgWidth)*0.5);
		$('#slider1').animate({'left':-sliderWidthOffset},function(){
			$('#slider1').css('z-index',1);
			$('#slider2').css('z-index',2);
			$('#slider3').css('z-index',1);
		});

		$('#slider3').animate({'right':-sliderWidthOffset});
		$('#slider1 img').animate({'opacity':0.5});
		$('#slider3 img').animate({'opacity':0.5});
	},function(){
		var sliderWidth = parseInt($('#accordion_slider').width()*(1/3))+1;
		var sliderImgWidth = parseInt($('#accordion_slider').width()*0.64);
		var sliderImgHeight = parseInt(sliderImgWidth * 0.617);
		var imageLeft = (sliderImgWidth - sliderWidth)/2;
		$("#slider1").animate({left:0});
		$("#slider3").animate({right:0});
		$("#slider1 img").animate({opacity:1});
		$("#slider3 img").animate({opacity:1});
		$('#slider1').css('z-index',3);
		$('#slider2').css('z-index',1);
		$('#slider3').css('z-index',3);
	});

	// Accordion Slider 3
	$('#slider3').hoverIntent(function(){
		var sliderImgWidth = parseInt($('#accordion_slider').width()*0.64);
		var sliderWidth = parseInt($('#accordion_slider').width()*(1/3))+1;
		var sliderWidthOffset = parseInt(sliderWidth * (1/2));
		var sliderWidthOffset2 = parseInt(($('#accordion_slider').width() - sliderImgWidth)*0.5);

		$('#slider1').css('z-index',2);
		$('#slider2').css('z-index',1);
		$('#slider3').css('z-index',3);
		$('#slider1').animate({'left':-sliderWidthOffset});
		$('#slider2').animate({'left':0});
		$('#slider1 img').animate({'opacity':0.5});
		$('#slider2 img').animate({'opacity':0.5});
		$('#slider3').animate({'right':0,'width':sliderImgWidth});
	},function(){
		var sliderWidth = parseInt($('#accordion_slider').width()*(1/3))+1;
		var sliderImgWidth = parseInt($('#accordion_slider').width()*0.64);
		var sliderImgHeight = parseInt(sliderImgWidth * 0.617);
		var sliderWidthOffset2 = parseInt(($('#accordion_slider').width() - sliderImgWidth)*0.5);
		var imageLeft = (sliderImgWidth - sliderWidth)/2;
		$("#slider1").animate({left:0});
		$("#slider2").animate({left:sliderWidthOffset2});
		$("#slider3").animate({right:0,width:sliderWidth});
		$("#slider1 img").animate({opacity:1});
		$("#slider2 img").animate({opacity:1});
		$('#slider1').css('z-index',3);
		$('#slider2').css('z-index',1);
		$('#slider3').css('z-index',3);
	});

	$("#accordion_slider a.open_slider").fancybox({
		padding: 0,
		openEffect: 'elastic',
		closeEffect: 'elastic',
		helpers: {
			title : {
				type : 'outside'
			},
			overlay : {
				closeClick : true,  // if true, fancyBox will be closed when user clicks on the overlay
				speedOut   : 200,   // duration of fadeOut animation
				showEarly  : true,  // indicates if should be opened immediately or wait until the content is ready
				css        : {'background':'rgba(0,0,0,0.8)'},    // custom CSS properties
				locked     : true   // if true, the content will be locked into overlay
			},
			thumbs : {
				width: 9,
				height: 9
			}
		}
	});


		windowResize();

		setTimeout(windowResize,200);

		$("#signupForm").validate({
			rules: {
				user_name: "required",
				chexing: "required",
				baoshijiezhongxin: "required",
				phone: { required: true, number: true, rangelength: [11,11]},
				email: {
					required: true,
					email: true
				},
				agree: "required"
			},
			messages: {
				user_name: "请输入姓名",
				chexing: "请选择您感兴趣的车型",
				baoshijiezhongxin: "请选择您感兴趣的保时捷中心",
				phone:{required:'请输入手机号码',number: '请输入正确的11位手机号码',rangelength: '请输入正确的11位手机号码'},
				email: "请输入邮箱",
				agree: "请阅读保密政策"
			},
			submitHandler: function (form) {

				$(form).ajaxSubmit(function () {
					$('.section4 h2').delay(100).animate({'left':-2000},1000,'easeInOutBack');
					$('.section4 .form_field1').delay(200).animate({'left':-2000},1000,'easeInOutBack');
					$('.section4 .form_field2').delay(300).animate({'left':-2000},1000,'easeInOutBack');
					$('.section4 .form_field3').delay(400).animate({'left':-2000},1000,'easeInOutBack');
					$('.section4 .form_field4').delay(500).animate({'left':-2000},1000,'easeInOutBack');
					$('.section4 .form_field5').delay(600).animate({'left':-2000},1000,'easeInOutBack');
					$('.section4 .form_field6').delay(700).animate({'left':-2000},1000,'easeInOutBack');
					$('.section4 .form_field7').delay(800).animate({'left':-2000},1000,'easeInOutBack');
					$('.section4 .text2_3').delay(900).animate({'left':380},1000,'easeInOutBack');
					return false;
				});
				return false;


			}
		});



		$('#agree_doc,#sharefriend').fancybox({
			type : 'ajax',
			'openEffect'	: 'fade',
			'closeEffect'	: 'fade',
			'openSpeed'      : 300,
			'closeSpeed'     : 300,
			'margin'			: 0,
			'padding'			: 0,
			scrolling : 'auto',
			maxWidth:	800,
			maxHeight: 	480,
			preload   : true,

			helpers : {
				overlay : {
					css : {'background' : 'none', 'opacity':1},
					showEarly  : true,
					locked: false
				}
			},
			afterShow:function(){
			}
		});

	// init flash player
	// resize flash
    $win.scroll(function(){
        if( isInitFlash ) return;
        var scTop = $win.scrollTop();
        if( height - scTop < 0  && 1.5 * height - scTop > 0 ){
            if( $.browser.webkit ){
                initFlash( width-40 , (width-40)*0.42 );
            } else {
                initFlash( '100%' , '100%' );
            }
            isInitFlash = true;
        }
    });

	var videoMarginTop = height - $('#section_video').height();
	videoMarginTop = videoMarginTop > 0?videoMarginTop:0;
	$('#section_video').css('margin-top' , videoMarginTop /2 );
});


function initFlash( stageW , stageH ){
	// JAVASCRIPT VARS
	var cacheBuster = "?t=" + Date.parse(new Date());

	// PARAMS
	var params = {};
	params.allowfullscreen = "true";
	params.allowScriptAccess = "always";
	params.scale = "noscale";
  	params.wmode = "opaque";
	//params.wmode = "transparent";

	// ATTRIBUTES
	var attributes = {};
	attributes.id = 'FlashContent';


	/* FLASH VARS */
	var flashvars = {};

	// PLAYER DIMENSIONS inside the SWF
	// if this are not defined then the player will take the stage dimensions defined in the "JAVASCRIPT VARS" section above
	flashvars.componentW = stageW;
	flashvars.componentH = stageH;	// if controller under is set to true then you must change this variable(substract the controller height)

	// if you don't define these then the one defined in the XML file will be taken in consideration
	flashvars.previewFilePath = "preview.jpg";
	flashvars.videoFilePath = "video.flv";

	// player settings(if not defined then the player will have the default settings defined in AS)
	flashvars.settingsXMLFile = "settings.xml";


	/** EMBED CODE **/
	swfobject.embedSWF("preview.swf"+cacheBuster, attributes.id, stageW, stageH, "9.0.124", "js/expressInstall.swf", flashvars, params, attributes);
}

function windowResize(){
	   // $(".top img, .bottom img, .car1 img").css('width', $(window).width()-40+'px');
	   var winW = $(window).width();
	   var winH = $(window).height();
	   $('.loading_left').css({ 'width' : winW * 0.5 + 1 , 'height' : winH});
	   $('.loading_right').css({ 'width' : winW * 0.5 , 'height' : winH});

		var containerWidth = winW;
		var containerHeight = winH;
		$('.section,.section_bg').height(containerHeight);
		$('#section_video').height(containerWidth *0.42);
		$('.section').width(containerWidth);
		$('#section_home').height(containerHeight-containerHeight*0.3)
			.css({'margin-top':containerHeight*0.15});

	   if( isie6 ){
	   	   $('.blank_section').hide();
	   } else {
	   	   $('.blank_section').height(containerHeight);
	   }

	   var $acc = $('#accordion_slider');
	   var accordion_slider_w = $acc.width();
	   var sliderWidth = parseInt(accordion_slider_w / 3 )+1;
	   var sliderImgWidth = parseInt(accordion_slider_w*0.64);
	   var sliderImgHeight = parseInt(sliderImgWidth * 0.617);
	   var imageLeft = (sliderImgWidth - sliderWidth)/2;

	   var $slideImgs = $(".slider_wrap")
	   		.height(sliderImgHeight)
	   		.width(sliderWidth)
	   		.find('img')
	   		.width(sliderImgWidth)
	   		.height(sliderImgHeight)
	   		.css({'left':-imageLeft});;

	   $acc.css({'margin-top':(containerHeight - containerWidth*0.42)/2
	   		,width:containerWidth
	   		,height:containerWidth*0.42
	   	});


	   $acc.height(sliderImgHeight).css({'margin-top':(containerHeight - sliderImgHeight)/2});

	   var $s4Wrap = $('.section4 .content_wrap');
	   var formHeight = $s4Wrap.height();
	   var formMargin = (containerHeight - formHeight)/2;
	   formMargin = formMargin < 0 ? 0 : formMargin;

	   $s4Wrap.css({'margin-top':formMargin});

	   var sliderWidthOffset2 = parseInt(($acc.width() - sliderImgWidth)*0.5);
	   $("#slider2").css({'left':sliderWidthOffset2,'width':sliderImgWidth});
	   $slideImgs.css({'left':0});

	   // resize flash
       var scTop = $(window).scrollTop();
       if( winH - scTop < 0  &&
           1.5 * winH - scTop > 0 &&
           $.browser.webkit ){
           if( !isInitFlash ){
               initFlash( width , 400 );
           } else {
               var fscWidth = $('#FlashContent').width();
               $('#FlashContent').css('margin-left' , ( winW - fscWidth ) / 2 );
           }
       }
       $('#FlashContent').css('overflow' , 'hidden');
       var fscWidth = $('#FlashContent').width();
       if( !isInitFlash ){
           $('#FlashContent img').css('margin-left' , - ( 1648 - fscWidth ) / 2)
       }
	}



function changeBookmarkOnScroll(){
	$('.blank_section[rel]').each(function(){
	  if ($(this).position().top-40 <= $(window).scrollTop()){
		whereIam = $(this).attr('rel');
	  }
	});

	if (whereIam != null){
	  var $bulletWhere = $('#bullet a[href="#' + whereIam + '"]' );
	  if ($bulletWhere.length > 0 && !$bulletWhere.hasClass('active')){
		$('#bullet a.active').removeClass('active');
		$bulletWhere.addClass('active');
	  }

	  var $navWhere = $('.menu a[href="#' + whereIam + '"]' );
	  if ($navWhere.length > 0 && !$navWhere.hasClass('active')){
		$('.menu a.active').removeClass('active');
		$navWhere.addClass('active');
	  }
	  var nextSection = $('#'+whereIam).next();
	}
}

function sharethis(e, t, n, r, i, s, o, u) {
    var a = "",
        f = document.location.toString(),
        l = "";
    r = typeof r == "undefined" || r == null ? "" : r, u = typeof u == "undefined" || u == null ? !0 : u, i = "" + (typeof i != "undefined" && i != null ? i : $('meta[property="og:title"]').attr("content")), i = i != "undefined" ? i : document.title, s = "" + (typeof s != "undefined" && s != null ? s : $('meta[property="og:description"]').attr("content")), s = s != "undefined" ? s : "", o = "" + (typeof o != "undefined" && o != null ? o : $('meta[property="og:image"]').attr("content")), o = o != "undefined" ? o : "", o.indexOf("#CONFIGSTRING#") >= 0 && (o = o.replace("#CONFIGSTRING#", caymanConfig.getConfigString())), f = f.replace(/[\?|&]ws=[^&]*/g, ""), f = f.replace(/[\?|&]pc=[^&]*/g, ""), f = f.replace(/[\?|&]deeplink=[^&]*/g, ""), f = f.replace(/[\?|&]uc=[^&]*/g, ""), r = checkShareConfig(r), l = f + (f.indexOf(!1) ? "?" : "&") + "c=0" + r, n != "undefinded" && (l = l + "&pc=" + n), a = e;
    if (t = "facebook") a = a.replace(/&#91;/mg, "["), a = a.replace(/&#93;/mg, "]");
    u ? (a = a.replace("#TITLE#", encodeURIComponent(i)), a = a.replace("#TEXT#", encodeURIComponent(s)), a = a.replace("#MEDIA#", encodeURIComponent(o)), a = a.replace("#URL#", encodeURIComponent(l))) : (a = e.replace("#TITLE#", i), a = a.replace("#TEXT#", encodeURIComponent(s)), a = a.replace("#MEDIA#", o), a = a.replace("#URL#", l)),  window.open(a, "share")
}
function checkShareConfig(e) {
    return e
}
