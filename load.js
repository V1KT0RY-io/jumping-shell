var __filesToLoad = {
			"./Jumping Shell.js": {total: 2482344}
		}
		
		var __progressBar;
		
		var __progressListener = function __progressListener(progress) {
			if(!__progressBar) __progressBar = document.getElementById("progress");
			if(__progressBar) __progressBar.value = progress;
		};

		var __completionCallback = function __completionCallback() {
			__progressBar.parentNode.removeChild(__progressBar);
			lime.embed ("Jumping Shell", "openfl-content", 1252, 704, { parameters: {} });
		};

		__loadWithProgress(__filesToLoad, __progressListener, __completionCallback);
		