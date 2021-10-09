let icon = document.getElementById("burger-icon");
let menu = document.getElementById("navbar__links");
icon.addEventListener("click", function () {
	menu.setAttribute("display", "block");
	console.log("hi there ");
});
