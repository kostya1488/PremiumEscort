<?php

// if($_POST)
// {
//     $instagram = '';
//     if(empty($_POST['insta'])) { $instagram = "Не указала"; } else { $instagram = $_POST['insta']; }
//     $exp = '';
//     if(empty($_POST['exp'])) { $exp = "Не указала"; } else { $exp = $_POST['exp']; }
//     $to = "matvienkoigor956@gmail.com";
//     $subject = "Анкета (Premium Escort)";
//     $message = '<span style="font-weight:bold;color:#007610;">Новая анкета, заполненная на сайте</span><br>
//     Имя: <span style="font-weight:bold;color:#B38600;">'.$_POST['name'].'</span><br>
//     Телефон: <span style="font-weight:bold;color:#B38600;"> '.$_POST['phone'].'</span><br>
//     Город: <span style="font-weight:bold;color:#B38600;"> '.$_POST['city'].'</span><br>
//     Возраст: <span style="font-weight:bold;color:#B38600;"> '.$_POST['age'].'</span><br>
//     Instagram: <span style="font-weight:bold;color:#B38600;"> '.$instagram.'</span><br>
//     Опыт в эскорте: <span style="font-weight:bold;color:#B38600;">'.$exp.'</span>';
//     $headers = "Content-type: text/html; charset=UTF-8 \r\n";
//     $headers .= "From: <agent@premuim-escort.com>\r\n";

//     $result = mail($to, $subject, $message, $headers);

//     if ($result){ echo "<center>Если ты нам подходишь, мы свяжемся с тобой для обсуждения всех деталей сотрудничества. Работа в досуге для девушек – это твой шанс стать финансово независимой, успешной и, быть может, даже знаменитой.</center>"; }
// }
$to = 'matvienkoigor956@gmail.com';

if ( isset( $_POST['sendMail'] ) ) {
	$name = substr( $_POST['name'], 0, 64 );
	$age = substr( $_POST['age'], 0, 64 );
	$city = substr( $_POST['city'], 0, 64 );
	$tel = substr( $_POST['tel'], 0, 64 );
    $insta = substr( $_POST['insta'], 0, 64 );
	$exp = substr( $_POST['exp'], 0, 64 );	

if($_FILES)
{
	$filepath = array();
	$filename = array();
	$file2 = array();
	$i = 0;
		foreach ($_FILES["file"]["error"] as $key => $error) {
			if ($error == UPLOAD_ERR_OK) {
				$filename[$i][0] = $_FILES["file"]["tmp_name"][$key];
				$filename[$i][1] = $_FILES["file"]["name"][$key];
				$i++;
			}
		}
	}

	$body = "Имя: ".$name."\r\n";
    $body .= "Возраст: ".$age."\r\n";
    $body .= "Город проживания: ".$city."\r\n";
    $body .= "Номер телефона: ".$tel."\r\n";
    $body .= "Инстаграм: ".$insta."\r\n";
    $body .= "Опыт в данной сфере: ".$exp;
	send_mail($to, $body, $email, $filename);
}



if ( isset( $_POST['sendMessage'] ) ) {
	$name = substr( $_POST['name'], 0, 64 );
	$email = substr( $_POST['email'], 0, 64 );
	$mess = substr( $_POST['message'], 0, 128 );	


	$body = "Имя: ".$name."\r\n";
    $body .= "Возраст: ".$email."\r\n";
    $body .= "Город проживания: ".$mess
	send_mail($to, $body, $email);
}




// Вспомогательная функция для отправки почтового сообщения с вложением
function send_mail($to, $body, $email, $filename)
{
	$subject = 'Заявка с сайта PremiumEscort';
	$boundary = "--".md5(uniqid(time())); // генерируем разделитель
	$headers = "From: ".$email."\r\n";	 
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .="Content-Type: multipart/mixed; boundary=\"".$boundary."\"\r\n";
	$multipart = "--".$boundary."\r\n";
	$multipart .= "Content-type: text/plain; charset=\"utf-8\"\r\n";
	$multipart .= "Content-Transfer-Encoding: quoted-printable\r\n\r\n";

	$body = $body."\r\n\r\n";
 
	$multipart .= $body;
	foreach ($filename as $key => $value) {
		$fp = fopen($value[0], "r"); 
		$content = fread($fp, filesize($value[0]));
		fclose($fp);
		$file .= "--".$boundary."\r\n";
		$file .= "Content-Type: application/octet-stream\r\n";
		$file .= "Content-Transfer-Encoding: base64\r\n";
		$file .= "Content-Disposition: attachment; filename=\"".$value[1]."\"\r\n\r\n";
		$file .= chunk_split(base64_encode($content))."\r\n";
	}
	$multipart .= $file."--".$boundary."--\r\n";
	mail($to, $subject, $multipart, $headers);
}
?>