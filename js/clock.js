$(function(){
    var clock = document.getElementById("clock");
    function initNumLocation(){
        // 1-12个数字的位置设置
        var radius = 160;//大圆半径
        var dot_deg = 360/$(".dot").length;//每个整点对应的角度差
        //每一个dot对应的弧度;
        var dot_rad = dot_deg*Math.PI/180;//PI/6
        $(".dot").each(function(index) {
            $(this).css({
                "left":180+Math.sin(dot_rad*index)*radius,
                "top":180+Math.cos(dot_rad*index)*radius
            });
        });
        // 2、刻度设置
        for(var i = 0; i < 60; i++) {
            clock.innerHTML += "<div class='clock-scale'> " + 
                   "<div class='scale-hidden'></div>" + 
                   "<div class='scale-show'></div>" + 
                  "</div>";
        }
        var scale = document.getElementsByClassName("clock-scale");
            for(var i = 0; i < scale.length; i++) {
                scale[i].style.transform="rotate(" + (i * 6 - 90) + "deg)";
                if(i%5 == 0){
                    $(".clock-scale").eq(i).find(".scale-hidden").css({width:"179px"});
                    $(".clock-scale").eq(i).find(".scale-show").css({width:"16px",backgroundColor:"#f00"});  
                }
        }
    }
    initNumLocation();//调用上面的函数
    //获取时钟id
    var hour_hand = document.getElementById("hour_hand"),
        minute_hand = document.getElementById("minute_hand"),
        second_hand = document.getElementById("second_hand"),
        date_info = document.getElementById("date_info"),//获取date_info
        hour_time = document.getElementById("hour_time"),// 获去时间id
        minute_time = document.getElementById("minute_time"),
        second_time = document.getElementById("second_time");
    //3、设置动态时间
    function setTime(){
        var nowdate = new Date();
        //获取年月日时分秒
        var year = nowdate.getFullYear(),
            month = nowdate.getMonth()+1,
            day = nowdate.getDay(),//获取日期中的星期几
            hours = nowdate.getHours(),
            minutes = nowdate.getMinutes(),
            seconds = nowdate.getSeconds(),
            date = nowdate.getDate();//获取日期月份中的天数
        var weekday =["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
        // 获取日期id
        date_info.innerHTML=year+"年"+month+"月"+date+"日 "+weekday[day];
        hour_time.innerHTML = hours >=10 ? hours : "0"+hours;
        minute_time.innerHTML = minutes >=10 ? minutes : "0"+minutes;
        second_time.innerHTML = seconds >=10 ? seconds : "0"+seconds;
        console.log(year+"年"+month+"月"+day+"日   "+weekday[day]);
        //时分秒针设置
        var hour_rotate = (hours*30-90) + (Math.floor(minutes / 12) * 6);
        hour_hand.style.transform = 'rotate(' + hour_rotate + 'deg)';
        minute_hand.style.transform = 'rotate(' + (minutes*6 - 90) + 'deg)';
        second_hand.style.transform = 'rotate(' + (seconds*6 - 90)+'deg)';
    }
    // setTime();
    setInterval(setTime, 1000);//间隔调用函数
    
    
});