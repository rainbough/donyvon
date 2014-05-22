if(Meteor.isClient){
	Meteor.startup(function() {
	 	if($('html').hasClass('no-history')){
	   		$('body').html("<h1>This is an unsupported browser</h1>");
	   	}
	});
}
// var ie8 = Meteor.call('layoutCheck', function(err, result){
// 	if(!err){
// 		return result;
// 	}
// });

// if(ie8){
// 	layout = "layout";
// 	home = "home";
// }else{
// var layout = "aaa";
// var home = "aaa";
// }

Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function() { 
	this.route('home', {
		path: '/'
	});
	
	this.route('services', {
		path: '/services'
	});
	
	this.route('discounts',{
		path: '/discounts'
	});

	this.route('credits', {
		path: '/credits'
	});

	this.route('products', {
		path: '/products'
	});

	this.route('locations', {
		path: '/location'
	});

});

