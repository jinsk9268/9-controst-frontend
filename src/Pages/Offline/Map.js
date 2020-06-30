import React, { Component } from 'react';
import './Offline.scss';
class Map extends Component {
    constructor(props){
        super(props);

        this.state = {
            location : ""
        }

        
    }


    componentDidMount() {
        const script = document.createElement('script');
        script.async = true;
        script.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=76a449f1dae5315175afe4994035d80d&libraries=LIBRARY";
        script.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=76a449f1dae5315175afe4994035d80d&libraries=services";
        script.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=76a449f1dae5315175afe4994035d80d&autoload=false";
        document.head.appendChild(script);
        script.onload = () => {
            const { kakao } = window;
            kakao.maps.load(() => {
                
            //     let el = document.getElementById('map');
            //     let map = new kakao.maps.Map(el, {
            //         center: new kakao.maps.LatLng(37.504481, 127.049007)
            //     });
            //     var zoomControl = new kakao.maps.ZoomControl();
            //     map.addControl(zoomControl, kakao.maps.ControlPosition.BOTTOMRIGHT);    //줌컨트롤을 오른쪽 밑에 배치
            //     var markerPosition  = new kakao.maps.LatLng(37.504481, 127.049007);     //마커 위치

            //     var imageSrc = 'https://d2qrvi4l1nprmf.cloudfront.net/images/service/mobile/offline/is_unselected_mark/trost_unselected.png', // 마커이미지의 주소입니다    
            //     imageSize = new kakao.maps.Size(30, 30), // 마커이미지의 크기입니다
            //     imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
                  
            //     // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
            //     var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
            //         markerPosition = new kakao.maps.LatLng(37.504481, 127.049007); // 마커가 표시될 위치입니다
                

            //     // 마커를 생성합니다
            //     var marker = new kakao.maps.Marker({
            //         position: markerPosition,
            //         image : markerImage
            //     });

            //     // 마커가 지도 위에 표시되도록 설정합니다
            //     marker.setMap(map);

            //     kakao.maps.event.addListener(marker, 'click', function() {
            //         var markerImage = new kakao.maps.MarkerImage(
            //             'https://d2qrvi4l1nprmf.cloudfront.net/images/service/mobile/offline/is_selected_mark/trost_selected.png',
            //             new kakao.maps.Size(40, 60), new kakao.maps.Point(35, 100));
            //         marker.setImage(markerImage);
            //      });
      
            //     // var places = new kakao.maps.services.Places();
            //     // var callback = function(status, result) {
            //     //     if (status === kakao.maps.services.Status.OK) {
            //     //         alert("검색된 음식점의 갯수는 " +  result.places.length + "개 입니다.");
            //     //     }
            //     // };

            //     // places.categorySearch('FD6', callback, {
            //     //     location: new kakao.maps.LatLng(33.450701, 126.570667)
            //     // });
            // });
                
                var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
                    mapOption = { 
                        center: new kakao.maps.LatLng(37.504481, 127.049007), // 지도의 중심좌표
                        level: 5 // 지도의 확대 레벨
                    };

                var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
                

                // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
                var zoomControl = new kakao.maps.ZoomControl();
                map.addControl(zoomControl, kakao.maps.ControlPosition.BOTTOMRIGHT);
                // 마커를 표시할 위치와 title 객체 배열입니다 
                var positions = [
                    {
                        title: this.state.location[0]["center"], 
                        latlng: new kakao.maps.LatLng(this.state.location[0]["coordinate"].split(",")[0], this.state.location[0]["coordinate"].split(",")[1]),
                        unSelectedImg : "https://d2qrvi4l1nprmf.cloudfront.net/images/service/mobile/offline/is_unselected_mark/trost_unselected.png",
                        SelectedImg : "https://d2qrvi4l1nprmf.cloudfront.net/images/service/mobile/offline/is_selected_mark/trost_selected.png"
                    },
                    {
                        title: this.state.location[1]["center"],
                        latlng: new kakao.maps.LatLng(this.state.location[1]["coordinate"].split(",")[0], this.state.location[1]["coordinate"].split(",")[1]),
                        unSelectedImg : "https://d2qrvi4l1nprmf.cloudfront.net/images/service/mobile/offline/is_unselected_mark/A_unselected.png",
                        SelectedImg : "https://d2qrvi4l1nprmf.cloudfront.net/images/service/mobile/offline/is_selected_mark/A_selected.png"
                    },
                    {
                        title: this.state.location[2]["center"],
                        latlng: new kakao.maps.LatLng(this.state.location[2]["coordinate"].split(",")[0], this.state.location[2]["coordinate"].split(",")[1]),
                        unSelectedImg : "https://d2qrvi4l1nprmf.cloudfront.net/images/service/mobile/offline/is_unselected_mark/B_unselected.png",
                        SelectedImg : "https://d2qrvi4l1nprmf.cloudfront.net/images/service/mobile/offline/is_selected_mark/B_selected.png"
                    },
                    {
                        title: this.state.location[3]["center"],
                        latlng: new kakao.maps.LatLng(this.state.location[3]["coordinate"].split(",")[0], this.state.location[3]["coordinate"].split(",")[1]),
                        unSelectedImg : "https://d2qrvi4l1nprmf.cloudfront.net/images/service/mobile/offline/is_unselected_mark/C_unselected.png",
                        SelectedImg : "https://d2qrvi4l1nprmf.cloudfront.net/images/service/mobile/offline/is_selected_mark/C_selected.png"
                    }
                ];

                // 마커 이미지의 이미지 주소입니다
                    
                    
                // 마커 이미지의 이미지 크기 입니다
                var imageSize = new kakao.maps.Size(30, 30); 
                
                // 마커 이미지를 생성합니다    
                
                // 마커를 생성합니다
                let marker = {};
                for(let i = 0; i < positions.length; i++){
                    var markerImage = new kakao.maps.MarkerImage(positions[i]["unSelectedImg"], imageSize); 
                    marker[i] = new kakao.maps.Marker({
                        map: map, // 마커를 표시할 지도
                        position: positions[i].latlng, // 마커를 표시할 위치    
                        title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                        image : markerImage // 마커 이미지 
                    });
                
                // var markerOne = new kakao.maps.Marker({
                //     map: map,
                //     position : positions[2].latlng,
                //     title: positions[2].title,
                //     image: markerImage
                // });
                    kakao.maps.event.addListener(marker[i], 'click', function() {
                        for(let j in positions){            //이미지 unSelect로 초기화, z-index 초기화
                            var disableImage = new kakao.maps.MarkerImage(
                                positions[j]["unSelectedImg"],
                                new kakao.maps.Size(30, 30));
                            marker[j].setImage(disableImage);
                            marker[j].setZIndex(2);
                        }
                        var markerImage = new kakao.maps.MarkerImage(
                            positions[i]["SelectedImg"],
                            new kakao.maps.Size(40, 60), new kakao.maps.Point(20, 60));
                        marker[i].setImage(markerImage);
                        marker[i].setZIndex(3);         //z-index 설정해준다.
                    });
                }
                

                

                // kakao.maps.event.addListener(markerTwo, 'click', function() {
                //     var markerImage = new kakao.maps.MarkerImage(
                //         'https://d2qrvi4l1nprmf.cloudfront.net/images/service/mobile/offline/is_selected_mark/trost_selected.png',
                //         new kakao.maps.Size(40, 60), new kakao.maps.Point(35, 100));
                //     markerTwo.setImage(markerImage);
                // });
            })
            this.setState({
                location : this.props.location,
            })
        }
    }
 
    render() {
        
        return (
            <div className="map" id="map"></div>
        );
    }
}
export default Map;
