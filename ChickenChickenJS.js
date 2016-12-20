
	//navigation bar drop down animation
	var navigationBar = document.getElementById("navigation-bar")
	var navBarStartPos = -700;
	var navBarEndPos = 58;
	var navBarEndPosBreathingSpace = 8;
	var duration = 100;
	var startTime = new Date().getTime();
	
	navigationBar.style.top = navBarStartPos + "px";
	
	var dropDown = function() {
		var currTime = new Date().getTime();
		newTopPos = (currTime-startTime)/duration;
		navigationBar.style.top = (parseFloat(navigationBar.style.top) + newTopPos) + "px";

		if (parseFloat(navigationBar.style.top) < (navBarEndPos - navBarEndPosBreathingSpace)) {
			window.requestAnimationFrame(dropDown);
		} else {
			navigationBar.style.top = navBarEndPos;
		}
	}
	dropDown();
	
	//mouse click handlers
	var ChickenChick = document.getElementById("ChickenChick");
	var whatsNew = document.getElementById("whatsNew");
	var ChickChickChicken = document.getElementById("ChickChickChicken");
	var discussionBoard = document.getElementById("discussionBoard");
	var contactUs = document.getElementById("contactUs");
	
	var isClicked = false;
	var ChickChickChickenOnClick = function (event) {
		if (!isClicked) {
			var fssps = document.getElementById("ChickChickChickenText").getElementsByTagName("p");
			for (var i = 0; i < fssps.length; i++) {
				fssps[i].innerHTML = "Note: This function is not available yet :,(";
				fssps[i].appendChild(mapImage);	
			}
			isClicked = true;
		}

	};
	
	var isThereDiscussionBoardImage = false;
	var discussionBoardOnClick = function (event) {
		if (!isThereDiscussionBoardImage) {
			var discussionBoardImage = document.createElement("img");
			discussionBoardImage.src="http://community.bamboosolutions.com/cfs-filesystemfile.ashx/__key/CommunityServer.Components.ImageFileViewer/CommunityServer.Blogs.Components.WeblogFiles.bambooteamblog/Discussion-Board-Plus-04.png_2D00_725x0.png";
			discussionBoardImage.setAttribute("width", "100%");
			discussionBoardImage.alt = "A screenshot of a discussion board";	
			
			var dbps = document.getElementById("discussionBoardText").getElementsByTagName("p");
			for (var i = 0; i < dbps.length; i++) {
				dbps[i].innerHTML = "Note: This function is not available yet :,(";
				dbps[i].appendChild(discussionBoardImage);	
			}
			isThereDiscussionBoardImage = true;
		}
	};
	
	ChickChickChicken.addEventListener("click", ChickChickChickenOnClick);
	discussionBoard.addEventListener("click", discussionBoardOnClick);