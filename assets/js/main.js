/*
 jQuery;
 */

"use strict";


jQuery(document).ready(function ($) {

	$(window).load(function () {
		$(".loaded").fadeOut();
		$(".preloader").delay(1000).fadeOut("slow");
	});


 $(function(){ 
     var navMain = $("#bs-example-navbar-collapse-1");
     navMain.on("click", "a", null, function () {
         navMain.collapse('hide');
     });
 });

	jQuery('.scrollup').click(function () {
		$("html, body").animate({scrollTop: 0}, 2000);
		return false;
	});

	jQuery('.nav a').bind('click', function () {
		$('html , body').stop().animate({
			scrollTop: $($(this).attr('href')).offset().top - 80
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});
	
	
	jQuery(window).scroll(function () {
	  var top = jQuery(document).scrollTop();
		var height = 300;
	  //alert(batas);
	  
	  if (top > height) {
		jQuery('.navbar-fixed-top').addClass('menu-scroll');
	  } else {
	   jQuery('.navbar-fixed-top').removeClass('menu-scroll');
	  }
	});	
 // Scroll up 

    $(window).scroll(function(){
        if ($(this).scrollTop() > 600) {
            $('.scrollup').fadeIn('slow');
        } else {
            $('.scrollup').fadeOut('slow');
        }
    });
    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    }); 
 
 new WOW().init();

 //english();
 //$( "u#demo" ).text("dfbsdkfbkdjbcjdbncjdsbcdj")

});


function english(){

	//menu bar
	$( "a#nav1" ).text("Our kitchen");
	$( "a#nav2" ).text("Menu");
	$( "a#nav3" ).text("Gallery");
	$( "a#nav4" ).text("Franchise");
	$( "a#nav5" ).text("Contacts");

	//our kitchen
	$( "u#our_kitchen_h4" ).text("Our Kitchen");
	$( "p#our_kitchen_p1" ).text("Our kitchen is well equipped to treat all kinds of vegetarian, vegan and non vegetarian shawarma lovers. All our dishes are served with specially blended Arabian sauces and fresh vegetables.  We do care about vegans also. We are always ready to place your customized orders within a minimal fraction of time");
	$( "u#our_kitchen_h51" ).text("Available (our specialties) ");
	$( "span#our_kitchen_p3" ).text("- lentil and falafel bread shawarmas, plate shawarmas and snacks with vegan sauces.");
	$( "span#our_kitchen_p4" ).text("- cheese, lentil and falafel bread shawarmas, plate shawarmas and snacks with arabian sauces. ");
	$( "span#our_kitchen_p5" ).text("- beef and chicken bread shawarmas,plate shawarmas and snacks with arabian sauces. ");
	$( "h5#our_kitchen_h52" ).text("Now its your turn to stimulate your taste buds with Shawarmas!");
	$("b#b1").text("For vegans");
	$("b#b2").text("For vegetarians");
	$("b#b3").text("For non-vegetarians");

	//menu
	$("u#menu_h4").text("Menu");

	//contacts
	$("h3#contacts_h3").text("Contacts");
	$("h3#contact_h31").text("Our Timing");

	//gallery
	$("h4#gallery_h4").text("Gallery");

	//fransice
	$("h3#feature_h3").text("Franchise");
	$("h4#feature_h4").text("For franchise please contact: info@shawarmas.lv");
	$("p#feature_p").text("If you seek a rewarding opportunity and have the qualifications, drive and commitment to open your own Shawarmas restaurant, your first step is to contact us today. We will get back to you once we receive from you.");

	//day
	$("span#day1").text("Monday To Thursday");
	$("span#day2").text("Friday");
	$("span#day3").text("Saturday");
	$("span#day4").text("Sunday");
}

function latvian(){

	//menu bar
	$( "a#nav1" ).text("Mūsu virtuve");
	$( "a#nav2" ).text("Ēdienkarte");
	$( "a#nav3" ).text("Galerija");
	$( "a#nav4" ).text("Franšīzi");
	$( "a#nav5" ).text("kontakts");

	//our kitchen
	$( "u#our_kitchen_h4" ).text("Mūsu virtuve");
	$( "p#our_kitchen_p1" ).text("Mūsu virtuve ir ļoti plaša, lai iepriecinātu gan veģetāriešu, gan vegānu, kā arī ne veģetāriešu/vegānu šavermas mīļotājus. Visi mūsu piedāvātie ēdieni tiek pasniegti ar īpašām arābu mērcēm un svaigiem dārzeņiem. Mēs rūpējamies arī par vegāniem. Vienmēr esam gatavi pieņemt un apkalpot jūsu pasūtījumus maksimāli ātri.");
	$( "u#our_kitchen_h51" ).text("Piedāvājumā(our specialities)");
	$( "span#our_kitchen_p3" ).text("- lēcu un falafelu maizes šauarma un uzkodas ar vegānu mērcēm.");
	$( "span#our_kitchen_p4" ).text(" - siers, lēcu un falafelu maizītes šauarma un uzkodas ararābu mērcēm.");
	$( "span#our_kitchen_p5" ).text(" - liellopu gaļas un vistas gaļas kārtainās šauarmas un uzkodas ar arābu mērcēm.");
	$( "h5#our_kitchen_h52" ).text("Tagad ir jūsu kārta izbaudīt garšu buķeti ar Shawarmas!");
	$("b#b1").text("Vegāniem ");
	$("b#b2").text("Veģetāriešiem");
	$("b#b3").text("Ne-veģetāriešiem");

	//menu
	$("u#menu_h4").text("Ēdienkarte");

	//contacts
	$("h3#contacts_h3").text("kontakts");
	$("h3#contact_h31").text("Mūsu laiks");

	//gallery
	$("h4#gallery_h4").text("Galerija");

	//fransice
	$("h3#feature_h3").text("Franšīzi");
	$("h4#feature_h4").text("Par franšīzi lūdzu kontaktēties pa tālruni: info@shawarmas.lv");
	$("p#feature_p").text("Ja jūs meklējat izdevīgu iespēju un iegūstat kvalifikāciju, vadīt un apņemties atvērt savu Shawarmas restorānu, pirmais solis ir sazināties ar mums šodien. Mēs atgriezīsimies pie jums, kad saņemsim no jums.");

	//day
	$("span#day1").text("Pirmdienas Līdz Ceturtdienai");
	$("span#day2").text("Piektdiena");
	$("span#day3").text("Sestdiena");
	$("span#day4").text("Svētdiena");
}
