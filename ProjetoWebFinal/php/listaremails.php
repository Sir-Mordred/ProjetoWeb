<?php

	$xml_string = file_get_contents("../xml/EmailsEntrada.xml");

	$xml_objeto = simplexml_load_string($xml_string);

	$dados["remetente"] = trim($xml_objeto->remetente);
	$dados["assunto"] = trim($xml_objeto->assunto);
	$dados["msg"] = trim($xml_objeto->msg);

	echo json_encode($dados);

?>

