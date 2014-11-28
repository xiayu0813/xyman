(function($) {

    $("a.archive-category-list-link").each(function(){
        var href_val = $(this).attr("href");
        var text_val = $(this).text();
        var set_href_val = "#" + text_val;

        $(this).attr("href",set_href_val);
        $(this).attr("title",text_val);
        $(this).attr("data-src",href_val);
    });

})(jQuery);