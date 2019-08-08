/*/*Código del boton que busca las peliculas
function ejecutarAjax(entrada){
//Forma #1
/*$.get("https://api.themoviedb.org/3/search/movie",{api_key: '08142d9351171e224683a4c8cfe1c85f',language:'en-US',query:entrada,page: '1'}, function(data){
		console.log(data);
	});
*
	//Forma #2 
	var texto="";
	var idmovie="";
	$.getJSON("https://api.themoviedb.org/3/search/movie",{api_key: '08142d9351171e224683a4c8cfe1c85f',language:'en-US',query:entrada,page: '1'},function (data) {
      	$.each(data.results, function(i, items) {
      		idmovie=items.id;
          $('#peliculas').append(

          )}
      
        )}
    }    


      		texto+="<div class='cuadro cards'>";
      		texto+="<h7>"+items.original_title+ "</h7>"
      		texto+="<img src='https://image.tmdb.org/t/p/w185_and_h278_bestv2" +items.poster_path+ "'/>";
      		texto+="<h13>"+'Overview'+"</h13>"
      		texto+="<h10>"+items.overview+ "</h10>"
      		texto+="<h13>"+'Release date'+"</h13>"
      		texto+="<h14>"+items.release_date+"</h14>"
          texto+="<button class= 'btn btn-primary' onclick='buscarvideo("+idmovie+")'>Ver Trailer</button>"
      		texto+="<br>"
      		texto+="</div>";

      	// $("#peliculas").html(texto);
       //  $("#pelicula").html(texto);
  


function buscarvideo(id){
  var cadena="";
  var dominio="";
  $.getJSON("https://api.themoviedb.org/3/movie/"+id+"/videos",{api_key: '08142d9351171e224683a4c8cfe1c85f',language:'esn-US'},function(trailer){
    $.each(trailer.results,function(i, items) {
      cadena=items.key;
      dominio = "https://www.youtube.com/watch?v="+cadena;      
      window.location.href=dominio;

    });
  });
}



function Buscar(){
	var entrada= $("#nombre").val();
	ejecutarAjax(entrada);
}

*/


function Buscar(){
  var entrada= $("#nombre").val();
  BuscarMovie(entrada);
}

function BuscarMovie(nombre){
  $.ajax({
  url: 'https://api.themoviedb.org/3/search/movie?api_key=08142d9351171e224683a4c8cfe1c85f&language=en-US&query='+nombre+'&page=1&include_adult=false',
  type: 'GET',
  dataType: 'json',
  })
 .done(function(datos) {
  console.log(datos)
  $.each(datos.results, function(index, items) {
    idmovie=items.id;
    $("#peliculas").append(

          +'<div class="card bg-dark mb-3" style="max-width: 18rem;">'
            +'<div class="row no-gutters">'
              +'<div class="col-md-2">'
               +  '<img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2'+ items.poster_path +'" class="card-img" height="300px;" width="30px;">'
              +'</div>'
            + '<div class="col-md-10">'
             +   '<div class="card-body">'
              +      '<h5 class="card-title">'+ items.original_title +'</h5>'
               +     '<p class="card-text">'+ items.overview +'</p>'
                +      '<h5 class="card-title">Release date</h5>'
               +     '<p class="card-text">'+ items.release_date +'</p>'                
                +    '<p><button class= "btn btn-light" onclick="BuscarTrailer('+idmovie+')">Ver Trailer</button></p>'
                
            +     '</div>'
            + '</div>'
            +'</div>'
            +'</div>'    
            +'<br>'                           
    );
  });
  console.log("success");
 })
 .fail(function() {
  debugger
  console.log("error");
 }) 
}

function BuscarTrailer(id){
  var cadena="";
  var dominio="";
  $.getJSON("https://api.themoviedb.org/3/movie/"+id+"/videos",{api_key: '08142d9351171e224683a4c8cfe1c85f',language:'esn-US'},function(trailer){
$.each(trailer.results,function(i, items) {
      cadena=items.key;
      dominio = "https://www.youtube.com/watch?v="+cadena;      
      window.location.href=dominio;     
    });
  });
}








































































/*Código del boton que reproduce el trailer 
function ejecutarOtroAjax(entrada){
	$.get("https://api.themoviedb.org/3/movie/${query:entrada}/videos",{api_key: '08142d9351171e224683a4c8cfe1c85f', language:'en-US'}, function(data){
		console.log(data);
	});

}
function VerTrailer(){
	var entrada= 299534;
	ejecutarOtroAjax(entrada);
}

*/

/*    //Forma #3
    $.ajax({
    	url:"https://api.themoviedb.org/3/search/movie",
    	api_key: '08142d9351171e224683a4c8cfe1c85f',
    	language:'en-US',
    	query:entrada,
    	page: '1',
    	type: "GET",
    	dataType:"json",
    	success:function(data){
    		console.log(data);
    	}
    });*/