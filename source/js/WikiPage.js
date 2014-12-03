(function($) {

	var list = $("a.wiki-list-link");
	var posts_list = $("ul.wiki-list-posts");
	var posts_list_link = $("a.wiki-list-post-link");
  var box = $('.wiki-list-box');

	posts_list.css("display","none");
	posts_list.filter("#wiki").css("display","block");
    list.each(function(){
      $(this).click(function(){
      	var thisname = $(this).text();
      	posts_list.css("display","none");
		    posts_list.filter("#"+thisname).css("display","block");
      });
    });
 
   
  posts_list_link.each(function(){
    $(this).click(function(){
      var listSrc=$(this).attr('data-src').toString()+' article';
      box.load(listSrc);
      posts_list_link.removeClass('current');
      $(this).addClass('current');
     });  
    });

})(jQuery);