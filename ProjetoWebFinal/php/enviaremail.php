<?php
    
    

	$destino = $_POST["ds"];
	$mail = $_POST["email"];
	$cc = $_POST["cc"];
	$assunto = $_POST["as"];
	$msg = $_POST["ms"];
	

	$xml = new DOMDocument("1.0");

	$dados = $xml->createElement("dados");

	$xml_email = $xml->createElement("email", $mail);
	$xml_destino = $xml->createElement("destino", $destino);
	$xml_cc = $xml->createElement("cc", $cc);
	$xml_assunto = $xml->createElement("assunto", $assunto);
	$xml_msg = $xml->createElement("msg", $msg);
	
	$dados->appendChild($xml_destino);
	$dados->appendChild($xml_cc);
	$dados->appendChild($xml_assunto);
	$dados->appendChild($xml_msg);
	

	$xml->appendChild($dados);

	$xml->save("../xml/enviados/dados.xml");

	echo json_encode("xml criado");

	
	

  
?>