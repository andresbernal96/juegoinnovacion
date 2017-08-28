
    $(document).ready(function () {
        $("#Pag2").hide();
        $("#Pag3").hide();
        $("#Pag4").hide();
        $("#indice").hide();
        
        $("#indice1").click(function () {
            $("#Pag1").hide();
            $("#indice").show();
        });
        $("#indice2").click(function () {
            $("#Pag2").hide();
            $("#indice").show();
        });
        

        $("#index1").click(function () {
            $("#indice").hide();
            $("#Pag1").show();
        });
        $("#index2").click(function () {
            $("#indice").hide();
            $("#Pag2").show();
        });

        $("#index3").click(function () {
            $("#indice").hide();
            $("#Pag3").show();
        });
        $("#index4").click(function () {
            $("#indice").hide();
            $("#Pag4").show();
        });

        $("#btn14").click(function () {
            $("#Pag1").hide();
            $("#Pag4").show();
        });
        $("#btn12").click(function () {
            $("#Pag1").hide();
            $("#Pag2").show();
        });

        $("#btn21").click(function () {
            $("#Pag2").hide();
            $("#Pag1").show();
        });
        $("#btn23").click(function () {
            $("#Pag2").hide();
            $("#Pag3").show();
        });
        
        $("#btn32").click(function () {
            $("#Pag3").hide();
            $("#Pag2").show();
        });
        $("#btn34").click(function () {
            $("#Pag3").hide();
            $("#Pag4").show();
        });
        
        $("#btn43").click(function () {
            $("#Pag4").hide();
            $("#Pag3").show();
        });
        $("#btn41").click(function () {
            $("#Pag4").hide();
            $("#Pag1").show();
        });
    });
