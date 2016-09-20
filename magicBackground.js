var elements = document.getElementsByClassName("video-background");

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	if(elements.length > 0) {
		for (i = 0, elmLength = elements.length; i < elmLength; i++) { 
		    elements[i].innerHTML = "";
		}
	}
}

var addEvent = function(object, type, callback) {
    if (object == null || typeof(object) == 'undefined') return;
    
    if (object.addEventListener) {
        object.addEventListener(type, callback, false);
    } else if (object.attachEvent) {
        object.attachEvent("on" + type, callback);
    } else {
        object["on"+type] = callback;
    }
};

var resize = function(event) {
	if(elements.length > 0) {
		for (i = 0, elmLength = elements.length; i < elmLength; i++) {
			var videoElement = elements[i].getElementsByTagName("VIDEO")[0];

			var videoDimensions = {
				"height" : videoElement.videoHeight, 
				"width" : videoElement.videoWidth
			};

			var containerDimensions = {
				"height" : elements[i].clientHeight, 
				"width" : elements[i].clientWidth
			};

			if(videoDimensions.width / videoDimensions.height >= containerDimensions.width / containerDimensions.height) {
				elements[i].classList.remove("set-height", "set-width");
		    	elements[i].className += " set-height";
			}
			else {
				elements[i].classList.remove("set-height", "set-width");
		    	elements[i].className += " set-width";
			}
		}
	}
};

addEvent(window, "resize", resize);
addEvent(window, "load", resize);