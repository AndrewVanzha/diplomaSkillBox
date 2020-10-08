<?php

$post = (!empty($_POST)) ? true : false;

//echo '<pre>' . print_r($_POST, 1) . '</pre>';
//$done = 'OK-1';
//echo json_encode($done);

// Проверка телефона
function ValidateTel($valueTel) {
  $regexTel = "/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/";
  if($valueTel == "") {
    return false;
  } else {
    $string = preg_replace($regexTel, "", $valueTel);
  }
  return empty($string) ? true : false;
}

$admin_email = "andreww1762@gmail.com";
$error = '';
if($post) {
  $email = trim($_POST['user_email']);
  $email = htmlspecialchars($_POST['user_email']);
  $name = htmlspecialchars($_POST['user_name']);
  $surname = htmlspecialchars($_POST['user_surname']);
  $tel = htmlspecialchars($_POST['user_tel']);
  $subject = htmlspecialchars($_POST['form_subject']);

  if(!$surname) {
    $error .= 'Пожалуйста, введите ваше имя<br />';
  }

  if(!$email) {
    $error .= "Пожалуйста, введите email<br />";
  }
  
  if(!$tel) {
    $error .= "Введите корректный номер телефона<br />";
  }

  /*if(!$error) {
    if(!$company || strlen($company) < 1) {
        $error .= "Введите ваше сообщение<br />";
    }
  }*/

  if(!$error) {
    $name_tema = "=?utf-8?b?". base64_encode($name) ."?=";

    $subject1 = "=?utf-8?b?". base64_encode($subject) ."?=";
      
    $mess ="\n\nИмя: ".$name."\n\nФамилия: ".$surname."\n\nТелефон: " .$tel."\n\nE-mail: " .$email."\n\n";

    $header = "MIME-Version: 1.0" . PHP_EOL .
      "Content-Type: text/html; charset=utf-8" . PHP_EOL .
      'From: '.adopt($subject).' <'.$admin_email.'>' . PHP_EOL .
      'Reply-To: '.$admin_email.'' . PHP_EOL;

    $mail = mail($admin_email, $subject1, $mess, $header);

    /*if($mail) {
      echo 'OK-2';
    }*/
      //echo '<div class="notification_error">OK</div>';
      echo 'OK';

  } else {
    echo $error;
  }

  $done = 'OK-3';
  //echo json_encode($done);

}

function adopt($text) {
    return '=?UTF-8?B?'.Base64_encode($text).'?=';
}
?>