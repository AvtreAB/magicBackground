/* magicBackground https://github.com/AvtreAB/magicBackground */

var MagicBackground = function() {
	this.elements = document.getElementsByClassName("video-background");
	
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		if(this.elements.length > 0) {
			for (i = 0, elmLength = elements.length; i < elmLength; i++) { 
				this.elements[i].innerHTML = "";
			}
		}
	}
	
	for (i = 0, elmLength = this.elements.length; i < elmLength; i++) {
		var videoElement = this.elements[i].getElementsByTagName("VIDEO")[0];
		
		if(videoElement) {
			this.addEvent(videoElement, "loadedmetadata", this.resize.bind(this));
		}
		
		if(videoElement.readyState > 0) {
			this.resize();
		}
	}
	
	this.addEvent(window, "resize", this.resize.bind(this));
}

MagicBackground.prototype.addEvent = function(object, type, callback) {
	if (object == null || typeof(object) == 'undefined') return;
    
    if (object.addEventListener) {
        object.addEventListener(type, callback, false);
    } else if (object.attachEvent) {
        object.attachEvent("on" + type, callback);
    } else {
        object["on"+type] = callback;
    }
}

MagicBackground.prototype.resize = function(event) {
	if(this.elements.length > 0) {
		for (i = 0, elmLength = this.elements.length; i < elmLength; i++) {
			var containerElement = this.elements[i];
			var videoElement = containerElement.getElementsByTagName("VIDEO")[0];
			
			if(videoElement) {			
				var videoDimensions = {
					"height" : videoElement.videoHeight, 
					"width" : videoElement.videoWidth
				};
				console.log(videoDimensions);
				var containerDimensions = {
					"height" : containerElement.clientHeight, 
					"width" : containerElement.clientWidth
				};
				console.log(containerDimensions);
				containerElement.classList.remove("set-height", "set-width");
	
				if(videoDimensions.width / videoDimensions.height >= containerDimensions.width / containerDimensions.height) {
					containerElement.className += " set-height";
					console.log("Setting height");
				}
				else {
					containerElement.className += " set-width";
					console.log("Setting width");
				}
			}
		}
	}
};