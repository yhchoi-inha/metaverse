$(function(){
	var wayToGreen = $('section#wayToGreen');
	var wtgOffsetTop;
	var wtgMask = wayToGreen.find('.way_to_green');

	var bePro = $('section#bePro');
	var beProOffsetTop;
	var beProSct = bePro.find('.be_pro_wrap');
	var beProbg = bePro.find('.be_pro_bg');
	var proMngrTxt = bePro.find('.pro_mngr_txt');
	var beProBgOffsetTop;

	var beYourself = $('section#beYourself');
	var beYourselfOffsetTop;
	var beYourselfSct = beYourself.find('.be_yourself_wrap');
	var beYourselfbg = beYourself.find('.be_yourself_bg');
	var beYourselfTxt = beYourself.find('.yourself_txt');

	$(window).on('load resize orientationchange scroll', function() {
		var wtgOffsetTop = wayToGreen.offset().top;
		var myWin = $(window).scrollTop();
		var myWinH = $(window).height();
		var myWinHQrt = $(window).height() / 4;
		var wtgAniChkPnt = wtgOffsetTop + wtgMask.outerHeight() + (myWinHQrt);

		var beProOffsetTop = bePro.offset().top;

		/* way to green */
		// 1
		if (myWin <= 0) {
			console.log('----- 1-1 -----');
			wtgMask.find('img').css({
				'opacity':1,
				'backgroundColor': 'rgba(161,215,27,0)',
				'transform': 'scale(1)'
			});
			beProbg.removeClass('on');
			beYourselfbg.removeClass('on');
		}

		// 2
		if(myWin > wtgOffsetTop) {
			console.log('----- 1-2 -----');
			wtgMask.css({
				'position': 'fixed'
			});

		// 3
		} else if(myWin <= wtgOffsetTop) {
			console.log('----- 1-3 -----');
			wtgMask.css({
				'position': 'absolute'
			});
			wtgMask.find('img').css({
				'backgroundColor': 'rgba(161,215,27,1)'
			});
		}

		// 4
		if (myWin >= wtgOffsetTop + (myWinHQrt) && myWin <= wtgAniChkPnt * 1.44) {
			console.log('----- 1-4 -----');
			var dist = (myWin - wtgOffsetTop - (myWinHQrt))/((myWinHQrt) - wtgOffsetTop);
			console.log(dist);

			wtgMask.find('img').css({
				'opacity':1,
				'backgroundColor': 'rgba(161,215,27,0)',
				'transform': 'scale('+ (1 + (dist)) +')'
			});
			// mainHead.removeClass('on');

		// 5
		} else if (myWin == wtgOffsetTop) {
			console.log('----- 1-5 -----');
			wtgMask.find('img').css({
				'backgroundColor': 'rgba(161,215,27,1)'
			});
		
		// 6
		} else if (myWin >= wtgOffsetTop && myWin < myWinHQrt) {
			console.log('----- 1-6 -----');
			wtgMask.find('img').css({
				'opacity':1,
				'backgroundColor': 'rgba(161,215,27,0)',
				'transform': 'scale(1)'
			});
			// mainHead.removeClass('on');
		
		// 7
		} else if (myWin > wtgAniChkPnt * 1.44) {
			console.log('----- 1-7 -----');
			wtgMask.find('img').css({
				'opacity':0
			});
			// mainHead.addClass('on');
		}

		/* // way to green */


		/* be professional */
		if (myWin >= beProOffsetTop) {
			beProSct.css({
				'position':'fixed',
				'top': '0'
			});
			// mainHead.removeClass('on');
		} else if (myWin < beProOffsetTop) {
			beProSct.css({
				'position':'absolute',
				'top': ''
			});
		}

		if (myWin >= beProOffsetTop) {
			$('.be_pro_ttl_wrap').addClass('on');
		}

		if (myWin < beProOffsetTop || myWin >= beProOffsetTop + (myWinH * 2.27)) {
			$('.be_pro_ttl_wrap').removeClass('on');
		}

		if (myWin >= beProOffsetTop + (myWinH * 1.54)) {
			beProbg.addClass('on');
			$('.be_pro_bg').css({
				'top':'0',
				'transform':'scale(1)'
			});
			// mainHead.addClass('on');
		} else if (myWin >= beProOffsetTop && myWin < beProOffsetTop + (myWinH * 1.54)) {
			beProbg.removeClass('on');
			$('.be_pro_bg').css({
				'top':myWinH * 1.54,
				'transform':'scale(' + ((1 / (beProOffsetTop + (myWinH * 1.54))) * myWin) +')'
			});
		}

		if (myWin >= beProOffsetTop + (myWinH * 2.49)) {
			proMngrTxt.css({
				'position':'fixed',
				'top':'0'
			});
		} else {
			proMngrTxt.css({
				'position':'absolute',
				'top':'0'
			});
		}

		if (myWin >= beProOffsetTop + (myWinH * 2.702)) {
			proMngrTxt.find('ul').addClass('on');
		} else if (myWin < beProOffsetTop + (myWinH * 2.702)) {
			proMngrTxt.find('ul').removeClass('on');
		}
		/* // be professional */



	});
});