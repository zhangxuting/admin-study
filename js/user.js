$.ajax({
	type: 'get',
	async: false,
	url: app.baseUrl +'/employee/checkRootLogin',
	success:function(response){
       if(response.success){

       }else {
       	   location.href = 'login.html';
       }
	}
})



$(function(){
	$.ajax({
		type: 'get',
		url: app.baseUrl +'/user/queryUser',
		data:{
            page: 1,
            pageSize: 100
		},
		success: function(response){
           // console.log(response);
           var html = template('userTpl',response);
           $('#userBox').html(html);
		}
	})

    $('#userBox').on('click','.statusBtn',function(){

    	var id = $(this).data('user-id');
    	var isDelete = $(this).data('user-status');
    	console.log(id);
    	console.log(isDelete);
    	$.ajax({
		type: 'post',
		url: app.baseUrl +'/user/updateUser',
		data: {
			id : id,
			isDelete: isDelete==1?0:1
		},
	 	success: function(response){
            if(response.success){
            	alert('修改成功');
            	location.reload();
            }else {
            	alert(response.message);
            }
	 	}
	   }) 
    })
	
})