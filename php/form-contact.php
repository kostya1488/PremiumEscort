<?php
if($_POST)
    {
    $to = "matvienkoigor956@gmail.com";
    $subject = "Письмо с Premium Escort";
    $message = '<span style="font-weight:bold;color:#007610;">Письмо было отправлено через контактную форму</span><br>
    Имя: <span style="font-weight:bold;color:#B38600;">'.$_POST['name'].'</span><br>
    Почта: <span style="font-weight:bold;color:#B38600;"> '.$_POST['email'].'</span><br>
    Сообщение: <span style="font-weight:bold;color:#B38600;">'.$_POST['comm'].'</span>';
    $headers = "Content-type: text/html; charset=UTF-8 \r\n";
    $headers .= "From: <agent@premuim-escort.com>\r\n";
    $result = mail($to, $subject, $message, $headers);

    if ($result){
        echo "<center>Спасибо, сообщение отправлено!</center>";
    }
    }
?>