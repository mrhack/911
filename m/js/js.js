
$(function() {
   $(".top img, .bottom img, .car1 img").css('width', $(window).width()-40+'px')
   windowResize();
   $(window).resize(windowResize);


   $(".menu_wrap").hover(function(){
		$(".menu_inner").animate({top:"0px"},{ queue: false, duration: 150 });
   },function(){
		$(".menu_inner").animate({top:"-89px"},{ queue: false, duration: 150 });
   });


    $(".share1").tap(function(){
		$(".share_li1").stop(true,true).fadeIn();
		$(".share1").addClass("share1_active");
        closeShare2();
        return false;
		//$(".share_li1", this).stop().animate({top:"-365px"},{queue:false,duration:300});
	});

    function closeShare1(){
        $(".share_li1").stop(true,true).fadeOut();
		$(".share1").removeClass("share1_active");
    }
    function closeShare2(){
        $(".share_li2").stop(true,true).fadeOut();
		$(".share2").removeClass("share2_active");
    }
    $('.share_cancel').click(function(){
		closeShare1();
        closeShare2();
	});

	$(".share2").tap(function(){
        closeShare1();
		$(".share_li2").stop(true,true).fadeIn();
		$(".share2").addClass("share2_active");
        return false;
	  });




  	$( "#accordion" ).accordion({active:false,'collapsible':true,heightStyle: "content"});

	$('.video1 img').click(function(){
		$(this).hide();
		$('#video_1').show();
		$('#video_1')[0].play();

	});

	// swipe effect
	!(function(){
		var winWidth = $(window).width();
		var $slider = $('#accordion_slider')
			.on( 'swipeleft' , function(){
				if( swipeIndex == swipeLength - 1 ) return;
				swipeToEl( ++swipeIndex );
			})
			.on( 'swiperight' , function(){
				if( swipeIndex == 0 ) return;
				swipeToEl( --swipeIndex );
			});
		var $items 	= $slider.find('.slider_item')
			.width( winWidth );
		var swipeLength = $items.length;
		// when load init the img wrap width and desc wrap width
		var $swipeEls = $slider.find('.slider_items')
				.width( winWidth * $items.length );
		var swipeIndex = 0;
		$slider.on('swipeleft' , function(){

		});

		var $left = $slider.find('.slider_left').click(function(){
			if( swipeIndex == swipeLength - 1 ) return;
			swipeToEl( ++swipeIndex );
		});
		var $right = $slider.find('.slider_right').click(function(){
			if( swipeIndex == 0 ) return;
			swipeToEl( --swipeIndex );
		});

		function resetBtnTop( index ){
			// reset slide btn's top style
			var imgHeight = $items.eq( index )
						.find('img')
						.height();
			$right.add($left).css({
				top : imgHeight / 2 + 18
			});
		}
		function swipeToEl( index ){
			$swipeEls.stop(false , false).animate({
				marginLeft : - index * winWidth
			} , 500 , 'swing' , function(){
				$right[ swipeIndex >= swipeLength - 1 ?
					'hide' : 'show']();
				$left[ swipeIndex == 0 ?
					'hide' : 'show']();

				resetBtnTop( index );
			});
		}
		$items.find('img').eq(swipeIndex)
			.load(function(){
				$('.session3').show();
				resetBtnTop( swipeIndex );
				$('.session3').hide();
			});
		$(window).resize(function(){
			winWidth = $(this).width();
			$swipeEls.width( winWidth* swipeLength);
			$items.width( winWidth );
		});
	})();

  	$('.baoming').click(function(e){
		e.preventDefault();
		$('#session4_1').fadeOut(300);
		$('#session4_2').delay(300).fadeIn(300);
	});

	$('#agree_doc').fancybox({
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
				closeClick : true,  // if true, fancyBox will be closed when user clicks on the overlay
				speedOut   : 200,   // duration of fadeOut animation
				showEarly  : true,  // indicates if should be opened immediately or wait until the content is ready
				css        : {'background':'rgba(0,0,0,0.8)'},    // custom CSS properties
				locked     : true   // if true, the content will be locked into overlay
			}
		},
		afterShow:function(){
			$('#intro_text_wrap').jScrollPane({autoReinitialise:true});
		}

	});


	var isEn = $('body').hasClass('en');
	var _str_user_name="请输入姓名";
	var _str_chexing="请选择您感兴趣的车型";
	var _str_baoshijiezhongxin="请选择您感兴趣的保时捷中心";
	var _str_phone='请输入手机号码';
	var _str_number= '请输入正确的11位手机号码';
	var _str_rangelength= '请输入正确的11位手机号码';
	var _str_email="请输入邮箱";
	var _str_agree="请阅读保密政策";
	if(isEn){
		var _str_user_name =" Please enter your name ";
		var _str_chexing = "Please select the model you are interested in";
		var _str_baoshijiezhongxin = "Please select you are interested in Porsche Center";
		var _str_phone = "Please enter your mobile number";
		var _str_number = "Please enter a correct phone number 11";
		var _str_rangelength = "Please enter a correct phone number 11";
		var _str_email = "Please enter the mailbox";
		var _str_agree = "Please read the Privacy Policy";
	}
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
			user_name: _str_user_name,
			chexing: _str_chexing,
			baoshijiezhongxin: _str_baoshijiezhongxin,
			phone:{required:_str_phone ,number: _str_number ,rangelength: _str_rangelength},
			email: _str_email,
			agree: _str_agree
		},
		submitHandler: function (form) {

			$(form).ajaxSubmit(function () {
				$('#session4_2').fadeOut(300);
				$('#session4_3').delay(300).fadeIn(300);
				return false;
			});
			return false;


		}
	});

});



function windowResize(){
	$('.video1').height($(window).width()*0.62);
	var containerWidth = $(window).width();
	var containerHeight = $(window).height();
	var sliderWidth = parseInt(containerWidth*(1/3))+1;
	var sliderImgWidth = parseInt(containerWidth*0.64);
	var sliderImgHeight = parseInt(sliderImgWidth * 0.617);
	var imageLeft = (sliderImgWidth - sliderWidth)/2;
	$(".slider_wrap img").width(sliderImgWidth);
	$(".slider_wrap img").height(sliderImgHeight);
	$(".slider_wrap img").css({'left':-imageLeft});
	$(".slider_wrap").height(sliderImgHeight);
	$(".slider_wrap").width(sliderWidth);
	//$("#accordion_slider").height(sliderImgHeight);


	//$("#accordion_slider").height(sliderImgHeight);

	var formHeight = $('.section4 .content_wrap').height();
	var formMargin = (containerHeight - formHeight)/2;
	formMargin = formMargin < 0 ? 0 : formMargin;

	var sliderWidthOffset2 = parseInt(($('#accordion_slider').width() - sliderImgWidth)*0.5);
	$("#slider2").css({'left':sliderWidthOffset2,'width':sliderImgWidth});
	$(".slider_wrap img").css({'left':0});
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