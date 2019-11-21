<?php

   $email = $_POST["usuario"];

   $a = file_get_contents("../xml/usuarios/".$email.".xml");
   $b = simplexml_load_string($a);
   
   $retorno["email"] = trim($b->email);
   $retorno["nome"] = trim($b->nome);
   $retorno["sobrenome"] = trim($b->sobrenome);
   $retorno["senha"] = trim($b->senha);
   
   echo json_encode($retorno);
?>
