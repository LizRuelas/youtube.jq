window.addEventListener("load" , cargarPagina);

function cargarPagina(){
	var array = document.querySelectorAll("a");


	for (var i = 0 ; i < array.length ; i++){
		var href = array[i].getAttribute("href");
		var generar = youtube.generateThumbnailUrl(href);

		var img = document.createElement("img");
		img.setAttribute("src", generar );

		array[i].appendChild(img);
	}
	
}