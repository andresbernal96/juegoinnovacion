$(document).ready(function () {
		 $(".pregunta1").hide();
		 $(".pregunta2").hide();
		 $(".pregunta3").hide();
		 $(".pregunta4").hide();
		 $(".pregunta5").hide();

		 $("#jugar").click(function () {
				 $(".principal").hide();
				 $(".pregunta1").show();
			});
		 $("#sc1").click(function () {
					$(".pregunta1").hide();
					$(".pregunta2").show();
			});
			$("#sc2").click(function () {
 					$(".pregunta2").hide();
 					$(".pregunta3").show();
 			});
			$("#sc3").click(function () {
 					$(".pregunta3").hide();
 					$(".pregunta4").show();
 			});
			$("#sc4").click(function () {
 					$(".pregunta4").hide();
 					$(".pregunta5").show();
 			});
			$("#sc5").click(function () {
 					$(".pregunta5").hide();
 					$(".felicitaciones").show();
 			});
		
   });
