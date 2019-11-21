<?php

	$xml_string = file_get_contents("../xml/enviados/dados.xml");

	$xml_objeto = simplexml_load_string($xml_string);

	$dados["destino"] = trim($xml_objeto->destino);
	$dados["cc"] = trim($xml_objeto->cc);
	$dados["assunto"] = trim($xml_objeto->assunto);
	$dados["msg"] = trim($xml_objeto->msg);
	echo json_encode($dados);

?>

