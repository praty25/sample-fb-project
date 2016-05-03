Router.route('/',{
	template: 'loginpage'
});
Router.route('/signup',function(){
	name : 'signup',
	this.render('signup');
});
Router.route('/dashboard/:_id',function(){
	name : 'dashboard',
	this.render('dashboard');
});