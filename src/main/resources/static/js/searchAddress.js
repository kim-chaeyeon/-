$(document).ready(function() {
    $('#searchAddress').click(function(event) {
        event.preventDefault();  // 폼이 자동으로 제출되지 않도록 합니다.

        var query = $('#restaurantName').val(); // 사용자가 입력한 식당 이름을 쿼리로 사용

        if (!query) {
            alert("식당 이름을 입력해주세요.");
            return;
        }

        // 이전 검색 결과 초기화
        $('#addressList').empty();

        // 네이버 지역 검색 API 호출
        $.ajax({
            url: '/naver/search',
            type: 'GET',
            data: {
                query: query
            },
            success: function(data) {
                var addressList = $('#addressList');

                // 검색 결과 반복 처리
                data.items.forEach(function(item) {
                    var addressItem = $('<div></div>')
                        .text(item.address) // 주소 텍스트 표시
                        .attr('data-address', item.address) // 주소를 데이터 속성으로 저장
                        .addClass('address-item'); // 스타일링을 위한 클래스 추가

                    // 주소를 클릭하면 선택된 주소를 입력 필드에 설정
                    addressItem.click(function() {
                        var selectedAddress = $(this).attr('data-address');
                        $('#address').val(selectedAddress); // 선택된 주소를 입력 필드에 설정
                    });

                    // 주소 항목을 주소 목록 컨테이너에 추가
                    addressList.append(addressItem);
                });
            },
            error: function() {
                // API 호출 실패 시 처리
                alert('주소 검색에 실패했습니다.');
            }
        });
    });
});
