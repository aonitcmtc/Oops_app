$(document).ready(function(){

    // Global variable
    var msg_noti_count = 9;
    var content_controller = 'home';

    // Set not null
    msg_noti_count = msg_noti_count > 99 ? "99+":msg_noti_count;

 
    // section Header
    const dheader = `<div class="row">
                        <div id="d-head-left" class="col-2 d-header-tab text-center">
                            <!-- <i class="fa fa-angle-left fa-3x" aria-hidden="true"></i> -->
                        </div>
                        <div id="d-head-title" class="col-8 d-header-tab text-center">
                            <h1>Oops!</h1>
                        </div>
                        <div id="d-head-right" class="col-2 d-header-tab text-center">
                            <!-- <i class="fa fa-angle-right fa-3x" aria-hidden="true"></i> -->
                        </div>
                    </div>`;
    $('#main-header').append(dheader);
    
    // section Footer
    const dfooter = `<div class="row">
                        <div id="d-footer-home" class="col-4 d-footer-nav text-center">
                            <i class="fa fa-home fa-3x" aria-hidden="true"></i>
                            <div id="alert-noti-home"></div>
                        </div>
                        <div id="d-footer-msg" class="col-4 d-footer-nav text-center">
                            <i class="fa fa-comments-o fa-3x" aria-hidden="true"></i>
                            <div id="alert-noti-msg">&ensp;${msg_noti_count}&ensp;</div>
                        </div>
                        <div id="d-footer-profile" class="col-4 d-footer-nav text-center">
                            <i class="fa fa-user fa-3x" aria-hidden="true"></i>
                            <div id="alert-noti-profile"></div>
                        </div>
                    </div>`;
    $('#main-footer').append(dfooter);

    // section Content
    // var dcontent = $("#main-content").load("./message.html");
    // console.log(dcontent);

    // function getContent() {
    //     let controller = getCookie("controller_name");
    //     console.log("Controller name :main: " + controller);
        
    //     $.get('./app/'+controller+'.html', function(data) {
    //         // console.log(data);
    //         $("#main-content").append(data);
    //     }, 'text');
    // }


    // section Cookie User
    function setCookie(username, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires="+d.toUTCString();
        document.cookie = "oopsuser=" + username + ";" + expires + ";path=/";
    }

    // function getCookie(username) {
    //     let name = username + "=";
    //     let ca = document.cookie.split(';');
    //     for(let i = 0; i < ca.length; i++) {
    //         let c = ca[i];
    //         while (c.charAt(0) == ' ') {
    //             c = c.substring(1);
    //         }
    //         if (c.indexOf(name) == 0) {
    //             return c.substring(name.length, c.length);
    //         }
    //     }
    //     return "";
    // }


    // section Cookie Controller
    // function setCookieController(controller_name, exdays) {
    //     const d = new Date();
    //     d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    //     let expires = "expires="+d.toUTCString();
    //     document.cookie = "controller_name=" + controller_name + ";" + expires + ";path=/";
    // }

    function init() {
        // content_controller = 'content_aontroller'
        setCookie("Oops",1); // Default : Oops

        // getContent();
    }
    init();
});