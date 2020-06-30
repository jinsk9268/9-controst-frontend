import React, { Component } from 'react';
import './Offline.scss';
class Map extends Component {
    constructor(props){
        super(props);

        this.state = {
            location : "",
            clickIndex : "",
            positions: [],
            marker: {},
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

                let validationIndex = () => { //알파벳 인덱스 함수
                    let imgIndexArr = [];
                    let alphabetArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T"];
                    for(let i in this.state.location){
                        if(this.state.location[i]["vip"] === true){
                            imgIndexArr.push('trost');
                        }
                    }
                    let alphabetRemovedArr = alphabetArr.splice(imgIndexArr.length, alphabetArr.length-1);
                    let resultArr = imgIndexArr.concat(alphabetRemovedArr);
                    return resultArr;
                }
                var positions = [
                    {
                        title: this.state.location[0]["center"], 
                        latlng: new kakao.maps.LatLng(this.state.location[0]["coordinate"].split(",")[0], this.state.location[0]["coordinate"].split(",")[1]),
                        unSelectedImg : `https://d2qrvi4l1nprmf.cloudfront.net/images/service/mobile/offline/is_unselected_mark/${validationIndex()[0]}_unselected.png`,
                        SelectedImg : `https://d2qrvi4l1nprmf.cloudfront.net/images/service/mobile/offline/is_selected_mark/${validationIndex()[0]}_selected.png`
                    },
                    {
                        title: this.state.location[1]["center"],
                        latlng: new kakao.maps.LatLng(this.state.location[1]["coordinate"].split(",")[0], this.state.location[1]["coordinate"].split(",")[1]),
                        unSelectedImg :`https://d2qrvi4l1nprmf.cloudfront.net/images/service/mobile/offline/is_unselected_mark/${validationIndex()[1]}_unselected.png`,
                        SelectedImg : `https://d2qrvi4l1nprmf.cloudfront.net/images/service/mobile/offline/is_selected_mark/${validationIndex()[1]}_selected.png`
                    },
                    {
                        title: this.state.location[2]["center"],
                        latlng: new kakao.maps.LatLng(this.state.location[2]["coordinate"].split(",")[0], this.state.location[2]["coordinate"].split(",")[1]),
                        unSelectedImg :`https://d2qrvi4l1nprmf.cloudfront.net/images/service/mobile/offline/is_unselected_mark/${validationIndex()[2]}_unselected.png`,
                        SelectedImg : `https://d2qrvi4l1nprmf.cloudfront.net/images/service/mobile/offline/is_selected_mark/${validationIndex()[2]}_selected.png`
                    },
                    {
                        title: this.state.location[3]["center"],
                        latlng: new kakao.maps.LatLng(this.state.location[3]["coordinate"].split(",")[0], this.state.location[3]["coordinate"].split(",")[1]),
                        unSelectedImg :`https://d2qrvi4l1nprmf.cloudfront.net/images/service/mobile/offline/is_unselected_mark/${validationIndex()[3]}_unselected.png`,
                        SelectedImg : `https://d2qrvi4l1nprmf.cloudfront.net/images/service/mobile/offline/is_selected_mark/${validationIndex()[3]}_selected.png`
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
          
                    kakao.maps.event.addListener(marker[i], 'click', function() {
                        console.log("heheheheh", kakao.maps);
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
                };
                this.setState({
                    marker,
                    positions
                });

                // var clickImage = this.props.clickIndex && marker[this.props.clickIndex].setImage(new kakao.maps.MArkerImage(
                //     positions[this.props.clickIndex]["SelectedImg"],
                //     new kakao.maps.Size(40, 60), new kakao.maps.Point(20, 60))
                // )
            })
            this.setState({
                location : this.props.location,
            })

        }
    }

    // markerHandler = (i) => {
    //     for(let j in positions){            //이미지 unSelect로 초기화, z-index 초기화
    //         var disableImage = 
    //             positions[j]["unSelectedImg"];
    //         marker[j].setImage(disableImage);
    //         marker[j].setZIndex(2);
    //     }
    //     var markerImage =
    //         positions[i]["SelectedImg"];
    //     marker[i].setImage(markerImage);
    //     marker[i].setZIndex(3);         //z-index 설정해준다.
    // }


    componentDidUpdate(prevProps){
        const { kakao } = window;
        console.log('here');
        if(this.props.clickIndex){
            if(prevProps !== this.props){
                this.setState({
                    clickIndex : this.props.clickIndex,
                }, ()=> {
                    let marker = this.state.marker;
                    let positions = this.state.positions;
                    for(let j in positions){            //이미지 unSelect로 초기화, z-index 초기화
                        var disableImage = new kakao.maps.MarkerImage(
                            positions[j]["unSelectedImg"],
                            new kakao.maps.Size(30, 30));
                        marker[j].setImage(disableImage);
                        marker[j].setZIndex(2);
                    }
                    var markerImage = new kakao.maps.MarkerImage(
                        positions[this.state.clickIndex]["SelectedImg"],
                        new kakao.maps.Size(40, 60), new kakao.maps.Point(20, 60));
                    marker[this.state.clickIndex].setImage(markerImage);
                    marker[this.state.clickIndex].setZIndex(3);         //z-index 설정해준다.
                });
                
            }
        }
    }
    
    render() {
        console.log(this.state, "야야야",this.props)
        return (
            <div className="map" id="map"></div>
        );
    }
}
export default Map;
