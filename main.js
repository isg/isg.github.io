$(document).ready(function() {
    $("#name").click(function(e){
        e.preventDefault();
        e.stopPropagation();

        $(this).removeClass().addClass("animated bounce");
        var wait = setTimeout(function(){
            window.location = "/";
        }, 800);
    });
    $('.project-title.has-link').mouseover(function(e) {
        var obj = $(e.currentTarget.parentElement).find("div:eq(0)").find("div:eq(0)");
        var text = obj.find("a:eq(0)");
        $(obj).addClass("is-hovering");
        $(text).addClass("is-hovering-text");
    });
    $('.project-title.has-link').mouseout(function(e) {
        var obj = $(e.currentTarget.parentElement).find("div:eq(0)").find("div:eq(0)");
        var text = obj.find("a:eq(0)");
        $(obj).removeClass("is-hovering");
        $(text).removeClass("is-hovering-text");
    });
    $('a.linkExternal').on('click',function(e){
        e.preventDefault();
        window.open($(this).attr('href'));
    });
    $('#year').text(new Date().getFullYear());
});
