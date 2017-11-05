var subMenu = document.getElementsByClassName("subMenu");
for (var i = subMenu.length - 1; i >= 0; i--) {
	subMenu[i].addEventListener("click", showMenu);
}

function showMenu(){
	var listMenu = this.getElementsByClassName("itemList")[0];
	console.log(listMenu);
	if(listMenu.classList.contains('hide')){
		listMenu.classList.remove('hide');
		listMenu.classList.add('show');
	} else {
		listMenu.classList.remove('show');
		listMenu.classList.add('hide');
		console.log("hlashsalhsajkls");
	}
}