(function () {
	var box= document.getElementById("container");
	var startX= box.offsetLeft;
	var maxX = startX + 1000;
	var curX= box.offsetLeft;

	function moveBox() {
		if (curX < maxX) {
			curX += 2;
			box.style.right= curX + 'px';
			requestAnimationFrame(moveBox);
		}
	}

	moveBox();
})();
