Router.route('/',{
	template: 'loginpage'
});
Router.route('/signup',function(){
	this.render('signup');
});
Router.route('/home');