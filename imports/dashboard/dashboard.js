import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
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
	}
});

Template.dashboard.helpers({
	'profilename':function(){
		var collections = Meteor.users.findOne({_id : Meteor.userId()},{fields:{"profile.name":1}});
		var info = collections.profile;
		var fbname = info.name
		return fbname;
	}
})

