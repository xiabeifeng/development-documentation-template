$(function(){
    // 页面初始化
    $.getJSON("./config/config.json", function(data){
        $('title').html(data.title);
        $('#favicon').attr('href', './image/'+data.favicon);
        $('#headerTop').css('border-top', data.border_top_style);
        $('#logoBox').find('img').attr('src', './image/'+data.logo);
        $('#logoBox').find('img').attr('alt', data.title);
        $('#footer').find('p').html(data.copyright);
    });
    
    $.get("./html/update.html", function(result){
        // $("#content").html(result);
    });
	
    $('.portal').click(function(){
        $(this).siblings('.portal').find('.body').css('display', 'none');
        $(this).find('.body').toggle(500);
    });
});
