$(document).ready(function(){

	var blocks = $('.block'),
		mycolors = ['#E91E63', '#303F9F', '#2196F3', '#4CAF50', '#009688', '#FFC107', '#00BCD4', '#5D6D7E', '#884EA0', '#F8BBD0', '#F44336', '#CDDC39'],
		content = [],
		active = 0,
		points = 0,
		moves = 0;


	function createMemoBlocks() {
		for (var i = 0; i < mycolors.length; i++) {
			for (var j = 0; j < 2; j++) {
				content.push({
					id: i+1,
					color: mycolors[i]
				});
			}
		}
		shuffle(content);
		for (var i = 0; i < content.length; i++) {
			$(blocks[i]).attr('data-color', content[i].color).attr('data-id', content[i].id);
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
		if (active === 2) {
			if ($('.active').eq(0).data('id') === $('.active').eq(1).data('id')) {
				setTimeout(hit, 500);
				active = 0;
				points += 1;
				moves += 1;
			}
			else {
				setTimeout(missed, 500);
				active = 0;
				moves += 1;
			}
		}
		if (points === 12) {
			$('#again').text('You made it! And it tooked you '+ moves +' moves. Try again and be better!').toggleClass('hidden');
		}
	});

	$('#again').on('click', function(){
		location.reload(true);
	});

	function missed() {		
		$('.active').css('background-color', '#ffffff').toggleClass('active');
	}

	function hit() {
		$('.active').toggleClass('active').toggleClass('gone');
	}

});