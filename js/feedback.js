$(function() {
    document.getElementById('fprofile').addEventListener('submit', function(evt) {
        var http = new XMLHttpRequest(),
            f = this;
        var th = $(this);
        evt.preventDefault();
        http.open("POST", "php/form-profile.php", true);
        http.onreadystatechange = function() {
            if (http.readyState == 4 && http.status == 200) {
                hideShowSection('fprofile', 'anketaAfterSend');
                // alert(http.responseText);
                if (http.responseText.indexOf(f.name.value) == 0) { // очистить поля формы, если в ответе первым словом будет имя отправителя (name)
                    th.trigger("reset");
                }
            }
        }
        http.onerror = function() {
            alert('Ошибка, попробуйте еще раз');
        }
        http.send(new FormData(f));
    }, false);

});

function ajaxFormRequest(form_id, url) {
    $("#" + form_id).submit(function() {
        $.ajax({
            type: "POST",
            url: url,
            data: $(this).serialize()
        }).done(function() {
            switch (form_id) {
                case 'fcontact':
                    hideShowSection('fcontact', 'fcontactAfterSend');
                    break
                case 'fcontact2':
                    hideShowSection('fcontact2', 'fcontactAfterSend2');
                    break
                case 'fcallback':
                    $('#fcallback').css('display', 'none');
                    $('#callbackResult').html('<h5>Спасибо! Заявка успешно отправлена.<br>Мы свяжемся с тобой в ближайшее время.</h5>');
                    break
                case 'fcallback2':
                    $('#callbackResult2').html('<h6>Обратный звонок заказан!</h6>');

                    break
                case 'fprofile':
                    hideShowSection('fprofile', 'anketaAfterSend');
                    break
                default:
                    alert('ERROR')
                    break
            }
        });
        return false;
    })
}
//---------------------

function hideShowSection(elemHide, elemshow) {
    document.getElementById(elemHide).style.display = 'none';
    document.getElementById(elemshow).style.display = 'block';

}