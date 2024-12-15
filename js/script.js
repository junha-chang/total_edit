var image = $("#scroll-image"); // 수정: 대상 요소를 이미지로 변경
var range = 200;

$(window).on("scroll", function () {
  var scrollTop = $(this).scrollTop(), // 현재 스크롤 위치
    height = image.outerHeight(), // 이미지 높이 가져오기
    offset = height / 2, // 이미지 중앙값
    calc = 1 - (scrollTop - offset + range) / range; // 투명도 계산

  image.css({ opacity: calc }); // 계산된 값으로 투명도 설정

  if (calc > "1") {
    image.css({ opacity: 1 }); // 최대 투명도 제한
  } else if (calc < "0") {
    image.css({ opacity: 0 }); // 최소 투명도 제한
  }
});
