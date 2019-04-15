<template>
	<div class="map" id="container">
	</div>
</template>

<script>
	import bikeLogo from '../assets/bike.png'
	export default {
		name: 'hello',
		data() {
			return {}
		},
		methods:{
			addMarker: function(map, point){	//创建图标对象
				var myIcon = new BMap.Icon(bikeLogo,new BMap.Size(23,25),{anchor: new BMap.Size(10,25),
				});
				var self = this;
				var marker = new BMap.Marker(point,{icon: myIcon});
				map.addOverlay(marker);
				marker.addEventListener("click",function(){
					alert('损坏');
					self.$router.push({name: "CZL"})
				})
			}
		},
		// 进入dom
		mounted() {
			var map = new BMap.Map("container"); //创建地图实例
			var point = new BMap.Point(115.404,39.915);  //创建点坐标
			//定位
			var self = this;
			var geolocation = new BMap.Geolocation();
			geolocation.getCurrentPosition(function(r) {
				var points;
				if (this.getStatus() == BMAP_STATUS_SUCCESS) {
					// alert('我的位置:' + r.point.lng + "," + r.point.lat);
					points = new BMap.Point(r.point.lng,r.point.lat);
				} else {
					alert('failed' + this.getStatus());
				}
				//初始化地图，设置中心点坐标和地图级别
				map.centerAndZoom(points,10);
				//取得数据
				//假装从这里得到车辆数据
// 				fetch(`/api/broken-bikes?lat=${r.point.lat}&lng=${r.point.lng}`)
// 				.then((res)=>{
// 					console.log(res);
// 					return res.json();
// 				}).then((json)=>{
// // 					for(let i=0;i<json.length;i++){
// // 						let point = new BMap.Point(json[i].lng,json[i].lat);
// // 						self.addMarker(map,points);
// // 					}
// 				})
				self.addMarker(map,points);
				for(let i=0;i<6;i++){
					let a = parseInt(Math.floor(Math.random()*100))/1000;
					if(a>0.05){
						points = new BMap.Point(points.lat+a,points.lng+a);
					}else{
						points = new BMap.Point(points.lat-(3*a),points.lng-(2*a));
					}
					self.addMarker(map,points);
				}
				
				// self.addMarker(map,points);
			}, {enableHighAccuracy: true})
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#container{
	height: 100%;
}
.BMap_Marker img{
	width: 100%;
	border-radius: 30px;
}
</style>
