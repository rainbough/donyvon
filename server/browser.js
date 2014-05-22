Meteor.methods({
	layoutCheck: function(){
		return bowser.msie && bowser.version <= 8;
		
	}
});