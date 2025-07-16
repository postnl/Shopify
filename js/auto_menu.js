$(document).ready(function () {
    var indexHtml = '';
    indexHtml += '<ul class="nav">';
    $("h1").each(function () {
        if (typeof $(this).attr('id') !== 'undefined') {
            indexHtml += '<li><a href="#' + $(this).attr("id") + '"><b>' + $(this).html() + '</b></a>';

            indexHtml += '<ul class="nav h2item">';
            $("h2[id^='" + $(this).attr("id") + "_']").each(function () {
                if (typeof $(this).attr('id') !== 'undefined') {
                    indexHtml += '<li><a href="#' + $(this).attr('id') + '">' + $(this).html() + '</a>';

                    indexHtml += '<ul class="nav h3item">';
                    $("h3[id^='" + $(this).attr("id") + "_']").each(function () {
                        if (typeof $(this).attr('id') !== 'undefined') {
                            indexHtml += '<li><a href="#' + $(this).attr('id') + '">' + $(this).html() + '</a></li>';
                        }
                    });
                    indexHtml += '</ul></li>';
                }
            });
            indexHtml += '</ul></li>';
        }
    });
    indexHtml += '</ul>';
    $('.menu-items').html(indexHtml);

    $('body')
        .scrollspy({ target: '.menu-items' })
        .on('activate.bs.scrollspy', function () {
            $('.h2item').hide();
            $('.h3item').hide();

            var h2active = $('.h2item > .active');
            h2active.parent().show();
            h2active.find('ul').show();
            $('.active > .h2item').show(300);
        });

    // Fix: Scroll naar het juiste element bij directe URL-navigatie
    if (window.location.hash) {
        var target = $(window.location.hash);
        if (target.length) {
            setTimeout(function () {
                $('html, body').scrollTop(target.offset().top);
           100);
        }
    }
});
