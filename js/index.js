	$(function(){
	$(".leftNav>li").hover(function(){
		var index = $(this).index();
		console.log(index);
		$(this).find("div").stop().slideToggle();
	});
	 $("#qx").change(function(){
	 	$("#fx").prop("checked",false);
	 	var flage =$(this).is(":checked");
	 	$(".list_item_box ul>li input[type=checkbox]").each(function(){
	 	$(this).prop("checked",flage);
	 	})
	 });
	 $("#fx").change(function(){
		$("#qx").prop("checked",false);
	 	$(".list_item_box ul>li input[type=checkbox]").each(function(){
	 	$(this).prop("checked",false);
	 	})
	 });
	$(".searchTxt").click(function(){
		$(".list").toggle()
	});
	$(".drop span i").mouseenter(function(){
		var index = $(this).index();
		$(".c_list_scroll>ul").eq(index).css("display","block").siblings().css("display","none");
		$(this).addClass("active").siblings().removeClass("active");
		
	});
	var 
		 index = 0 ;
		Swidth = 384 ;
		 timer = null ;
		
		function NextPage()
		{	
			if(index>4)
			{
				index = 0 ;
			}
			$(".drop span i").eq(index).addClass("active").siblings().removeClass("active");
			$(".c_list_scroll").stop(true, false).animate({left: -index*Swidth+"px"},600)		
		}
		
		function PrevPage()
		{	
			if(index<0)
			{
				index = 4 ;
			}
			$(".drop span i").eq(index).addClass("active").siblings().removeClass("active");
			
			$(".c_list_scroll").stop(true, false).animate({left: -index*Swidth+"px"},600)		
		}
		
		$(".drop span i")
		$(".next").click(function(){
			 index++ ;
			 NextPage();		
		});
		$(".prev").click(function(){
			 index-- ;
			 PrevPage();
		});

	
	function Tab(tab1, comTiTaLi, Items) {
		var obj = $(tab1);
		obj.find(comTiTaLi).on("mouseover", function() {
			$(this).addClass("active").siblings().removeClass("active");
			obj.find(Items).removeClass("show");
			obj.find(Items).eq($(this).index()).addClass("show");
		})
	}



	var oBox = $('.leftBox');
	oBox.each(function(i, e) {
		Tab(e, '.comTitle>.comTitle_tabs>li', $('.comTitle').next('.tabs').find('.tabs_item'));
		Tab(e, '.contNav>.contNav_item', $('.titBg').next('.tabs').find('.tabs_item'));
//		Tab(e,'comTitle_tabs li'),$('.comList');
	})




})


