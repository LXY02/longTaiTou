/**
 * Created by XFT User on 2017/4/2 0002.
 */
$(function () {
    //自适应基础
    function initFontSize() {
        var html = document.documentElement;
        var windowWidth = html.clientWidth;
        html.style.fontSize = windowWidth / 7.5 + 'px'; //6.4来自于设计稿的宽度640px，同理如果设计稿宽750px，则除以7.5
    }

    initFontSize();
    $(window).resize(function () {
        initFontSize();
    });
});