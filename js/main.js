// this is a partially revealing module pattern - just a variation on what we've already done

(() => {
	console.log("My Js is working")

	//variable stack -> get the shields / sigils first
	const lightboxDiv = document.querySelectorAll('.lightbox-div'),
		lightBox = document.querySelector('.lightbox'),
		closeButton = document.querySelector('.close-lightbox'),
		showReel = document.querySelector('.reel-video'),
		pauseButton = document.querySelector('.fa-pause-circle'),
		playButton = document.querySelector('.fa-play'),
		rewindButton = document.querySelector('.fa-backward');

		    //pause the video on a click
		    function pauseVideo(){
		    	showReel.pause();
		    	console.log('paused')
		    }

		    function playVideo(){
		    	showReel.play();
		    	console.log('played')
		    }
		    function rewindVideo(){
		    	showReel.currentTime=0;
		    	console.log('startOver')
		    }
		    //write the other fun
	function popLightBox(){
		lightBox.classList.add('show-lightbox')
		showReel.load();

		showReel.play();
	}
		function closeLightBox(event){
			event.preventDefault(); //e and event mean the same thing they are event handlers
			
			lightBox.classList.remove('show-lightbox');
			showReel.currentTime = 0;
			showReel.pause();
		}
		function videoEnded(event){
			event.preventDefault();

			lightBox.classList.remove('show-lightbox')
			showReel.currentTime = 0;
			showReel.pause();
			alert('The video is Ended')
			console.log('video Ended')
		}

		
		lightboxDiv.forEach(div => div.addEventListener("click", popLightBox));
		closeButton.addEventListener("click", closeLightBox);

		showReel.addEventListener('ended', closeLightBox);
		showReel.addEventListener('ended', videoEnded);
		pauseButton.addEventListener("click", pauseVideo);
		playButton.addEventListener("click", playVideo);
		rewindButton.addEventListener("click", rewindVideo);
	})();
