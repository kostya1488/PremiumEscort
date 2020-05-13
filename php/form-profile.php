<?php
if($_POST)
{
    $instagram = '';
    if(empty($_POST['insta'])) { $instagram = "Не указала"; } else { $instagram = $_POST['insta']; }
    $exp = '';
    if(empty($_POST['exp'])) { $exp = "Не указала"; } else { $exp = $_POST['exp']; }
    $to = "ignator@ro.ru";
    $subject = "Анкета (Premium Escort)";
    $message = '<span style="font-weight:bold;color:#007610;">Новая анкета, заполненная на сайте</span><br>
    Имя: <span style="font-weight:bold;color:#B38600;">'.$_POST['name'].'</span><br>
    Телефон: <span style="font-weight:bold;color:#B38600;"> '.$_POST['phone'].'</span><br>
    Город: <span style="font-weight:bold;color:#B38600;"> '.$_POST['city'].'</span><br>
    Возраст: <span style="font-weight:bold;color:#B38600;"> '.$_POST['age'].'</span><br>
    Instagram: <span style="font-weight:bold;color:#B38600;"> '.$instagram.'</span><br>
    Опыт в эскорте: <span style="font-weight:bold;color:#B38600;">'.$exp.'</span>';
    $headers = "Content-type: text/html; charset=UTF-8 \r\n";
    $headers .= "From: <agent@premuim-escort.com>\r\n";

    $result = mail($to, $subject, $message, $headers);

    if ($result){ echo "<center>Если ты нам подходишь, мы свяжемся с тобой для обсуждения всех деталей сотрудничества. Работа в досуге для девушек – это твой шанс стать финансово независимой, успешной и, быть может, даже знаменитой.</center>"; }
}
?>