import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import './login.html' ;



Template.login.events({
	'submit #form1'(event){
		event.preventDefault();
		var credentials = {
		 loginemail : $("#loginemail").val(),
		 loginpassword : $("#loginpassword").val()
		};
		Meteor.loginWithPassword(credentials,function(error){
			if(error){
				console.log("error:",error.reason)
			}
			else{
				
			}
		})
	},

})