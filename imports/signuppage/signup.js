import { Template } from 'meteor/templating';
import { Accounts } from 'meteor/accounts-base'
import './signup.html';


Template.signup.events({
	'submit #form2'(event){
		event.preventDefault();
		var options = {
			email : $("#email").val(),
			password : $("#password").val(),
			profile:{
			name : $("#name").val(),
			date : $("#dob").val(),
			gender : $("#gender:checked","#form2").val()
			}
		};
		Accounts.createUser(options,function(error){
			if(error){
				alertify.alert(error.reason)	
			}
			else{
				Router.go('/')
			}
		});
	},

	'click #loginbtn'(event){
		Router.go('/')
	}
})