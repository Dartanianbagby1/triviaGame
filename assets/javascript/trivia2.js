$(document).ready(function() {
    var q1 = {
        question: "What's the only k pop group to win a Billboard Award?",
        choice1: "Big Bang",
        choice2: "Girls Generation",
        choice3: "B.T.S.",
        answer: "B.T.S."
    };
    var q2 = {
        question: "How many members are there in Seventeen?",
        choice1: "9",
        choice2: "13",
        choice3: "17",
        answer: "13"
    };
    var q3 = {
        question: "How many memebers of f(x) are Korean?",
        choice1: "3",
        choice2: "12",
        choice3: "2",
        answer: "2"
    };
    var q4 = {
        question: "What year did Big Bang debut?",
        choice1: "2003",
        choice2: "2014",
        choice3: "2006",
        answer: "2006"
    };
    var q5 = {
        question: "Which song is not a super junior song?",
        choice1: "odd eye",
        choice2: "devil",
        choice3: "sorry, sorry",
        answer: "odd eye"
    };
    var q6 = {
        question: "which entertainment company is ikon affiliated with?",
        choice1: "SM entertainment",
        choice2: "YG entertainment",
        choice3: "JYP entertainment",
        answer: "YG entertainment"
    };
    var q7 = {
        question: "which is not a k pop group?",
        choice1: "2pm",
        choice2: "4minute",
        choice3: "6sense",
        answer: "6sense"
    };
    var q8 = {
        question: "Who is the youngest member of Shinee?",
        choice1: "taemin",
        choice2: "onew",
        choice3: "minho",
        answer: "taemin"
    };
    var yourQuestion = [];
    var i = 0;
    var j = 0;
    var timer = 30;
    var intervalId;
    var aright = 0;
    var awrong = 0;

    var imgs = ["assets/img/tumblr_inline_ms7haongkD1qz4rgp.gif", "assets/img/3af174fd3aa9522cf8eead642f9b2ba35a7e029c_hq.gif", "assets/img/100w_d.gif", "assets/img/200w_d.gif", "assets/img/kpop_gifs.gif", "assets/img/tenor.gif", "assets/img/tumblr_inline_n1un0pB9MR1rcrx7x.gif", "assets/img/X13qo.gif", "assets/img/YGLOVE.gif", "assets/img/tumblr_inline_ms7haongkD1qz4rgp.gif", "assets/img/200w_d.gif", "assets/img/tumblr_inline_ms7haongkD1qz4rgp.gif", "assets/img/3af174fd3aa9522cf8eead642f9b2ba35a7e029c_hq.gif", "assets/img/100w_d.gif", "assets/img/200w_d.gif", "assets/img/kpop_gifs.gif", "assets/img/tenor.gif", "assets/img/tumblr_inline_n1un0pB9MR1rcrx7x.gif", "assets/img/X13qo.gif", "assets/img/YGLOVE.gif"];







    function run() {
        timer = 30;
        intervalId = setInterval(decrement, 1000);

        $(".timer").html("<h2>You have " + timer + " seconds.</h2>")
        yourQuestion.push(q1, q2, q3, q4, q5, q6, q7, q8);
        $(".question").html(yourQuestion[i].question);
        $(".a1").html(yourQuestion[i].choice1);
        $(".a2").html(yourQuestion[i].choice2);
        $(".a3").html(yourQuestion[i].choice3);

    }

    function decrement() {
        timer--;
        $(".timer").html("<h2>You have " + timer + " seconds.</h2>")

        if (timer <= 0) {
            wrong();
            stop();
        }
    }

    function next() {
        if (i >= 8) {
            yourscore();
        } else {
            run();
        }
    }

    function stop() {
        clearInterval(intervalId);

    }

    function yourscore() {
        yourQuestion = [];
        $(".question").empty();
        $("button").show();
        $(".directions").show();
        $(".timer").empty();
        $(".question").text("you got " + aright + " right, and " + awrong + " wrong.");
        $(".answer").empty();
        $(".info").empty();
        $(".family").removeClass("family").addClass("start").html("Try again!");
        i = 0;
        j = 0;
        aright = 0;
        awrong = 0;
    }

    function wrong() {
        i++;
        j++;
        awrong++;

        infoWrong();
        $(".a1").text("Sorry! Wrong answer");
    }

    function right() {
        i++;
        j++;
        aright++;

        info();
        $(".a1").text("Right answer!");

    }

    function info() {

        $(".answer").empty();
        $(".timer").empty();
        $(".question").empty();
        var img = $("<img>");
        img.addClass("responsive")
        img.attr("src", imgs[j]);
        img.outerWidth(500).outerHeight(350);

        $(".question").prepend(img);
        setTimeout(noInfo, 4000);
    }

    function infoWrong() {

        $(".answer").empty();
        $(".timer").empty();
        $(".question").empty();
        var img = $("<img>");
        img.addClass("responsive")
        img.attr("src", imgs[9]);
        img.outerWidth(500).outerHeight(350);

        $(".question").prepend(img);
        setTimeout(noInfo, 4000);
    }

    function noInfo() {
        next();
    }


    $(".answer ").on("click", function() {
        clearInterval(intervalId);
        $(".timer").empty();
        if ($(this).text() === yourQuestion[i].answer) {

            right();

            console.log("great!");

        } else {

            wrong();


            console.log("Wrong answer")
        }

    });

    $(".start").on("click", function() {

        $(".info").show();
        $(".question").show()
        $(this).removeClass("start").addClass("family").html("k pop!");
        $(".timer").html("<h2>You have " + timer + " seconds.</h2>")
        $("button").hide();
        $(".directions").hide();
        run();
    });





});