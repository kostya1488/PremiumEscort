<?php
$recepient = "matvienkoigor956@gmail.com";
$sitename = "Premium Escort";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);

$message = "Меня зовут: $name \nМой номер: $phone";

$pagetitle = "Заказали звонок с сайта: \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>