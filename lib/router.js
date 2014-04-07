Router.configure({ 
	layoutTemplate: 'layout'
});
Router.map(function() { 
	this.route('home', {path: '/'});
	
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