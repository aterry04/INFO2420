	PrintButton1 = new Image
	PrintButton2 = new Image
	logo1 = new Image
	logo2 = new Image
if (document.images) {
	PrintButton1.src = "Images/print1.jpg"
	PrintButton2.src = "Images/print2.jpg"
	logo1.src = "Images/logo1.jpg"
	logo2.src = "Images/logo2.jpg"
}


	var imgArray = [
		'Images/fullsize/Image1Lg.jpg',
		'Images/fullsize/Image2Lg.jpg',
		'Images/fullsize/Image3Lg.jpg',
		'Images/fullsize/Image4Lg.jpg'
	];

	var titleArray = [
		'Heron Drinking From Pond',
		'Pigeon Perched on Stones',
		'Cardinal on a Snowy Branch',
		'Pelicans at the Beach'
	];

	function swapImage(imgID) {
		var theImage = document.getElementById('theImage');
		var textDiv = document.getElementById('bottomText');

		theImage.src = imgArray[imgID];
		textDiv.innerHTML = titleArray[imgID];
	}

			
		function preloadImages() {		
			for(var i = 0; i < imgArray.length; i++) {
				var tmpImg = new Image;
				tmpImg.src = imgPath + imgArray[i];
			}
		}
		
// JavaScript Document