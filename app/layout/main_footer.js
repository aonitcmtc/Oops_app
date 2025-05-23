$(document).ready(function(){
 
    $("#d-footer-home").click(function() {
        $("#d-head-title").html("");
        $("#d-head-title").append("<h1>HOME</h1>");

        // let controller = getCookie("controller_name");
        // console.log("Controller name : " + controller);
        // if(controller != 'home'){
        //     setCookieController("home");
        // }

        getContent("home");
    });

    $("#d-footer-msg").click(function() {
        $("#d-head-title").html("");
        $("#d-head-title").append("<h1>MESSAGE</h1>");
        
        // let controller = getCookie("controller_name");
        // console.log("Controller name : " + controller);
        // if(controller != 'message'){
        //     setCookieController("message");
        // }

        getContent("message");
    });

    $("#d-footer-profile").click(function() {
        $("#d-head-title").html("");
        $("#d-head-title").append("<h1>PROFILE</h1>");

        // let controller = getCookie("controller_name");
        // console.log("Controller name : " + controller);
        // if(controller != 'profile'){
        //     setCookieController("profile");
        // }

        getContent("profile");
    });


    // getContent
    function getContent(menu_name) {
        // let controller = getCookie("controller_name");
        // console.log("Controller name :footer: " + controller);

        // Clear Content
        $("#main-content").html("");
        
        $.get('./app/'+menu_name+'.html', function(data) {
            // console.log(data);
            $("#main-content").append(data);
        }, 'text');
    }

    // section Cookie Controller
    // function setCookieController(controller_name, exdays) {
    //     const d = new Date();
    //     d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    //     let expires = "expires="+d.toUTCString();
    //     document.cookie = "controller_name=" + controller_name + ";" + expires + ";path=/";
    // }

    function getCookie(username) {
        let name = username + "=";
        let ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

});