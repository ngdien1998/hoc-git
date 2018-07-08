$(window).ready(() => {
    $("#username").focus();

    $("#sign-up-btn").click(function () {
        window.open("sign.up.html", "_self");
    });

    $("#login-btn").click(function () {
        let username = $("#username").val();
        let password = $("#password").val();
        if (username == "" || password == "") {
            alert("Please enter both username and password");
            return false;
        }

        window.open("index.html", "_self");
        return true;
    });

    particleground(document.getElementById('particles'), {
        dotColor: '#fafafa',
        lineColor: '#fafafa'
    });
});