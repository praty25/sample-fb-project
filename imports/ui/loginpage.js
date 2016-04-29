import { Template } from 'meteor/templating';
import './loginpage.html';
import './login.js';

Template.loginpage.events({
	'click #signing'(event){
		Router.go('/signup')
	}
})
 