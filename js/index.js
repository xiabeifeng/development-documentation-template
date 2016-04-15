$(function(){
    // 页面基础数据初始化
    $.getJSON("./config/config.json", function(data){
        $('title').html(data.title);
        $('#favicon').attr('href', './image/'+data.favicon);
        $('#headerTop').css('border-top', data.border_top_style);
        $('#logoBox').find('img').attr('src', './image/'+data.logo);
        $('#logoBox').find('img').attr('alt', data.title);
        $('#footer').find('p').html(data.copyright);
    });
    
    // 页面主题内容初始化
    $.get("./html/update.md", function(result){
    	md_content = result;
    	html_content = markdown.toHTML(md_content);
        $("#content_body").html(html_content);
    });
	
    // 左侧一级导航点击切换
    $('.portal').click(function(){
        $(this).siblings('.portal').find('.body').css('display', 'none');
        $(this).find('.body').toggle(500);
    });
    
    // 左侧二级导航点击ajax请求数据
    $('.portal').find('a').click(function(){
    	var url = $(this).attr('value');
    	var title = $(this).html();
        $.get(url, function(result){
        	md_content = result;
        	html_content = markdown.toHTML(md_content);
        	$('.content_head').find('h2').html(title);
            $("#content_body").html(html_content);
        });
    });
});
