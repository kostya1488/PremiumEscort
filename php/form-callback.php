<?php
if($_POST)
    {
    $to = "matvienkoigor956@gmail.com";
    $subject = "Письмо с Premium Escort";
    $message = '<span style="font-weight:bold;color:#007610;">Новая заявка "Перезвонить мне"</span><br>
    Имя: <span style="font-weight:bold;color:#B38600;">'.$_POST['name'].'</span><br>
    Телефон: <span style="font-weight:bold;color:#B38600;">'.$_POST['phone'].'</span>';
    $headers = "Content-type: text/html; charset=UTF-8 \r\n";
    $headers .= "From: <agent@premuim-escort.com>\r\n";
    $result = mail($to, $subject, $message, $headers);

    if ($result){
        echo "<center>Спасибо, мы скоро перезвоним!</center>";
    }
    }
?>