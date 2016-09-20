if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	var elements = document.getElementsByClassName("video-overlay");
	if(elements.length > 0) {
		for (i = 0, elmLength = elements.length; i < elmLength; i++) { 
		    elements[i].innerHTML = "";
		}
	}
}