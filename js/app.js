document.addEventListener("DOMContentLoaded", function(){

	var blocks = document.querySelectorAll('.block'),
		active = document.querySelectorAll('.active'),
		mycolors = ['#E91E63', '#303F9F', '#2196F3', '#4CAF50', '#009688', '#FFC107', '#00BCD4', '#5D6D7E', '#884EA0', '#F8BBD0', '#F44336', '#CDDC39'],
		content = [],
		activeBlocks = [],
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
			blocks[i].dataset.color = content[i].color;
			blocks[i].dataset.id = content[i].id;
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
	console.log(blocks);

	for (var i = 0; i < blocks.length; i++) {

		blocks[i].addEventListener('click', function(){
			this.classList.remove('ready');
			this.classList.add('active');
			this.style.backgroundColor = this.dataset.color;
			active ++;
			activeBlocks = document.querySelectorAll('.active');
			if (active === 2) {
				if (activeBlocks[0].dataset.id === activeBlocks[1].dataset.id) {
					setTimeout(hit, 500);
					active = 0;
					points ++;
					moves ++;
				}
				else {
					setTimeout(missed, 500);
					active = 0;
					moves ++;
				}
			}
			if (points === 12) {
			 	var again = document.querySelector('#again');
			 	again.innerText = 'You made it! And it tooked you '+ moves +' moves. Try again and be better!';
			 	again.classList.remove('hidden');
			}
		});
	}

	document.querySelector('#again').addEventListener('click', function(){
		location.reload(true);
	});

	function missed() {	
		console.log(activeBlocks);	
		for (var i = 0; i < activeBlocks.length; i++) {
			activeBlocks[i].style.backgroundColor = '#ffffff';
			activeBlocks[i].classList.remove('active');
		}
	}

	function hit() {
		for (var i = 0; i < activeBlocks.length; i++) {
			activeBlocks[i].classList.remove('active');
			activeBlocks[i].classList.add('gone');
		}
	}

});
