Package.describe({
	summary: "A Browser Detector... because sometimes, there is no other way."
});

Npm.depends({bowser: "0.7.1"});

Package.on_use(function(api){
	api.use('standard-app-packages', ['server']);
	api.add_files('bowser.js', ['server']);
	api.export('Bowser');
	
});