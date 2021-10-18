/**
 * Category
 */

function traerInformacionCategorias(){
    $.ajax({
        url:"http://140.238.239.19:8080/api/Category/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta);
        }
    });
}

function pintarRespuesta(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado1").html(myTable);
}

function guardarInformacionCategorias(){
    let var2 = {
        name:$("#Cname").val(),
        description:$("#Cdescription").val()
        };

        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),
        
        url:"http://140.238.239.19:8080/api/Category/save",
        
        success:function(response) {
            console.log(response);
        console.log("Se guardo correctamente");
        alert("Se guardo correctamente");
        window.location.reload()
        },
        error: function(jqXHR, textStatus, errorThrown) {
        window.location.reload()
        alert("No se guardo correctamente");
        }
    });
}

/**
 * Skate
 */

function traerInformacionSkates(){
    $.ajax({
        url:"http://140.238.239.19:8080/api/Skate/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaSkates(respuesta);
        }
    });
}

function pintarRespuestaSkates(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].brand+"</td>";
        myTable+="<td>"+respuesta[i].year+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado2").html(myTable);
}

function guardarInformacionSkates(){
    let var3 = {
        name:$("#Sname").val(),
        brand:$("#Sbrand").val(),
        year:$("#Syear").val(),
        description:$("#Sdescription").val()
        };

        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var3),
        
        url:"http://140.238.239.19:8080/api/Skate/save",
        
        success:function(response) {
            console.log(response);
        console.log("Se guardo correctamente");
        alert("Se guardo correctamente");
        window.location.reload()
        },
        error: function(jqXHR, textStatus, errorThrown) {
        window.location.reload()
        alert("No se guardo correctamente");
        }
    });
}

/**
 * CLIENTS
 */

function traerInformacionClients(){
    $.ajax({
        url:"http://140.238.239.19:8080/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaClients(respuesta);
        }
    });
}

function pintarRespuestaClients(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].email+"</td>";
        myTable+="<td>"+respuesta[i].password+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].age+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado3").html(myTable);
}

function guardarInformacionClients(){
    let var4 = {
        email:$("#CLemail").val(),
        password:$("#CLpassword").val(),
        name:$("#CLname").val(),
        age:$("#CLage").val()
        };

        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var4),
        
        url:"http://140.238.239.19:8080/api/Client/save",
        
        success:function(response) {
            console.log(response);
        console.log("Se guardo correctamente");
        alert("Se guardo correctamente");
        window.location.reload()
        },
        error: function(jqXHR, textStatus, errorThrown) {
        window.location.reload()
        alert("No se guardo correctamente");
        }
    });
}
/*
 * MESSAGES
 */

function traerInformacionMessages(){
    $.ajax({
        url:"http://140.238.239.19:8080/api/Message/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaMessages(respuesta);
        }
    });
}

function pintarRespuestaMessages(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].messageText+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado4").html(myTable);
}

function guardarInformacionMessages(){
    let var5 = {
        messageText:$("#MmessageText").val(),
        };

        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var5),
        
        url:"http://140.238.239.19:8080/api/Message/save",
        
        success:function(response) {
        console.log(response);
        console.log("Se guardo correctamente");
        alert("Se guardo correctamente");
        window.location.reload()
        },
        error: function(jqXHR, textStatus, errorThrown) {
        window.location.reload()
        alert("No se guardo correctamente");
        }
    });
}

/**
 * RESERVATIONS
 */

function traerInformacionReservations(){
    $.ajax({
        url:"http://140.238.239.19:8080/api/Reservation/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaReservations(respuesta);
        }
    });
}

function pintarRespuestaReservations(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].startDate+"</td>";
        myTable+="<td>"+respuesta[i].devolutionDate+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado5").html(myTable);
}

function guardarInformacionReservations(){
    let var6 = {
        startDate:$("#RstartDate").val(),
        devolutionDate:$("#RdevolutionDate").val(),
        };

        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var6),
        
        url:"http://140.238.239.19:8080/api/Reservation/save",
        
        success:function(response) {
        console.log(response);
        console.log("Se guardo correctamente");
        alert("Se guardo correctamente");
        window.location.reload()
        },
        error: function(jqXHR, textStatus, errorThrown) {
        window.location.reload()
        alert("No se guardo correctamente");
        }
    });
}