<?php
//Importamos las variables del formulario de contacto
@$nombre = addslashes($_POST['nombre']);
@$email = addslashes($_POST['email']);
@$web = addslashes($_POST['web']);
@$mensaje = addslashes($_POST['mensaje']);
 
//Preparamos el mensaje de contacto
$cabeceras = "From: $email\n" //La persona que envia el correo
 . "Reply-To: $email\n";
$asunto = "Mensaje desde la pagina Web"; //asunto aparecera en la bandeja del servidor de correo
$email_to = "lopeztobal@gmail.com"; //cambiar por tu email
$contenido = "$nombre ha enviado un mensaje desde la web www.miweb.com\n"
. "\n"
. "Nombre: $nombre\n"
. "Email: $email\n"
. "Sitio Web: $web\n"
. "Mensaje: $mensaje\n"
. "\n";
 
//Enviamos el mensaje y comprobamos el resultado
if (@mail($email_to, $asunto ,$contenido ,$cabeceras )) {
 
//Si el mensaje se envía muestra una confirmación
die ("Gracias, su mensaje se envió correctamente.");
echo "Redireccionando a la web de contacto\n";
sleep(2);
header ("Location: http://matracas.net46.net/ProblemasMatracas/Contacto.html");
}else{
 
//Si el mensaje no se envía muestra el mensaje de error
die ("Error: Su información no pudo ser enviada, intente más tarde");
echo "Redireccionando a la web de contacto\n";
sleep(2);
header ("Location: http://matracas.net46.net/ProblemasMatracas/Contacto.html");
}
?>
