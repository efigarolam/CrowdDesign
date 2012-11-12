function unbind_hover_h1() {
	$('h1').unbind('mouseenter mouseleave');
}

function set_hover_by_section(color_section, active_section) {
	if(color_section != '')
	{
		$('h1').not(active_section).hover(function() {
			$(this).css('color', color_section);
		}, function() {
			$(this).css('color', '#6e6c67');
		});
	} else {
		$('h1').hover(function() {
			$(this).css('color', '#332568');
		}, function() {
			$(this).css('color', '#6e6c67');
		});
	}
}

function resetLogo() {
	$('header h1').removeClass('hobby_logo mistery_logo sample_logo thecrowd_logo');
}

function changeLogo(logo_class){
	$('header h1').addClass(logo_class);
}

function resetBackground() {
	$('#bg_default').removeClass('bg_samplework bg_misterybox bg_hobbystorage bg_thecrowd');
}

function changeBackground(background_class){
	$('#bg_default').addClass(background_class);
}

function resetFooter() {
	$('footer p').css('color', '#000');
}

function changeFooter() {
	$('footer p').css('color', '#fff');
}

function getRandom() {
	 return Math.round(Math.random()*3);
}

$(document).ready(function() {	
	var $samplework_slider = $('#sample_work_slider').bxSlider({
	  displaySlideQty: 3,
	  moveSlideQty: 1,
	  pager:true,
	});	
	var $hobbystorage_slider = $('#hobby_storage_slider').bxSlider({
	  displaySlideQty: 1,
	  moveSlideQty: 1,
	  pager:true, 
	});
	var $misterybox_slider = $('#mistery_box_slider').bxSlider({
	  displaySlideQty: 2,
	  moveSlideQty: 1,
	  pager:true, 
	});

	var $thecrowd_bodies_slider = $('#the_crowd_slider_bodies').bxSlider({
	  displaySlideQty: 4,
	  moveSlideQty: 1,
	  controls: false,
	  easing: 'easeOutElastic',
	  speed: 1000,
	});

	var $thecrowd_legs_slider = $('#the_crowd_slider_legs').bxSlider({
	  displaySlideQty: 4,
	  moveSlideQty: 1,
	  controls: false,
	  easing: 'easeOutElastic',
	  speed: 1000,
	});

	var hiddable = $('.hiddable');
	var thecrowdteam = [$('.thecrowd_head_karla'), $('.thecrowd_head_fabian'), $('.thecrowd_head_norberto'), $('.thecrowd_head_haro')];

	$('#the_crowd h1').click(function() {
		$('h1').css('color', '#6e6c67');
		unbind_hover_h1();
		if($('#the_crowd h1').next().is(':hidden')) {
			$(this).css('color', '#dadada');
			set_hover_by_section('#dadada', this);
			hiddable.hide();
			$(this).next().show('blind', {}, 850, function()
			{
				$('html,body').animate({
					scrollTop: $("#the_crowd").offset().top
				}, 'fast');	
			});
			$thecrowd_bodies_slider.reloadShow();
			$thecrowd_legs_slider.reloadShow();
			
			$('.the_crowd_random_slide').click(function() {
				random_slide = getRandom();
				while ($thecrowd_bodies_slider.getCurrentSlide() === random_slide)
				{
					random_slide = getRandom();
				}
			    $thecrowd_bodies_slider.goToSlide(random_slide);
			    random_slide = getRandom();
			    while ($thecrowd_legs_slider.getCurrentSlide() === random_slide)
				{
					random_slide = getRandom();
				}
			    $thecrowd_legs_slider.goToSlide(random_slide);
			    return false;
			});

			$('.show_details_karla').live('click', function() {
				thecrowdteam[0].flip({
					direction:'lr',
					speed: 200,
					content:$('.thecrowd_head_hidden_karla'),
					onBefore: function() {
						thecrowdteam[0].addClass('thecrowd_head_small_karla');				
					},
					onEnd: function() {
						thecrowdteam[0].append('<a class="hide_details_karla" href="#"></a>');
					}
				});
				
				return false;
			});

			$('.hide_details_karla').live('click', function() {
				thecrowdteam[0].revertFlip().removeClass('thecrowd_head_small_karla');
				return false;
			});

			$('.show_details_fabian').live('click', function() {
				thecrowdteam[1].flip({
					direction:'lr',
					speed: 200,
					content:$('.thecrowd_head_hidden_fabian'),
					onBefore: function() {
						thecrowdteam[1].addClass('thecrowd_head_small_fabian');						
					},
					onEnd: function() {
						thecrowdteam[1].append('<a class="hide_details_fabian" href="#"></a>');
					}
				});
				
				return false;
			});

			$('.hide_details_fabian').live('click', function() {
				thecrowdteam[1].revertFlip().removeClass('thecrowd_head_small_fabian');
				return false;
			});

			$('.show_details_norberto').live('click', function() {
				thecrowdteam[2].flip({
					direction:'lr',
					speed: 200,
					content:$('.thecrowd_head_hidden_norberto'),
					onBefore: function() {
						thecrowdteam[2].addClass('thecrowd_head_small_norberto');				
					},
					onEnd: function() {
						thecrowdteam[2].append('<a class="hide_details_norberto" href="#"></a>');
					}
				});
				
				return false;
			});

			$('.hide_details_norberto').live('click', function() {
				thecrowdteam[2].revertFlip().removeClass('thecrowd_head_small_norberto');
				return false;
			});

			$('.show_details_haro').live('click', function() {
				thecrowdteam[3].flip({
					direction:'lr',
					speed: 200,
					content:$('.thecrowd_head_hidden_haro'),
					onBefore: function() {
						thecrowdteam[3].addClass('thecrowd_head_small_haro');				
					},
					onEnd: function() {
						thecrowdteam[3].append('<a class="hide_details_haro" href="#"></a>');
					}
				});
				
				return false;
			});

			$('.hide_details_haro').live('click', function() {
				thecrowdteam[3].revertFlip().removeClass('thecrowd_head_small_haro');
				return false;
			});
			
			resetLogo();
			changeLogo('thecrowd_logo');
			resetBackground();
			changeBackground('bg_thecrowd');
			changeFooter();
		} else {
			set_hover_by_section('', null);
			hiddable.hide();
			$(this).next().hide('blind', {}, 850, function()
			{
				$('html,body').animate({
					scrollTop: 0
				}, 0);	
			});
			resetBackground();
			resetLogo();
			resetFooter();
		}
	});
			
	$('#sample_work h1').click(function() {
		$('h1').css('color', '#6e6c67');
		unbind_hover_h1();
		if($('#sample_work h1').next().is(':hidden')) {
			$(this).css('color', '#fff');
			set_hover_by_section('#fff', this);
			hiddable.hide();
			$(this).next().show('blind', {}, 850, function()
			{
				$('html,body').animate({
					scrollTop: $("#the_crowd").offset().top
				}, 'fast');	
			});
			$samplework_slider.reloadShow();
			$('.bx-pager').addClass('bx-pager2');
			resetLogo();
			changeLogo('sample_logo');
			resetBackground();
			changeBackground('bg_samplework');
			resetFooter();

			$('#sample_work_slider li a').colorbox({inline:true, width:"1080px", height:"90%", close:""});

		} else {
			set_hover_by_section('', null);
			hiddable.hide();
			$(this).next().hide('blind', {}, 850, function()
			{
				$('html,body').animate({
					scrollTop: 0
				}, 0);	
			});
			resetLogo();
			resetBackground();
		}	
	});
	
	$('#mistery_box h1').click(function() {
		$('h1').css('color', '#6e6c67');
		unbind_hover_h1();
		if($('#mistery_box h1').next().is(':hidden')) {
			$(this).css('color', '#ff8061');
			set_hover_by_section('#ff8061', this);
			hiddable.hide();
			$(this).next().show('blind', {}, 850, function()
			{
				$('html,body').animate({
					scrollTop: $("#hobby_storage").offset().top
				}, 'fast');	
			});
			$misterybox_slider.reloadShow();
			resetLogo();
			changeLogo('mistery_logo');
			resetBackground();
			changeBackground('bg_misterybox');
			resetFooter();
		} else {
			set_hover_by_section('', null);
			hiddable.hide();
			$(this).next().hide('blind', {}, 850, function()
			{
				$('html,body').animate({
					scrollTop: 0
				}, 0);	
			});
			resetLogo();
			resetBackground();
		}
	});
	
	$('#hobby_storage h1').click(function() {
		$('h1').css('color', '#6e6c67');
		unbind_hover_h1();
		if($('#hobby_storage h1').next().is(':hidden')) {
			$(this).css('color', '#2f2f2f');
			set_hover_by_section('#2f2f2f', this);
			hiddable.hide();
			$(this).next().show('blind', {}, 850, function()
			{
				$('html,body').animate({
					scrollTop: $("#make_contact").offset().top
				}, 'fast');	
			});
			$hobbystorage_slider.reloadShow();
			resetLogo();
			changeLogo('hobby_logo');
			resetBackground();
			changeBackground('bg_hobbystorage');
			resetFooter();
		} else {
			set_hover_by_section('', null);
			hiddable.hide();
			$(this).next().hide('blind', {}, 850, function()
			{
				$('html,body').animate({
					scrollTop: 0
				}, 0);	
			});
			resetLogo();
			resetBackground();
		}
	});
});
