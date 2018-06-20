$(function(){
     
     $.ajax({
     	type: 'get',
     	url:  app.baseUrl + '/category/queryTopCategoryPaging',
     	data: {
     		page: 1,
     		pageSize: 10
     	},
     	success: function(response){
     		console.log(response);
     		
     			  var html = template('categoryFirstTpl',response);
     			  $('#categoryFirstBox').html(html);
     	
     	}
     })












})