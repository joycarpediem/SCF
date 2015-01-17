$.getScript("bd3.js",function(geojson3){
var features=eval(geojson3).features;
 	
 	

 	function getMap1(){
 		var map1={};
 		map1[0]=" ";
 	for (var i =0;i<features.length;i++) {
 		var name1=features[i].properties.NAME_1;
 		if (!(name1 in map1)){
 			map1[name1]=name1;
 		}
 	};
 	return map1;
 }
 	function getMap2(value){
 		var map2={};
 		map2[0]=" ";
 	for(var j=0;j<features.length;j++){
 		var name2=features[j].properties.NAME_2;
 		var name1=features[j].properties.NAME_1;
 		if(name1==value && !(name2 in map2)){
 			map2[name2]=name2;
 		}
 	};
 	return map2;
 }
 function getMap3(value){
 		var map3={};
 		 map3[0]=" ";
 	for(var j=0;j<features.length;j++){
 		var name3=features[j].properties.NAME_3;
 		var name2=features[j].properties.NAME_2;
 		if(name2==value && !(name3 in map3)){
 			map3[name3]=name3;
 		}
 	};
 	return map3;
 }
 function getMap3Features(value){
 	for(var j=0;j<features.length;j++){
 		var name3=features[j].properties.NAME_3;
 		if(name3==value ){
 			return features[j];
 		}
 	};

 }
 	var options="";
 	$.each(getMap1(),function(i,t){
 		options += '<option value="' + t + '">' + t + '</option>';
 	});
 	$("#1").html(options);

$("#1").change(function () {
    var selected = $(this).val();
    var options="";
    $.each(getMap2(selected),function(i,value){
    		options += '<option value="' + value + '">' + value + '</option>';
    	$("#2").html(options);
    	$("#3").html("");
    });
});
$("#2").change(function () {
    var selected = $(this).val();
    var options="";
    $.each(getMap3(selected),function(i,value,x){
    		options += '<option value="' + value + '">' + value + '</option>';
    	$("#3").html(options);
    });


});
$("#3").change(function () {
    var selected = $(this).val();
    var map3Features=getMap3Features(selected);
    alert(selected);

 
})
});