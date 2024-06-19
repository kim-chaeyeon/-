//var map;
//var marker;
//
//// 카카오맵 초기화 함수
//function initMap() {
//    var container = document.getElementById('map');
//    var options = {
//        center: new kakao.maps.LatLng(33.450701, 126.570667),
//        level: 3
//    };
//
//    map = new kakao.maps.Map(container, options);
//    marker = new kakao.maps.Marker();
//}
//
//// 선택된 주소로 지도 업데이트 함수
//function updateMap(address) {
//    var geocoder = new kakao.maps.services.Geocoder();
//
//    geocoder.addressSearch(address, function(result, status) {
//        if (status === kakao.maps.services.Status.OK) {
//            var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
//            map.setCenter(coords);
//            marker.setMap(null); // 기존 마커 제거
//            marker.setPosition(coords); // 새 위치에 마커 설정
//            marker.setMap(map); // 마커 표시
//        }
//    });
//}
//
//// 페이지 로드 시 지도 초기화
//$(document).ready(function() {
//    kakao.maps.load(function() {
//        initMap();
//    });
//});
