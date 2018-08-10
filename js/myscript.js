$(document).ready(function(){
$('body').scrollspy({ target: '.navbar' });
	
$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
});
$('.counter-number').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 8000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
	$(window).scroll(function() {
		var headerHeight = $('#home header').height();
    if ($(document).scrollTop() > headerHeight) {
      $("header").addClass("container1 logo-color");
    } else {
      $("header").removeClass("container1 logo-color");
    }
  });
$(window).scroll(function(){

            if ($(this).scrollTop() > 100) {

                $('.scroll-up').fadeIn();

            } else {

                $('.scroll-up').fadeOut();

            }

        });

  

        $('.scroll-up').click(function(){

            $("html, body").animate({ scrollTop: 0 }, 600);

            return false;

        });
	
	$(".work > li").click( function (){
//		alert("worked");
		$(".work > li").removeClass('active');
		$(this).addClass('active');
		var cat= $(this).data("filter");
		$(".mix").hide();
		$(cat).show();
		
		
})
	
});