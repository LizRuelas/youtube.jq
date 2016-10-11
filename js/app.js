
var cargarPagina = function(){
	var enlaces = document.querySelectorAll("a");
	//for (var i = 0 ; i < array.length ; i++){
	enlaces.forEach(function(enlace){
		
		var href = enlace.getAttribute("href");
		var generar = youtube.generateThumbnailUrl(href);

		var img = document.createElement("img");
		img.setAttribute("src", generar );

		enlace.appendChild(img);
	});
};

window.addEventListener("load" , cargarPagina);



