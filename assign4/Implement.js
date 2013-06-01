/*第四步的callback function：*/

function(response){
				
	var i=0;
					
	while(response['data'][i] != null){
					
		var fId = response['data'][i]['id'];
		var fName = response['data'][i]['name'];
		$("<div onclick='changeInfo("+fId+");'><img src='https://graph.facebook.com/"+ fId + "/picture' /><span>"+fName+"</span></div>").appendTo("#FillInList");

		i++;
	}
}


加分部分，更進一步的使用：

/*在Facebook裡面新增使用者群組*/

//彈出視窗，請求使用者輸入新朋友清單的名字
//回傳的res值是新增的清單id
var temptitle = prompt("Enter the name of your new friend list");
						
if(temptitle){
				
	FB.api('me/friendlists', 'post', {name: temptitle}, function(res){
						
}



/*在Facebook中刪除使用者群組*/
//回傳的res是boolean值，代表是否刪除成功
FB.api('/FRIENDLIST_ID', 'DELETE', function(res){
						
}

/*將某個id的朋友加入在Facebook中的特定朋友清單*/
//回傳的res是boolean值，代表是否加入成功
FB.api('/FRIENDLIST_ID/members/USER_ID', 'POST', function(res){
	
}

/*將某個id的朋友在Facebook中的特定朋友清單內刪除*/
//回傳的res是boolean值，代表是否刪除成功
FB.api('/FRIENDLIST_ID/members/USER_ID', 'DELETE', function(res){
	
}