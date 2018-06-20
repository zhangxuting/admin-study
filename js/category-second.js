$(function(){
	
	$.ajax({
		type: 'get',
		url: app.baseUrl + '/category/querySecondCategoryPaging',
		data: {
			page: 1,
			pageSize: 10
		},
		success:function(response){
           console.log(response);
           var html = template('categorySecondTpl',{
           	   list: response,
           	   api: app.baseUrl
           });

           $('#categorySecondBox').html(html);
		}
	})
})