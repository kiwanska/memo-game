$(document).ready(function(){

	var blocks = $('.block');

	console.log(blocks);

	blocks.eq(0)


	blocks.hover(function() {
		$(this).toggleClass('active');
	  }, function() {
	  	$(this).toggleClass('active');
	  }
	);

	blocks.on('click', function(){
		console.log('dkjhfdskj');
	})
});