$(document).ready(function(){


	$("#caixaentrada").click(function(){

//para a Lista de Emails da Caixa de Entrada: 
	var remetente = $("#remetente").val();
	var assunto = $("#assunto").val();
	var msg = $("#msg").val();

	$.ajax({
		type: "POST",
		url: "../php/listaremails.php",
		dataType: "json",
		data:{
			ajaxRemetente: remetente,
			ajaxAssunto: assunto,
			ajaxMsg: msg
		},
		success: function(retorno){
			var conteudo = "";
				var c = 0;

				while(c < 20){
					
					conteudo += "<table class='fundo'>";
					conteudo += "<tr >";
					conteudo += "<td class='fundo'>" + "<img src = '../imagens/usericon.png' class='icone'>" + "</td>";
					conteudo += "<td class='fundo'>" + "<b>"+ "De: " + retorno.remetente + "</b>" + "</td>";
					conteudo += "<td class='fundo'>" + "    " + "</td>";
					conteudo += "<td class='fundo'>" + "<b>" + retorno.assunto + "</b>" + "</td>";
					conteudo += "<td class='fundo'>" + "    " + "</td>";
					conteudo += "<td class='fundo'>" + retorno.msg + "</td>";
					conteudo += "</tr>";

					conteudo += "</table>";
					

					c++;

		}
		$("#listinha").html(conteudo);
	}
	})


	$("#caixaenviados").click(function(){

		$.ajax({
			type:"POST",
			dataType: "json",
			url:"../php/listarenviados.php",
			
			success: function(retorno){

				var conteudo = "";
				var c = 0;

				while(c < 20){
					
					conteudo += "<table class='fundo'>";
					conteudo += "<tr >";
					conteudo += "<td class='fundo'>" + "<img src = '../imagens/usericon.png' class='icone'>" + "</td>";
					conteudo += "<td class='fundo'>" + "<b>" + "De: teste@hotmail.com" + "</b>" + "</td>";
					conteudo += "<td class='fundo'>" + "    " + "</td>";
					conteudo += "<td class='fundo'>" + "<b>"+ "Assunto: " + retorno.assunto + "</b>" + "</td>";
					conteudo += "<td class='fundo'>" + "    " + "</td>";
					conteudo += "<td class='fundo'>" + retorno.msg + "</td>";
					conteudo += "</tr>";

					conteudo += "</table>";
					
					c++;
				}

				$("#listinha").html(conteudo);
			}
		})
	})
})
})