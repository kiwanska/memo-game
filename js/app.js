$(document).ready(function(){

	var blocks = $('.block');

	console.log(blocks);

	var mycolors = ['#EC7063', '#BB8FCE', '#7FB3D5', '#48C9B0', '#52BE80', '#F7DC6F', '#F0B27A', '#5D6D7E', '#884EA0', '#F5B7B1', '#6C3483', '#1D8348'];
	var colors = [];

	function createMemoBlocks() {
		for (var i = 0; i < mycolors.length; i++) {
			for (var j = 0; j < 2; j++) {
				colors.push({
					id: i+1,
					color:  mycolors[i]
				});
			}
		}
		shuffle(colors);
		for (var i = 0; i < colors.length; i++) {
			console.log(colors[i]);
			console.log(colors[i].color);
			console.log(blocks[i]);
			$(blocks[i]).data('color', colors[i].color).data('id', colors[i].id);
			console.log(blocks[i]);
		}

	}

	function shuffle(array) {
	    var currentIndex = array.length, 
	    	temporaryValue, 
	    	randomIndex;
	    while (0 !== currentIndex) {
		    randomIndex = Math.floor(Math.random() * currentIndex);
		    currentIndex -= 1;
		    temporaryValue = array[currentIndex];
		    array[currentIndex] = array[randomIndex];
		    array[randomIndex] = temporaryValue;
	    }

	    return array;
	}


	createMemoBlocks();
	console.log(colors);

	


	blocks.hover(function() {
		$(this).toggleClass('active');
	  }, function() {
	  	$(this).toggleClass('active');
	  }
	);

	blocks.on('click', function(){
		$(this).toggleClass('active').css('background-color', $(this).data('color'));

	})
});