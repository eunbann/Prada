$(document).ready(function(){
  const ww = $(window).width();

  // aos 실행
  AOS.init();

  // header mouseenter
  $('header').mouseenter(function(){
    $(this).addClass('active');
  });
  $('header').mouseleave(function(){
    $(this).removeClass('active');
  });

  // sec-4 mouseenter
  $('.img-box .view').mouseenter(function(){
    $(this).addClass('active');
  });
  $('.img-box .view').mouseleave(function(){
    $(this).removeClass('active');
  });

  // sub-page 나오게 하기
  if(ww >= 800){
    $('.main-box .ham_btn').click(function(){
      $(this).toggleClass('active');
      $('.sub-page').toggleClass('active');
    });
  }else{
    $('.main-box .ham_btn').click(function(){
      $(this).toggleClass('active');
      $('.m-sub-page').toggleClass('active');
    });
  }

  

  // sub-page 배경전환
  $('.main-menu li').mouseenter(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    let changeImage = $(this).attr('data-image');

    $('.photo').css({
      backgroundImage : `url(${changeImage})`
    });
  });
  $('.main-menu li').mouseleave(function(){
    $(this).removeClass('active');
    $('.photo').css({
      backgroundImage : ''
    })
  });

  
  if(ww >= 1000){
    // sec-5 스와이퍼
    var swiper = new Swiper(".sec5-Swiper", {
      slidesPerView: 2, 
      spaceBetween: 40,
      grabCursor: true,
      centeredSlides:true,
      initialSlide: 0,
      loop: true,
      slideToClickedSlide: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }else{
    var swiper = new Swiper(".sec5-Swiper", {
      effect: "fade",
      slidesPerView: 1, 
      spaceBetween: 40,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      });
  
  }


  // scroll 이벤트
  $(window).scroll(function(){
    const sct = $(window).scrollTop();

    const banner = $('.banner').offset().top;
    const sec1 = $('.sec-1').offset().top;
    const sec2 = $('.sec-2').offset().top-300;
    const sec3 = $('.sec-3').offset().top-600;
    const sec4 = $('.sec-4').offset().top;
    const sec5 = $('.sec-5').offset().top;

    // header 배경 효과
    if(sct >= sec1){
      $('header').addClass('active');
    }else{
      $('header').removeClass('active');
    }

    // sec2 이벤트 효과
    if(sct >= sec2 && sct < sec3){
      $('.sec-2 .main-txt').addClass('on');
    }else{
      $('.sec-2 .main-txt').removeClass('on');
    }

    // sec4 고정 스크롤
    if(sct >= sec4 && sct < sec5){
      $('.main-1').css({
        'position': 'fixed',
        'top': 0,
        'left': 0,
      });
      $('.img-box').addClass('active');
    }else{
      $('.main-1').css({
        'position': 'static',
      });
      $('.img-box').removeClass('active');
    }

  });


  // sec2 마우스 휠 이벤트
    const leftObject = document.querySelector('.l-img');
    const rightObject = document.querySelector('.r-img');

    let scrollY = 0;

    window.addEventListener('wheel', (event) => {
        // 마우스 휠 이벤트에서 deltaY 값을 확인하여 스크롤 방향을 판단
        const deltaY = event.deltaY;

        if (deltaY > 0) {
            // 마우스 휠을 아래로 굴릴 때
            scrollY += 10; // 아래로 스크롤
        } else if (deltaY < 0) {
            // 마우스 휠을 위로 굴릴 때
            scrollY -= 10; // 위로 스크롤
        }

        // 왼쪽 객체는 아래로 이동, 오른쪽 객체는 위로 이동
        leftObject.style.transform = `translateY(${scrollY}px)`;
        rightObject.style.transform = `translateY(-${scrollY}px)`;
    });


  
});