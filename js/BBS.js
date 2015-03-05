/**
 * Created by Rujia Song on 2014/8/14.
 */
window.onload = function(){
    var have_page = document.getElementById("have_page");
    var select_page = have_page.getElementsByTagName("select")[0].value;

    function show(){
        this.style.display = "block";
        document.documentElement.style.overflow='auto';
        document.body.style.overflow='auto';
    }
    function hide(){
        this.style.display = "none";
    }
    var login_btn = document.getElementById("login_btn");
    var close_btn = document.getElementById("close_btn");
    var popup = document.getElementById("popup");
    login_btn.addEventListener("click",function(){
        show.call(popup);
    })
    close_btn.addEventListener("click",function(){
        hide.call(popup);
    })

    var reply_button = document.getElementById("reply_button");
    var close_btn2 = document.getElementById("close_btn_2");
    var popup2 = document.getElementById("popup_2");
    reply_button.addEventListener("click",function(){
        show.call(popup2);
    })

    var a = none;
    if(a){
        alert(a);
    }
    close_btn2.addEventListener("click",function(){
        hide.call(popup2);
    })

    function show_reply(){
        return function(){
            show.call(popup2);
        }
    }
    var reply_reply_button = document.getElementsByClassName("reply_reply_button");
    for(var i = 0;i < reply_reply_button.length;i++){
        reply_reply_button[i].addEventListener("click",show_reply(),false);
    }

    var replys = document.getElementsByClassName("reply_reply");
    var reply_reply_btn = document.getElementsByClassName("reply_reply_btn");
    var show_all = document.getElementsByClassName("show_all");

    for(var i = 0;i < replys.length;i++){
        var state = true;
        reply_reply_btn[i].addEventListener("click",reply(i,state),false)
    }

    function reply(i,state) {
        return function(){
            if(state){
                reply_reply_btn[i].getElementsByTagName("img")[0].src = "img/pack_up.png";
                reply_reply_btn[i].getElementsByTagName("span")[0].className = "reply_reply_hide";
                reply_reply_btn[i].getElementsByTagName("span")[1].className = "reply_reply_show";
                state = false;
                replys[i].style.display = "block";
            }else {
                reply_reply_btn[i].getElementsByTagName("img")[0].src = "img/Hi_details_reply.png";
                reply_reply_btn[i].getElementsByTagName("span")[0].className = "reply_reply_show";
                reply_reply_btn[i].getElementsByTagName("span")[1].className = "reply_reply_hide";
                state = true;
                replys[i].style.display = "none";
            }
        }

    }

    for(var i = 0;i < show_all.length;i++){
        show_all[i].addEventListener("click",show_other(i),false);
    }
    var message_hidden = document.getElementsByClassName("message_hidden");
    function show_other(i){
        return function(){
            message_hidden[i].className = "";
            show_all[i].style.display = "none";
        }
    }
};