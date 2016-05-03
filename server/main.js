import { Meteor } from 'meteor/meteor';

if(Meteor.isServer){

	Meteor.publish('gettingname',function(){
		return Meteor.users.find({_id : this.userId},{"profile.name":1,_id:0})
	})
}

