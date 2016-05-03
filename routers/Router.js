Router.route('/',{
	template: 'loginpage'
});
Router.route('/signup',function(){
	name : 'signup',
	this.render('signup');
});
Router.route('/dashboard',function(){
	name : 'dashboard',
	this.render('dashboard');
});