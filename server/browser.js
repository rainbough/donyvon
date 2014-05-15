

Meteor.methods({
	browserCheck: function(){
		var ie8 = false;
		if(Bowser.msie && Bowser.version <= 8){
			ie8 = true;
		} else {
			ie8 = false;
		}
		console.log(ie8);
		return ie8;
	}
});