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



// Send data from forms

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
                    $('#callbackResult').html('<h6>Обратный звонок заказан!</h6>');
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

jQuery(document).ready(function() {
    // var errorTxt = 'Ошибка отправки';
    jQuery("#fprofile").validate({
        submitHandler: function(form) {
            var form = document.forms.fprofile,
                formData = new FormData(form),
                xhr = new XMLHttpRequest();

            xhr.open("POST", "php/form-profile.php");

            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        hideShowSection('fprofile', 'anketaAfterSend');
                        return false
                    }
                }
            };
            xhr.send(formData);
        }
    });
})

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

function hideShowSection(elemHide, elemshow) {
    document.getElementById(elemHide).style.display = 'none';
    document.getElementById(elemshow).style.display = 'block';

}