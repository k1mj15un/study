// 스와이퍼 인스턴스를 생성합니다.
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',  // 페이지네이션 요소를 설정합니다.
    effect: 'coverflow',               // 스와이퍼 효과로 'coverflow'를 사용합니다.
    grabCursor: true,                  // 마우스 커서를 그랩 스타일로 변경합니다.
    centeredSlides: true,              // 활성 슬라이드를 가운데에 표시합니다.
    loop: true,                        // 무한 반복 모드를 활성화합니다.
    paginationClickable: true,         // 페이지네이션 버튼을 클릭할 수 있게 합니다.
    slidesPerView: 2,                  // 한 번에 두 개의 슬라이드를 표시합니다.

    // coverflow 효과에 대한 설정
    coverflow: {
        rotate: 0,                     // 슬라이드 회전 각도를 설정합니다.
        stretch: 300,                  // 슬라이드 사이의 거리를 설정합니다.
        depth: 100,                    // 슬라이드의 Z축 거리(깊이)를 설정합니다.
        modifier: 1,                   // 효과의 수정자 값을 설정합니다.
        slideShadows: false            // 슬라이드 그림자를 비활성화합니다.
    }
});

// tab
$('#section7 .btn li').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');

    var tab = $(this).attr('data-alt');
    $('#section7 .tabs div').removeClass('active');
    $('#' + tab).addClass('active');
});