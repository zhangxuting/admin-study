$(function(){
     
     
  var page = 1;
  var pageSize = 5;
  var totalpage = 0;
  getData();
  $('#prev').on('click',function(){
       page--;
       if(page < 1){
       	  page = 1;
       	  alert('已经是第一页了');
       	  return;
       }
       getData();
  })
  $('#next').on('click',function(){
  	  page++;
  	  if(page > totalpage){
          page = totalpage;
          alert('没有更多数据了');
          return;
  	  }
  	 getData(); 
  })


  $('#addCategoryFirst').on('click',function(){
  	  var categoryName = $.trim($('#categoryName').val());
  	  if(!categoryName){
  	  	alert('请输入分类名称');
  	  	return;

  	  }
  	  $.ajax({
  	  	type: 'post',
  	  	url: app.baseUrl + '/category/addTopCategory',
  	  	data: {
  	  		categoryName: categoryName
  	  	},
  	  	success: function(response){
  	  		 if(response.success){
  	  		 	 location.reload();
  	  		 }else {
  	  		 	alert(response.message);
  	  		 }

  	  	}
  	  })
  })

  function getData(){
  	  $.ajax({
     	type: 'get',
     	url:  app.baseUrl + '/category/queryTopCategoryPaging',
     	data: {
     		page: page,
     		pageSize: pageSize
     	},
     	success: function(response){
     		console.log(response);
     		 if(response.error){
                 location.href = 'login.html';
     		 }else {
     		 	  var html = template('categoryFirstTpl',response);
     			  $('#categoryFirstBox').html(html);
     	          totalpage = response.total/pageSize; 
     		 } 
     			  
     	}
     })
  }











})