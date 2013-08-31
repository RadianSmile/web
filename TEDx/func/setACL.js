
/* Set ACL*/
var currentUser = Parse.User.current();
function setACL (currentUser){
	if (currentUser) {
		var roleACL = new Parse.ACL();
		roleACL.setPublicReadAccess(true);
		var role = new Parse.Role('admin', roleACL);
  	role.getUsers().add(currentUser);
		role.save(null,{success:function (){alert('success ACL!!!!!!!')},error:function (u,e){alert(e.message , '!!');}});
	} else {
    alert ('haven\', login!!');	
	}
		
}
