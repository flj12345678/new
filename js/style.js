/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-11-30 11:32:56
 * @version $Id$
 */
    /*从底部回到顶部*/
      	$(document).ready(
			function(){
				$(window).scroll(
					function(){
						var A = $(window).scrollTop();
						if(A > 50){
							$(".to-top").stop().animate({"bottom":40},800);
						}else{
							$(".to-top").stop().animate(function(){
								$(".to-top").css("bottom",50);
							});
						}
					}
				);
				$(".to-top").click(
					function(){
						$("html,body").animate({"scrollTop":0},800);
					}
				);
			}
		);

	/*设置歌词收起展开，并且二维码的变化随之变化*/
		$(document).ready(function() {
			$('.right .chesong').click(function(){
				$('.right .jScrollbar').css('display', 'block');
				$('.right .chesong').hide();
				$('.right .checlose').css('display', 'block');
			
			  if($(".right .jScrollbar").is(":visible")==true){
			  	$('.jScrollbar').jScrollbar();
			    $('.right .checlose').click(function(){
                $('.right .jScrollbar').hide();
                $('.right .chesong').css('display', 'block');
                $('.right .checlose').css('display', 'none');
		         });
		      }
	       });
});
	
	/*菜单栏的导航效果	*/
		var current = $(".menu .current");
		$(".menu li").click(function(){
		    current.removeClass("current");
		    $(this).addClass("current");
		    current = $(this);
		});



    /* 使自定义滚动条和页面滚动条不一起滚动*/
	    $(document).ready(function(e) {
	    	$('.right .jScrollbar').mouseover(function(){
	    		/*$(document.body).css('overflow-y', 'hidden');*/
	    		e.preventDefault();
	    	});
	   });

 /* 左侧导航搜索框*/
       $(document).ready(function( ) {
		   var but= $(".left li button")
	       but .click(function(){
		       $(".left div").eq(0).toggle();
	      });
		   /*
		   but.blur(function(){
			   $(".left div").eq(0).hide();
		   });*/
      });


       $(document).ready(function( ) {
		   var inp=$(".left div").eq(0).find("input");
	      inp .click(function(){
	     	$(".left div").eq(1).toggle();
	     });
		 inp.blur(function(){
			   $(this).parent().parent().hide();
			   $(".left div").eq(1).hide();
		   });
      });

    $(document).ready(function( ) {
	 	var edin= $(".edtxt input");
	     edin .click(function(){
		   $(".edtxt .popchoose").toggle();
	    });
		edin.blur(function(){
			$(".edtxt .popchoose").hide();
		});
     });
/* 左右栏自适应宽度
$(document).ready(function(e) {
	var winResize = function () {
		var left = $(".left");
		var right = $(".right");
		var w = $(window).width();
		var lw = left.width();
		var rw = right.width();
		var mw = 1280;

		if (w > mw) {
			left.css("left", "" + (w - mw) / 2 + "px");
		}
		else {
			left.css("left", "0");
		}

		if (w > mw) {
			right.css("right", "" + (w - mw) / 2 + "px");
		}
		else {
			right.css("right", "0");
		}

	};

	$(window).resize(winResize);
	winResize();
});*/

/*上传照片*/
    $(document).ready(function( ) {
	      var addimg= $(".add p");
		  var close=$(".upload").find("span");
		    addimg.click(function(){
	    	$(".upload").toggle();
	  });
		close.click(function(){
			$(".upload").hide();
      });
	});

