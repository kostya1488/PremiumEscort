// Back to top
$(document).ready(function() {
    width = $(window).width();
    if (width > 991) {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 400) {
                $('#back-to-top').fadeIn();
                $('#s-icons').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
                $('#s-icons').fadeOut();
            }
        });
        $('#back-to-top').click(function() {
            $('#back-to-top').tooltip('hide');
            $('#s-icons').tooltip('hide');
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return false;
        });
        $('#back-to-top').tooltip('show');
        $('#s-icons').tooltip('show');
    }
});
// Input file
var inputs = document.querySelectorAll('.inputfile');
Array.prototype.forEach.call(inputs, function(input) {
    var label = input.nextElementSibling,
        labelVal = label.innerHTML;
    input.addEventListener('change', function(e) {
        var fileName = '';
        if (this.files && this.files.length > 1)
            fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
        else
            fileName = e.target.value.split('\\').pop();
        if (fileName)
            label.querySelector('span').innerHTML = fileName;
        else
            label.innerHTML = labelVal;
    });
});

// Подсвечивание активной области меню
jQuery(window).scroll(function() {
    var $sections = $('section');
    $sections.each(function(i, el) {
        var top = $(el).offset().top - 150;
        var bottom = top + $(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
        if (scroll > top && scroll < bottom) {
            $('a.is-selected').removeClass('is-selected');
            $('a[href="#' + id + '"]').addClass('is-selected');
        }
    });
});

// Fixed menu
$(window).scroll(function() {
    if (width > 991) {
        var window_top = $(window).scrollTop() + 1;
        if (window_top > 50) {
            $('.main_menu').addClass('menu_fixed animated fadeInDown');
        } else {
            $('.main_menu').removeClass('menu_fixed animated fadeInDown');
        }
    }
});
// Hide #
$('.hh').on('click', function(e) {

    e.preventDefault();

    var target = $(this).attr('href'),
        offset = $(target).offset().top;

    $(document).scrollTop(offset);

});
// Right icons (replace icon)
$(document).ready(function() {
    $('#s-icons').click(function() {
        $('.navbar-nav').toggleClass("show");
        $("i", this).toggleClass("fa-phone-alt fa-times");
    });
    $('.panel-heading').click(function() {
        $("i", this).toggleClass("fa-plus fa-times");
    });
});
// Hide elements in menu after scroll
$(window).scroll(function() {
    if ($(window).scrollTop() > 150) {
        $('.navbar').addClass('scroll');
    } else {
        $('.navbar').removeClass('scroll')
    }
});

// Send data from forms and callback

// function checkParams() {
//     var myname = $('#myname').val();
//     var myage = $('#myage').val();
//     var myphone = $('#myphone').val();
//     var mycity = $('#mycity').val();

//     if (myname.length != 0 && myage.length != 0 && myphone.length != 0 && mycity.length != 0) {
//         $('#btn').removeAttr('disabled');
//         $('#btn').removeAttr('title');
//     } else {
//         $('#btn').attr('disabled', 'disabled');
//     }
// }

// Send data from forms and callback

function ajaxFormRequest(result_id, form_id, url) {
    jQuery.ajax({
        url: url,
        type: "POST",
        dataType: "html",
        data: jQuery("#" + form_id).serialize(),
        success: function(response) {
            document.getElementById(result_id).innerHTML = response;
        },
        error: function(response) {
            document.getElementById(result_id).innerHTML = "<b>При отправке данных возникла ошибка</b>";
        }
    });

    $(':input', '#' + form_id)
        .not(':button, :submit, :reset, :hidden')
        .val('')
        .removeAttr('checked')
        .removeAttr('selected');
}
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



// Как только страничка загрузилась 
window.onload = function() {
        // проверяем поддерживает ли браузер FormData 
        if (!window.FormData) {
            alert("Браузер не поддерживает загрузку файлов на этом сайте");
        }
    }
    // var url = "http://www.dr05045.ho.ua/escort/indexAfterSend.html";

jQuery(document).ready(function() {
    // =validation
    jQuery("#fprofile").validate({
        submitHandler: function(form) {
            var form = document.forms.fprofile,
                formData = new FormData(form),
                xhr = new XMLHttpRequest();

            xhr.open("POST", "php/form-profile.php");

            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        // $(location).attr('href', url);
                        hideAnketaSection();
                        return false
                    }
                }
            };
            xhr.send(formData);
        }
    });

    jQuery("#formSendMessage").validate({
        submitHandler: function(form) {
            var form = document.forms.fprofile,
                formData = new FormData(form),
                xhr = new XMLHttpRequest();

            xhr.open("POST", "php/form-profile.php");

            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        // $(location).attr('href', url);
                        return false
                    }
                }
            };
            xhr.send(formData);
        }
    });

})


function sendSuccess(callback) {
    jQuery(callback).find("form fieldset").html(thank);
    startClock();

}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Read more for reviews
function readMore(iddots, idmore, idmyBtn) {
    var dots = document.getElementById(iddots);
    var moreText = document.getElementById(idmore);
    var btnText = document.getElementById(idmyBtn);

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Показать полностью";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Скрыть";
        moreText.style.display = "inline";
    }
}
//-------------------------------------------------------------------------------------------------------------------
// function editAnketa() {
//     $(location).attr('href', 'http://www.dr05045.ho.ua/escort/#anketa');

// }
// hide form after send
function hideform() {
    document.forms.formAnketa.style.display = "none";
}
// Спасибо! Анкета успешно отправлена.
// Если ты нам подходишь, мы обязательно свяжемся с тобой для обсуждения всех деталей.
function hideAnketaSection() {
    document.getElementById('fprofile').style.display = 'none';
    document.getElementById('anketaAfterSend').style.display = 'block';

}

function showAnketaSection() {
    document.getElementById('anketaAfterSend').style.display = 'none';
    document.getElementById('fprofile').style.display = 'block';
}