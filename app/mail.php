<?php

$admin_email = "dessid@yandex.ru";
$project_name  = "Breeze Cosmetics";
$form_subject   = "Сообщение с сайта \"$project_name\"";

$fresh_type = trim($_POST["fresh-type"]);
$fresh_color = trim($_POST["fresh-color"]);
$fresh_mode = trim($_POST["fresh-mode"]);
$fresh_delivery = trim($_POST["fresh-delivery"]);
$fresh_installation = trim($_POST["fresh-installation"]);
$customer_name = trim($_POST["customer-name"]);
$customer_phone = trim($_POST["customer-phone"]);
$customer_question = trim($_POST["customer-question"]);
$customer_howmany = trim($_POST["customer-howmany"]);
$form_name = trim($_POST["form-name"]);

$message = "Форма: $form_name <br>";
if($customer_name) {$message.="Имя: $customer_name <br>"};
// Имя: $customer_name <br>
// Телефон: $customer_phone <br>
// Вопрос: $customer_question <br>
// Количество штук: $customer_howmany <br>
// Тип освежителя: $fresh_type <br>
// Цвет освежителя: $fresh_color <br>
// Форма освежителя: $fresh_mode <br>
// Доставка: $fresh_delivery <br>
// Установка: $fresh_installation <br>
// ";

function adopt($text) {
	return '=?UTF-8?B?'.Base64_encode($text).'?=';
}

$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: '.adopt($project_name).' <'.$admin_email.'>' . PHP_EOL .
'Reply-To: '.$admin_email.'' . PHP_EOL;

mail($admin_email, adopt($form_subject), $message, $headers);

?>
