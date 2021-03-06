jQuery(document).ready(function() { 
    $( "#tabs" ).tabs();
    $("#Pendientes").hide();

    var html = '<div class="container"><div class="row"><div class="col-md-8"><div class="page-header"><h1><small class="pull-right"><span id="numMensajes1">0</span> mensajes</small> Mensajes </h1></div><div class="comments-list"><div id="nuevosMensajes"></div>';
    $.getJSON('timeline.json', function ( data ) {
        var cont1 = 0;
        for(i=0;i<data.mensajes.length;i++){
            html += '<div class="media"><p class="pull-right"><small>' + data.mensajes[i].fecha + '</small></p><a class="media-left" href="#"><img class="foto" src=' + data.mensajes[i].avatar + '></a><div class="media-body"><h4 class="media-heading user_name">' + data.mensajes[i].autor + '</h4><p>' + data.mensajes[i].titulo + '</p><button class="desplegar" type="button">Desplegar mensaje</button><span class="contenido">' + data.mensajes[i].contenido + '</span><p><small><a href="">Me gusta</a> - <a href="">Compartir</a></small></p></div></div>';
            cont1++;
        }
        html += '</div></div></div></div>';
        $( "#tabs-1" ).html(html);
        $("#numMensajes1").html(cont1);
        $(".contenido").hide();
        var options = {};
        $(".desplegar").click(function(){
            $(this).parent().find(".contenido").show( "fold", options, 500, callback );
            $(this).fadeOut()
        });
    });


    var html2 = '<div class="container"><div class="row"><div class="col-md-8"><div class="page-header"><h1><small class="pull-right"><span id="numMensajes2">0</span> mensajes</small> Mensajes </h1></div><div class="comments-list">';
    $.getJSON('myline.json', function ( data ) {
        var cont2 = 0;
        for(i=0;i<data.mensajes.length;i++){
            html2 += '<div class="media"><p class="pull-right"><small>' + data.mensajes[i].fecha + '</small></p><a class="media-left" href="#"><img class="foto" src=' + data.mensajes[i].avatar + '></a><div class="media-body"><h4 class="media-heading user_name">' + data.mensajes[i].autor + '</h4><p>' + data.mensajes[i].titulo + '</p><button class="desplegar" type="button">Desplegar mensaje</button><span class="contenido">' + data.mensajes[i].contenido + '</span><p><small><a href="">Me gusta</a> - <a href="">Compartir</a></small></p></div></div>';
            cont2++;
        }
        html2 += '</div></div></div></div>';
        $( "#tabs-2" ).html(html2);
        $("#numMensajes2").html(cont2);
        $(".contenido").hide();
        var options = {};
        $(".desplegar").click(function(){
            $(this).parent().find(".contenido").show( "fold", options, 500, callback );
            $(this).fadeOut()
        });
    });

    $.getJSON('update.json', function ( data ) {
        if(data.mensajes.length > 0){
            $("#Pendientes").show();
            $("#num").html(data.mensajes.length);
            $("#Actualizar").click(function(){
                var html3 = "";
                var cont3 = parseInt($("#numMensajes1").html());
                for(i=0;i<data.mensajes.length;i++){
                    html3 += '<div class="media"><p class="pull-right"><small>' + data.mensajes[i].fecha + '</small></p><a class="media-left" href="#"><img class="foto" src=' + data.mensajes[i].avatar + '></a><div class="media-body"><h4 class="media-heading user_name">' + data.mensajes[i].autor + '</h4><p>' + data.mensajes[i].titulo + '</p><button class="desplegar" type="button">Desplegar mensaje</button><span class="contenido">' + data.mensajes[i].contenido + '</span><p><small><a href="">Me gusta</a> - <a href="">Compartir</a></small></p></div></div>';
                    cont3++;
                }
                $( "#nuevosMensajes" ).html(html3);
                $("#numMensajes1").html(cont3);
                $( "#nuevosMensajes" ).addClass( "newClass", 1000, callback1 );

                $(".contenido").hide();
                var options = {};
                $(".desplegar").click(function(){
                    $(this).parent().find(".contenido").show( "fold", options, 500, callback );
                    $(this).fadeOut()
                });
            });
        }  
    });
});

function callback(){
    ;
}

function callback1() {
  setTimeout(function() {
    $( "#nuevosMensajes" ).removeClass( "newClass" );
  }, 1500 );
}


