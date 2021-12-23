$.fn.sagTikMenu = function (ayar,efektTip,efektHiz,menu) {
    var ayar = $.extend({
		liste : "<span>Secenekler eklenmedi</span>",
		efektTip : "blind",
		efektHiz : 1,
		menu : "acik"
    }, ayar);
   $(this).bind("contextmenu", function (t) {
		$(window).blur(function(){
			 $("#sagTikMenu").remove();
		});
		if(ayar.menu == 'acik'){
					$("#sagTikMenu").remove();
			var n = t.pageY;
			var r = t.pageX;
			var menu_width = 165;
			var sayfa_width = $("html,body").width();
			var toplam_width = r + menu_width;
			if(toplam_width > sayfa_width){	
				$("body").append('<div id="sagTikMenu" style="display: none">' + ayar.liste + "</div>");
				menu_width = menu_width + 1;
				r = r - menu_width;
				$("#sagTikMenu").css("top", n);
				$("#sagTikMenu").css("left", r);
				$("#sagTikMenu").show(ayar.efektTip, ayar.efektHiz);
				$("#sagTikMenu a:last").css("border-bottom", "0");
				$("#sagTikMenu li").hover(function(){	
					var uller = $("ul", this).length;
					if(uller > 0){
						$("ul", this).stop().show(180);
						$("ul",this).css("left","-142px");
						$("a:first", this).addClass("sagTikMenuaktif");
					}
				}, function(){
					$("ul", this).hide();
					$("a:first", this).removeClass("sagTikMenuaktif");});}else{
			$("body").append('<div id="sagTikMenu" style="display: none">' + ayar.liste + "</div>");
			$("#sagTikMenu").css("top", n);
			$("#sagTikMenu").css("left", r);
			$("#sagTikMenu").show(ayar.efektTip, ayar.efektHiz);
			$("#sagTikMenu a:last").css("border-bottom", "0");
			$("#sagTikMenu li").hover(function(){
				var uller = $("ul", this).length;
				if(uller > 0){
					$("ul", this).stop().show("drop", 250);
					$("a:first", this).addClass("sagTikMenuaktif");}
}, function(){
				$("ul", this).hide();
				$("a:first", this).removeClass("sagTikMenuaktif");});	}
		return false;	}else if (ayar.menu == 'kapali'){
				return false;}});
    $("html,body").click(function () {
        $("#sagTikMenu").remove();
    });
	$("html,body").bind("contextmenu", function () {
		var asd = $("#sagTikMenu").lenght;
		if(asd > 0){
			$("#sagTikMenu").remove();} });}
$(function(){	
	$("html,body").sagTikMenu({
		liste : '<li><a> Copyrigth 2021 </a></li>',
		efektTip : 'bounce',
		efektHiz : 350});$("#a").sagTikMenu({
		liste: '<li><a href="#">Kopyala</a></li>'});});