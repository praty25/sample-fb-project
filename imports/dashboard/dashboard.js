import { Template } from 'meteor/templating';
import './dashboard.html';

Template.dashboard.events({
	'click #logout-btn'(e){
		e.preventDefault();
		Meteor.logout();
		Router.go('/')
	},

	'keyup #searchicon'(e){
		e.preventDefault();
		var name = $('#searchicon').val();
		Method.call('searchingname',name)
	}
})