$(document).ready(function () {
    // копирование текста в буфер
    new ClipboardJS('.btnClipboard');
    // табы
    $( "#tabs" ).tabs({ show: "fade", hide: "fade" });
    // селектрик
    if ($("select").length > 0) {
        $("select").selectric();
    }
    // выпадающая дата
    $('input.date').datepicker();
    // аккордион
    var accord = $('.accordItem');
    accord.find('.accordTop:not(.active)').siblings('div').slideUp();
    accord.find('.accordTop .accordBtn').on('click', function () {
        // accord.find('.accordTop.active').removeClass('active').siblings('div').slideUp();
        $(this).parent().siblings('.accordBottom').stop().slideToggle(500);
        if ($(this).parent().hasClass('active')){
            $(this).parent().removeClass('active');
        }
        else {
            $(this).parent().addClass('active');
        }
    });

    $('.progrBar .progressLine').each(function() {
        var progress = Number($(this).parent().attr("progress"));
        var s = /\d+/;
        var progrWidth = $(this).parent().css("width").match(s);
        var result = progrWidth * progress / 100;
        $(this).css('width', result);
    });

    $(".dial").knob({
        width: 150,
        height: 150,
        thickness: 1,
        fgColor: "#a728ff",
        bgColor: "#140c29",
        font: "Intro"
    });
    $(".dial").each(function(index, elem){
        var a = Number($(this).val());
        var b = $(this);    
        $({animatedVal: 0}).animate({animatedVal: a}, {
            duration: 2000,
            easing: "swing",
            step: function() {
                b.val(Math.ceil(this.animatedVal)).trigger("change"); 
            }
        });
    });
     $('.hamburger').on('click', function() {
        $(this).toggleClass('selected');
        $('.mainMenu').toggleClass('active');
        $('.mainMenu').stop().slideToggle();
    });

    function clock() {
        var date = new Date(),
            day = date.getDate(),
            month = date.getMonth(),
            monthArr = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEPT", "OCT", "NOV", "DEC"],
            year = date.getFullYear(),
            hour = date.getHours(),
            min = date.getMinutes(),
            sec = date.getSeconds();

        if (day < 10) {
            day = "0" + day;
        }
        if (hour < 10) {
            hour = "0" + hour;
        }
        if (min < 10) {
            min = "0" + min;
        }
        if (sec < 10) {
            sec = "0" + sec;
        }

        document.getElementById("headerTime").innerHTML = hour + ":" + min + ":" + sec + "";
        document.getElementById("headerDate").innerHTML = day + " " + monthArr[month] + " " + year;
    }

    var timer;

    function clockStart() {
        timer = setInterval(clock, 1000);
        clock();
    }

    clockStart();
});