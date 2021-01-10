<?php
/* Обработчик присланных данных по заказу
*/

function debugg($data)
{ echo '<pre>' . print_r($data, 1) . '</pre>'; }

$method = $_SERVER['REQUEST_METHOD'];

//echo $method;
//debugg($_POST);

//Script Foreach
$c = true;
$message = '';
if ( $method === 'POST' ) {

	$project_name = htmlspecialchars($_POST["project_name"]);
	$admin_email  = htmlspecialchars($_POST["admin_email"]);
	$form_subject = htmlspecialchars($_POST["form_subject"]);
	$user_email  = htmlspecialchars($_POST["user_email"]);
	/*$project_name = trim($_POST["project_name"]);
	$admin_email  = trim($_POST["admin_email"]);
	$form_subject = trim($_POST["form_subject"]);
	$user_email  = trim($_POST["user_email"]);*/

	foreach ( $_POST as $key => $value ) {
		if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
			$message .= "
			" . ( ($c = !$c) ? '<tr>':'<tr>' ) . "
				<td style='padding: 10px; width: auto;'><b>$key:</b></td>
				<td style='padding: 10px;width: 100%;'>$value</td>
			</tr>
			";
		}
	}
} else if ( $method === 'GET' ) {

	$project_name = trim($_POST["project_name"]);
	$admin_email  = trim($_POST["admin_email"]);
	$form_subject = trim($_POST["form_subject"]);
	$user_email  = trim($_POST["user_email"]);

	foreach ( $_GET as $key => $value ) {
		if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
			$message .= "
			" . ( ($c = !$c) ? '<tr>':'<tr>' ) . "
				<td style='padding: 10px; width: auto;'><b>$key:</b></td>
				<td style='padding: 10px;width: 100%;'>$value</td>
			</tr>
			";
		}
	}
}

$message = "<table style='width: 50%;'>$message</table>";

function adopt($text) {
	return '=?UTF-8?B?'.Base64_encode($text).'?=';
}

$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: '.adopt($form_subject).' <'.$user_email.'>' . PHP_EOL .
'Reply-To: '.$admin_email.'' . PHP_EOL;
//'From: '.adopt($project_name).' <'.$admin_email.'>' . PHP_EOL .

mail($user_email, adopt($form_subject), $message, $headers );
//mail($admin_email, adopt($form_subject), $message, $headers );
