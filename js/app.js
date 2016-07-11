$(document).ready(function(){

	var blocks = $('.block'),
		mycolors = ['#E91E63', '#303F9F', '#2196F3', '#4CAF50', '#009688', '#FFC107', '#00BCD4', '#5D6D7E', '#884EA0', '#F8BBD0', '#F44336', '#CDDC39'],
		colors = [],
		active = 0,
		points = 12,
		moves = 0;


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
			$(blocks[i]).attr('data-color', colors[i].color).attr('data-id', colors[i].id);
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
	

	blocks.hover(function() {
		$(this).toggleClass('ready');
	  }, function() {
	  	$(this).toggleClass('ready');
	  }
	);

	blocks.on('click', function(){
		$(this).toggleClass('ready').toggleClass('active').css('background-color', $(this).data('color'));
		active += 1;
		moves =+ 1;
		if (active === 2) {
			if ($('.active').eq(0).data('id') === $('.active').eq(1).data('id')) {
				setTimeout(hit, 500);
				active = 0;
				points += 1;
			}
			else {
				setTimeout(missed, 500);
				active = 0;
			}
		}
		// if (points === 12) {
		// 	$('#again').text('You made it! And it tooked you '+ moves +' moves. Try again and be better!');
		// 	$('#again').toggleClass('hidden');
		// }
	});

	

	function missed() {		
		$('.active').css('background-color', '#ffffff').toggleClass('active');
	}

	function hit() {
		$('.active').toggleClass('active').toggleClass('gone');
	}

});