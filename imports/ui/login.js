import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import './login.html' ;



Template.login.events({
	'submit #form1'(event){
		event.preventDefault();
		var loginemail = $("#loginemail").val();
		var loginpassword = $("#loginpassword").val();
		check(loginemail,String);
		check(loginpassword,String);
		Meteor.loginWithPassword(loginemail,loginpassword,function(error){
			if(error){
				alertify.alert(error.reason)
			}
			else{
				Router.go('/dashboard/_id')
			}
		})
	},

})