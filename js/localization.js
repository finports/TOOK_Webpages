$.lang = {};

$.lang.ko = {
	1: '다운로드',
	2: '특징',
	3: '쇼핑을 할수록' + '</br>' +'<span>' + '돈이 쌓이는 비밀!' + '</span>',
  4: '다양한 플랫폼을 통해 자산을 안전하고 빠르게 투자하도록 도와드립니다. 핀포츠에서 새로운 자산 관리를 경험하세요.',
  5: '더 보기 >',
  6: '편리하고 빠르게'+ '</br>' + '결제할 수 있는 '+'<span>'+'TOOK!'+'</span>',
  7: '이제, 카드나 지폐를 따로 준비하는 번거로움이 사라집니다!',
  8: '일상에서 만날 수 있는 간편한 서비스 TOOK! 여기저기서! 툭!',
  9: '핀 넘버',
  10: '단순해 보이지만! 누구도 뚫을 수 없는 보안으로 안심하세요!',
  11: '툭 결제',
  12: '거래 금액 충전 시 지급되는 보너스 포인트로 보다 넓은 혜택을 누려보세요!',
  13: '큐알 코드',
  14: '언제 어디서나 간편하게 QR 코드 스캔으로 결제하세요!',
  15: '질의응답',
  16: '궁금한 점은 언제나 연락주세요. help@finports.com',
  17: '이용약관',
  18: '개인정보취급방침',
  19: '이메일무단수신거부'
};

$.lang.en = {
	1: 'download',
	2: 'FEATURES',
	3: 'The secret of making ' + '<span>' + 'more money' + '</span>' + ' as ' + '<span>'+ 'you shop!' +'</span>',
  4: 'FinPorts is here to help you invest your assets safe and quickly through a variety of platforms. Experience new artifial intelligence asset management service in FinPorts.',
  5: 'VIEW MORE >',
  6: 'A convenient and quick to pay,'+'<span>'+'TOOK!'+'</span>' ,
  7: 'From now on, you don\'t need to prepare credit card or money to pay!',
  8: 'Convenient transactions, everyday TOOK!',
  9: 'PIN',
  10: 'Simple looks, impenetrable security!',
  11: 'TOOK Pay',
  12: 'Get better benefits with bonus points for charging your deal!',
  13: 'QR Code',
  14: 'Pay by scanning a QR code from a mobile app anytime, anywhere!',
  15: 'Q & A',
  16: 'Ask questions anytime. '+'</br>'+' help@finports.com',
  17: 'Legal',
  18: 'Privacy',
  19: 'Unsubscribe from email'
};

$.lang.cn = {
	1: '下载',
	2: '特点',
	3: '越购物，越积钱的秘密！',
  4: '通过多样的平台，帮助您安全又快速的投资。使用FinPorts，享受全新的资产管理吧。',
  5: '更多 >',
  6: '可方便又快捷的结账的'+'<span>'+'TOOK!'+'</span>',
  7: '现在开始，另外准备银行卡与货币的麻烦将会消失！',
  8: '在日常中可预见的简便服务TOOK，随时随地！TOOK！',
  9: 'PIN',
  10: '虽然看起来单纯，但谁都无法突破的安保，请大家安心！',
  11: 'TOOK付款',
  12: '比起充值交易金额时支付的奖金积分,享受更多的优惠吧!',
  13: '二维码',
  14: '随时随地，简便的扫二维码付款！',
  15: '问答',
  16: '有好奇的问题，请随时联系我们吧'+'</br>'+'help@finports.com',
  17: '使用条例',
  18: '个人信息管理方针',
  19: '拒绝无端接收邮件'
};

/**
* setLanguage
* use $.lang[currentLanguage][languageNumber]
*/

function setLanguage(currentLanguage) {
  console.log('setLanguage', arguments);

  $('[data-langNum]').each(function() {
    var $this = $(this);
    $this.html($.lang[currentLanguage][$this.data('langnum')]);
  });
}

$('.language-item').click(function() {
  $('.language-item').addClass("active");
  $('.language-item').not($(this)).slideToggle().removeClass("active");

  if($(this).hasClass("active") == true) {
    console.log($(this).hasClass("active"));
    console.log($('.language-item').not($(this)).hasClass("active"));
    $(this).find("img").attr("src", $(this).find("img").attr("src").replace("-off.png", "-on.png"));
    var lang = $(this).data('lang');
    setLanguage(lang);
  }

  if($('#chinese').hasClass("active")) {
    var html = 'body';
    $(html).css("font-family", "noto sans");
  } else if($('#english').hasClass("active")) {
		var html = 'body';
		$(html).css("font-family", "Montserrat");
	}




  if($('.language-item').not($(this)).hasClass("active") == false) {
    console.log("ASDFASDF");
    // $('.language-item').not($(this)).find("img").attr("src", $('language-item').not($(this)).find("img").attr("src").replace("-on.png", "-off.png"));
  }
});
