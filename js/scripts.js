$(document).ready(function() {
    $('.burger_menu').click(function() {
        $('.burger_menu,.menu').toggleClass('active');
        $('.block_submenu').removeClass('active');
        $('body').toggleClass('lock');
    });

    $('.menu_tasks').click(function() {
        $('.block_submenu').addClass('active');
    });

    $('.submenu_tasks_back').click(function() {
        $('.block_submenu').removeClass('active');
    });

    $('.title_description').click(function() {
        $(this).closest('.selector_description').children('.block_description').slideToggle({duration: 500});
        $(this).children('.arrow_description').toggleClass('rotate');
    });

    $('.block_top').on('click', function() {
        $('html, body').animate({
          scrollTop: 0,
        }, 500);
    });

    $(window).scroll(function() {
        const height = $(window).scrollTop(); 
        if(height > 200){
            $('.block_top').addClass('visible');
        } else {
            $('.block_top').removeClass('visible');
        }
    })
});

