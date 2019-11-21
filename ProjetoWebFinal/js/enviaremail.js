$(document).ready(function(){

	form();

})

function form(){

	$("#enviaremail").click(function(){

		var destino = $("#destino").val();
		var cc = $("#cc").val();
		var assunto = $("#assunto").val();
		var msg = $("#msg").val();
		
		$.ajax({
			type: "POST",
			url: "../php/enviaremail.php",
			dataType: "json",
			data:{

				ds: destino,
				cc: cc,
				as: assunto,
				ms: msg
				


			},
			success: function(retorno){


			}
		})

		alert("Email enviado com sucesso!");
	})
}