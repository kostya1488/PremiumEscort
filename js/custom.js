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

function shows_selected_file(id) {
    document.getElementById(id).addEventListener('change', handleFileSelect, false);

    function handleFileSelect(evt) {
        var file = evt.target.files; // FileList object
        var f = file[0];

        var reader = new FileReader();
        // Closure to capture the file information.
        reader.onload = (function(theFile) {
            return function(e) {

                var span_in_lebel = document.createElement('span');
                span_in_lebel.innerHTML = ['<img class="thumb" title="', escape(theFile.name), '" src="', e.target.result, '" />'].join('');

                var lebel_for_input = $("[for=" + id + "]")[0];
                remove_ContentAndPadding(lebel_for_input);

                lebel_for_input.insertBefore(span_in_lebel, null);

            };
        })(f);
        // Read in the image file as a data URL.
        reader.readAsDataURL(f);
    }

}


//-------------------------------------------------------------------------------------------------------------------

function remove_ContentAndPadding(element) {
    element.innerHTML = "";
    element.style.padding = "0";
}