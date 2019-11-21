$(document).ready(function(){
 // Definindo caminho a ser seguido quando a opção for selecionada
    $("#salvar").click(function(){

        // Conferindo existencia de campos vazios


        // Fazendo chamada ajax caso os inputs estejam corretos

        var email = $("#E-mail").val();
        var nome = $("#Nome").val();
        var sobrenome = $("#Sobrenome").val();
        var senha = $("#Senha").val()
        var confirmarsenha = $("#ConfirmarSenha").val()

        if(nome =="" || email == "" || sobrenome =="" || senha == "" || confirmarsenha == ""){
            alert("todos os campos devem ser preenchidos");
        }
        if(senha != confirmarsenha){
            alert("As senhas não conferem");
        }else{
            $.ajax({
                type: "POST",
                url: "../php/cadastro.php",
                dataType: "json",
                data: {
                    email: email,
                    nome: nome,
                    sobrenome: sobrenome,
                    senha: senha
                },
                success:function(response) {
                    alert(response);
                    $(location).attr('href', '../index.html');
                }
            });
        }
    });
});