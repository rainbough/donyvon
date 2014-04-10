Template.home.events({
	'click #home': function(){
		Aloha.ready( function() {
	    	Aloha.jQuery('#home').aloha();
	    });
	 }
});

Template.credits.events({
    'click input' : function () {
      // this will enable Aloha Editor for all HTML elements with the class "editable"
      $(".editable").aloha();
      if (typeof console !== 'undefined')
        console.log("You activated Aloha Editor!");
      
  }
});

       

