$(function(){

	var navLi = $('.navs li')

	navLi.on('click',function(){

		$(this).find('ul').slideToggle();

	});

});

var app = {
	baseUrl : 'http://fullstack.net.cn:3000'
	
}




$.fn.serializeToJson = function(){
	var formAry = this.serializeArray();
	// console.log(formAry);
	var result = {}; 
	formAry.forEach(function(item){
        result[item.name] = item.value;
	})

	return result;
}

function getUrl(name){
   var url = location.search.slice(1);
   var arr = url.split("&");
  
   for(var i=0;i<arr.length;i++){
   	   var arr1 = arr[i].split("=");
   	   if(arr1[0] == name){
   	   	   return arr1[1];
   	   }else {
   	   	return -1;
   	   }
   }
}